import StatDistribution from "./StatDistribution";
import TextTag from "../../shared/TextTag";
import styles from "./ContentInfo.module.css";
import type { BeastieType } from "../../data/BeastieData";
import MoveList from "./MoveList";
import designers from "../../data/raw/designers.json";
import abilities from "../../data/abilities";
import InfoBox, { BoxHeader } from "../../shared/InfoBox";
import ResearchCarousel from "./ResearchCarousel";
import ComboMove from "./ComboMove";
import { useState } from "react";
import Sfx from "./Sfx";
import Evolution from "./Evolution";
import { useTranslation } from "react-i18next";

type Props = {
  beastiedata: BeastieType;
};

const NUMBER_FORMAT = Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  currencyDisplay: "narrowSymbol",
});

function ExpForLevel({ growth }: { growth: number }) {
  const { t } = useTranslation();
  const ns = "beastiepedia.contentInfo";

  const [userLevel, setUserLevel] = useState(100);
  const level = Math.min(Math.max(userLevel, 0), 100);
  return (
    <InfoBox
      header={
        <>
          {t(ns + ".expForLevelPre")}
          <input
            type="number"
            className={styles.levelInput}
            min={0}
            max={100}
            onChange={(event) =>
              setUserLevel(Number(event.currentTarget.value))
            }
            value={level || ""}
          />
          <button onClick={() => setUserLevel(Math.max(1, level - 1))}>
            -
          </button>
          <button onClick={() => setUserLevel(Math.min(100, level + 1))}>
            +
          </button>
          {t(ns + ".expForLevelPost")}
        </>
      }
    >
      {level ? Math.floor(level ** 3 * growth).toLocaleString() : "?"}
    </InfoBox>
  );
}

/* prettier-ignore */
const TRAINING_TYPE: Record<string, React.ReactElement> = {
  b: <img src="/gameassets/sprIcon/0.png" alt="Body" className={styles.trainingImage} />,
  h: <img src="/gameassets/sprIcon/1.png" alt="Spirit" className={styles.trainingImage} />,
  m: <img src="/gameassets/sprIcon/2.png" alt="Mind"className={styles.trainingImage} />,
};

export default function ContentInfo(props: Props): React.ReactNode {
  const { t } = useTranslation();
  const ns = "beastiepedia.contentInfo";

  const beastiedata = props.beastiedata;

  const training = beastiedata.tyield
    .map((type, index, array) => {
      if (index % 2 != 0) return null;
      return (
        <span key={index} className={styles.training}>
          {index != 0 ? <br /> : null}
          <span>+{array[index + 1]} </span>
          {TRAINING_TYPE[(type as string)[0]]}
          <span>{(type as string)[1] == "a" ? t(ns + ".pow") : t(ns + ".def")}</span>
        </span>
      );
    })
    .filter((value) => !!value);

  return (
    <div className={styles.info}>
      <div className={styles.wrapinfoboxes}>
        <InfoBox header={t(ns + ".number")}>#{beastiedata.number}</InfoBox>
        <InfoBox header={t(ns + ".name")}>{beastiedata.name}</InfoBox>
        <InfoBox header={t(ns + ".development")}>{beastiedata.anim_progress}%</InfoBox>
        <Evolution beastiedata={beastiedata} />
      </div>

      <InfoBox header={t(ns + ".description")}>{beastiedata.desc}</InfoBox>

      <InfoBox header={t(ns + ".traits")}>
        <table className={styles.traittable}>
          <tbody>
            {beastiedata.ability.map((value, index) =>
              value in abilities ? (
                <tr key={value}>
                  <td>
                    {abilities[value].name}
                    {beastiedata.ability_hidden && index > 0
                      ? t(ns + ".recessiveTrait")
                      : ""}
                  </td>
                  <td>
                    <TextTag>
                      {abilities[value].desc.replace(/\|/g, "")}
                    </TextTag>
                  </td>
                </tr>
              ) : (
                t(ns + ".unknownTrait") + value
              ),
            )}
          </tbody>
        </table>
      </InfoBox>

      <BoxHeader>{t(ns + ".statDist")}</BoxHeader>
      <StatDistribution beastiedata={beastiedata} />

      <div className={styles.wrapinfoboxes}>
        <InfoBox header={t(ns + ".recruitCondition")}>
          {beastiedata.recruit_value != 0.5 ? (
            <>
              <TextTag>{beastiedata.recruit.description}</TextTag>
              <br />
              <span className={styles.training}>
                <img
                  src="/gameassets/sprSponsors/1.png"
                  alt="Staying Power Fitness Sponsor"
                  className={styles.gymLogo}
                />
                <span>{NUMBER_FORMAT.format(beastiedata.recruit_value)}</span>
              </span>
            </>
          ) : (
            t(ns + ".recruitNoWild")
          )}
        </InfoBox>
        <InfoBox header={t(ns + ".allyTraining")}>{training}</InfoBox>
        <ExpForLevel growth={beastiedata.growth} />
      </div>

      <MoveList
        movelist={beastiedata.attklist}
        learnset={beastiedata.learnset}
      />
      <ComboMove beastiedata={beastiedata} />

      <InfoBox header={t(ns + ".research")}>
        <div className={styles.research}>
          <ResearchCarousel beastieid={beastiedata.id} />
        </div>
        {t(ns + ".researcher")}
        {Array.isArray(beastiedata.designer)
          ? beastiedata.designer.map((i) => designers[i]).join(", ")
          : designers[beastiedata.designer]}
        <br />
        {t(ns + ".videographer")}
        {Array.isArray(beastiedata.animator)
          ? beastiedata.animator.map((i) => designers[i]).join(", ")
          : designers[beastiedata.animator]}
      </InfoBox>
      <Sfx beastiedata={beastiedata} />
    </div>
  );
}
