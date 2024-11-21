import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../shared/Header";
import Sidebar from "./Sidebar";
import OpenGraph from "../shared/OpenGraph";
import styles from "./Beastiepedia.module.css";
import useScreenOrientation from "../utils/useScreenOrientation";
import BEASTIE_DATA from "../data/BeastieData";
import { BeastieType } from "../data/BeastieData";
import CustomErrorBoundary from "../shared/CustomErrorBoundary";
import ContentPreview from "./Preview/ContentPreview";
import ContentInfo from "./Info/ContentInfo";
import { useSpoilerSeen } from "../shared/useSpoiler";

declare global {
  interface Window {
    BEASTIE_DATA: Map<string, BeastieType>;
    beastie: BeastieType | null | undefined;
  }
}

export default function Beastiepedia(): React.ReactNode {
  const orientation = useScreenOrientation();
  const { beastie }: { beastie?: string } = useParams();

  const [beastieid, beastiedata] = useMemo(() => {
    if (beastie !== null) {
      for (const [key, value] of BEASTIE_DATA) {
        if (value.name == beastie) {
          return [key, value];
        }
      }
    }
    return [undefined, undefined];
  }, [beastie]);

  const [sidebarvisible, setSidebarvisible] = useState(
    !(beastieid !== undefined && orientation),
  ); // Selected beastie & portrait automatically hides sidebar

  const handleDisableSidebar = useCallback(() => {
    if (orientation) {
      setSidebarvisible(false);
    }
  }, [orientation]);

  const [seenBeasties, setSeenBeasties] = useSpoilerSeen();
  useEffect(() => {
    if (beastiedata && !seenBeasties[beastiedata.id]) {
      seenBeasties[beastiedata.id] = true;
      setSeenBeasties(seenBeasties);
    }
  }, [beastiedata, seenBeasties, setSeenBeasties]);

  window.BEASTIE_DATA = BEASTIE_DATA;
  window.beastie = beastiedata;

  return (
    <div className={styles.container}>
      <OpenGraph
        title={beastiedata ? `${beastie} - Beastie 图鉴` : "Beastie 图鉴"}
        image={
          beastiedata
            ? `icons/${beastiedata.name}.png`
            : "gameassets/sprMainmenu/0.png" // beastiepedia icon
        }
        url={beastiedata ? `beastiepedia/${beastiedata.name}` : `beastiepedia/`}
        description={
          beastiedata
            ? beastiedata.desc
            : "View information and previews of the Beasties from Beastieball!"
        }
      />
      <Header
        title={(beastie ? `${beastie} - ` : "") + "Beastie 图鉴"}
        menuButton={true}
        menuButtonState={sidebarvisible}
        onMenuButtonPressed={() => setSidebarvisible((visible) => !visible)}
      />
      <div className={styles.belowheader}>
        <CustomErrorBoundary fallbackClassName={styles.sidebar}>
          <Sidebar
            beastieid={beastieid}
            visibility={sidebarvisible}
            onToggleSidebarVisibility={handleDisableSidebar}
          />
        </CustomErrorBoundary>
        <CustomErrorBoundary fallbackClassName={styles.content}>
          <div
            className={
              beastiedata
                ? sidebarvisible
                  ? styles.content
                  : styles.contentwide
                : sidebarvisible
                  ? styles.contentOff
                  : styles.contentOffWide
            }
          >
            {beastiedata ? (
              <>
                <CustomErrorBoundary fallbackClassName={styles.preview}>
                  <ContentPreview beastiedata={beastiedata} />
                </CustomErrorBoundary>
                <CustomErrorBoundary fallbackClassName={styles.info}>
                  <ContentInfo beastiedata={beastiedata} />
                </CustomErrorBoundary>
              </>
            ) : (
              <h1 className={styles.notselectedtext}>
                未选中 Beastie
                <br />
                {sidebarvisible
                  ? "在左侧栏选中一个 Beastie 以查看详情"
                  : "在左上角菜单中选择一个 Beastie 以查看详情"}
                .
              </h1>
            )}
          </div>
        </CustomErrorBoundary>
      </div>
    </div>
  );
}
