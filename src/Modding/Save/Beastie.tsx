import BEASTIE_DATA from "../../data/Beastiedata";
import { SaveBeastie } from "./SaveType";
import savestyles from "./Save.module.css";
import styles from "./Beastie.module.css";
import EventElement from "./EventElement";
import { VIBES } from "./BeastieValues";
import useBeastieRender from "../../shared/beastieRender/useBeastieRender";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const altMap: { [key: number]: "colors" | "shiny" | "colors2" } = {
  1: "colors",
  2: "shiny",
  3: "colors2",
};

const altSearchMap: { [key: number]: string } = {
  1: "color",
  2: "raremorph",
  3: "alt",
};

function InfoBox(
  props: PropsWithChildren & { title: string },
): React.ReactElement {
  return (
    <div>
      <div className={savestyles.header}>{props.title}</div>
      <div className={savestyles.varcontainer}>{props.children}</div>
    </div>
  );
}

export default function Beastie(props: {
  beastie: SaveBeastie;
}): React.ReactElement {
  const save_beastie = props.beastie;
  const beastiedata = BEASTIE_DATA.get(props.beastie.specie);

  const searchParam = altSearchMap[Math.ceil(props.beastie.color[0])];

  const beastieColors = save_beastie.color.map(
    (value) => value - Math.ceil(value) + 1,
  );

  const beastieUrl = useBeastieRender(`/icons/${beastiedata?.name}.png`, {
    id: props.beastie.specie,
    colors: beastieColors,
    colorAlt: altMap[Math.ceil(props.beastie.color[0])],
  });
  console.log(props.beastie.color.map((value) => value - Math.ceil(value) + 1));

  if (!beastiedata) {
    throw Error(`Invalid Beastie? ${save_beastie.specie}`);
  }
  // const [min_scale, max_scale] = beastiedata.scale;
  // const beastie_scale =
  //   (min_scale + save_beastie.scale * (max_scale - min_scale)) / max_scale;

  return (
    <div className={styles.beastie}>
      <div className={styles.beastiepreview}>
        <div className={savestyles.header}>Preview</div>
        <div className={savestyles.varcontainer}>
          <img src={beastieUrl} className={styles.beastieimage} />
        </div>
      </div>
      <div className={styles.beastieinfo}>
        <InfoBox title="Name">
          <span>{save_beastie.name}</span>
          {save_beastie.number != "" ? (
            <span className={styles.beastienumber}>#{save_beastie.number}</span>
          ) : null}
        </InfoBox>
        <InfoBox title="Level">{save_beastie.level}</InfoBox>
        <InfoBox title="Vibe">
          {VIBES[save_beastie.vibe] ?? save_beastie.vibe}
        </InfoBox>
        <InfoBox title="PID">{save_beastie.pid}</InfoBox>
        <InfoBox title="Beastiepedia">
          <Link
            to={`/beastiepedia/${beastiedata.name}?${searchParam}=${beastieColors.join(",")}`}
            target="_blank"
          >
            Preview in the Beastipedia
          </Link>
        </InfoBox>

        <InfoBox title="Events">
          <div className={styles.eventlist}>
            {save_beastie.event_log.events.map((event) => (
              <EventElement
                key={`${event.date}-${event.event}`}
                event={event}
              />
            ))}
          </div>
        </InfoBox>
      </div>
    </div>
  );
}
