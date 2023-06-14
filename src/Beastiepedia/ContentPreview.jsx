// @flow strict

import styles from "./Content.module.css";
import type { BeastieType } from "./data/BeastieType.js";

type Props = {
  beastiedata: BeastieType,
};

export default function ContentPreview(props: Props): React$Node {
  var beastiedata = props.beastiedata;
  return (
    <div className={styles.preview}>
      <div className={styles.inner}>{beastiedata.name}</div>
    </div>
  );
}
