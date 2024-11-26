import InfoBox from "../../shared/InfoBox";
import styles from "./ContentPreview.module.css";

import { useTranslation } from "react-i18next";

type Props = {
  downloadImage: (copy?: boolean) => void;
  downloadGif: () => void;
  gifDisabled: boolean;
  userSpeed: number;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  defaultSize: number;
  setBackground: React.Dispatch<React.SetStateAction<boolean>>;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  fitBeastie: boolean;
  setFitBeastie: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PreviewSettings(props: Props): React.ReactElement {
  const { t } = useTranslation();
  const ns = "beastiepedia.previewSettings";
  return (
    <>
      <InfoBox header="Settings" className={styles.previewSettings}>
        <div className={styles.middlealign}>
          <button onClick={() => props.downloadImage()}>
            {t(`${ns}.savePNG`)}
          </button>
          <button onClick={() => props.downloadImage(true)}>
            {t(`${ns}.copyPNG`)}
          </button>
          <button onClick={props.downloadGif} disabled={props.gifDisabled}>
            {t(`${ns}.saveGIF`)}
          </button>
          {props.userSpeed > 1.2 ? (
            <span
              title={t(`${ns}.speedNotify`)}
              style={{ cursor: "help", userSelect: "none" }}
            >
              ⚠
            </span>
          ) : null}
        </div>
        <label>
          {t(`${ns}.displaySize`)}
          <input
            type="range"
            min={25}
            max={100}
            step={5}
            defaultValue={props.defaultSize}
            onChange={(event) => {
              if (
                props.canvasRef.current &&
                props.canvasRef.current.parentElement
              ) {
                props.canvasRef.current.parentElement.style.width = `${event.currentTarget.value}%`;
              }
            }}
          />
        </label>
        <div className={styles.middlealign}>
          <label htmlFor="whitebg" style={{ userSelect: "none" }}>
            {t(`${ns}.background`)}
            <input
              id="whitebg"
              type="checkbox"
              onChange={(event) => {
                props.setBackground(event.currentTarget.checked);
              }}
            />
            <input
              type="color"
              defaultValue={"#ffffff"}
              onChange={(event) => {
                props.setBackgroundColor(event.currentTarget.value);
              }}
            />
          </label>
        </div>
        <label>
          {t(`${ns}.crop`)}
          <input
            type="checkbox"
            defaultChecked={props.fitBeastie}
            onChange={(event) => {
              props.setFitBeastie(event.currentTarget.checked);
            }}
          />
        </label>
      </InfoBox>
    </>
  );
}
