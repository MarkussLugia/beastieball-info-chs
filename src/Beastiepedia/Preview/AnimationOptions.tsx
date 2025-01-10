import { BeastieType } from "../../data/BeastieData";
import InfoBox from "../../shared/InfoBox";
import styles from "./ContentPreview.module.css";
import { useTranslation } from "react-i18next";

type Props = {
  paused: boolean;
  setPaused: (paused: boolean) => void;
  frameInputRef: React.RefObject<HTMLInputElement>;
  animation: string;
  setAnimation: React.Dispatch<React.SetStateAction<string>>;
  animationList: string[];
  frameCount: number;
  setFrame: (frame: number) => void;
  changeFrame: (diff: number) => void;
  userSpeed: number;
  setUserSpeed: React.Dispatch<React.SetStateAction<number>>;
  beastiedata: BeastieType;
  alt: number;
  setAlt: React.Dispatch<React.SetStateAction<number>>;
};

export default function AnimationOptions(props: Props): React.ReactElement {
  const { t } = useTranslation();
  const ns = "beastiepedia.animationOptions";
  const alt_nums = props.beastiedata.spr_alt.length > 1;
  return (
    <>
      <InfoBox header={t(`${ns}.title`)}>
        {props.beastiedata.spr_alt.length ? (
          <>
            <label htmlFor="altSprite">{t(`${ns}.altSprite`)}</label>
            <select
              name="altSprite"
              id="altSprite"
              onChange={(event) =>
                props.setAlt(Number(event.currentTarget.value))
              }
              value={props.alt}
            >
              <option value="-1">{t(`${ns}.altSpriteNormal`)}</option>
              {props.beastiedata.spr_alt.map((sprindex, index) => (
                <option key={sprindex} value={index}>
                  {t(`${ns}.altSpriteAlt`)}
                  {alt_nums ? ` ${index + 1}` : ""}
                </option>
              ))}
            </select>
            <br />
          </>
        ) : null}
        <label htmlFor="anim">{t(`${ns}.AnimationOptionTitle`)}</label>
        <select
          name="anim"
          id="anim"
          onChange={(event) => {
            props.setPaused(false);
            props.setAnimation(event.currentTarget.value);
          }}
          value={props.animation}
        >
          {props.animationList.map((value: string) => (
            <option value={value} key={value}>
              {t(`${ns}.animationNames.${value}`)}
            </option>
          ))}
        </select>
        <br />
        <button onClick={() => props.changeFrame(-1)}>{"<-"}</button>
        <button
          onClick={() => {
            props.setPaused(!props.paused);
          }}
        >
          {props.paused ? t(`${ns}.play`) : t(`${ns}.pause`)}
        </button>
        <button onClick={() => props.changeFrame(1)}>{"->"}</button>
        <br />
        <label htmlFor="framenum">{t(`${ns}.framenum`)}</label>
        <input
          ref={props.frameInputRef}
          type="number"
          id="framenum"
          name="framenum"
          min={0}
          max={props.frameCount}
          onChange={(event) => {
            props.setPaused(true);
            props.setFrame(Number(event.currentTarget.value));
          }}
        />
        <div>
          <label htmlFor="speed">{t(`${ns}.speed`)}</label>
          <input
            type="number"
            name="speed"
            id="speed"
            step={0.1}
            min={0}
            value={props.userSpeed}
            style={{ width: "4em" }}
            onChange={(event) =>
              props.setUserSpeed(Number(event.currentTarget.value))
            }
          />
          <button onClick={() => props.setUserSpeed(1)}>{t(`${ns}.reset`)}</button>
        </div>
      </InfoBox>
    </>
  );
}
