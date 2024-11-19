import styles from "./Shared.module.css";
import githublogo from "../assets/github-mark-white.svg";
import Settings from "./Settings";
import { useState } from "react";

export default function NavIcons(): React.ReactElement {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className={styles.externallinks}>
      <a
        className={styles.navIcon}
        target="_blank"
        rel="noreferrer"
        title="打开 GitHub 源代码仓库"
        href="https://github.com/MarkussLugia/beastieball-info-chs"
      >
        <img
          className={styles.externallinklogo}
          src={githublogo}
          alt="GitHub Logo"
        />
      </a>
      <div
        role="button"
        className={styles.settingsButton}
        tabIndex={0}
        title="Open Website Settings"
        onClick={() => setSettingsOpen(!settingsOpen)}
      >
        <img
          className={styles.settingslogo}
          src={"/gameassets/sprMainmenu/12.png"}
          alt="Settings Menu"
        />
      </div>
      <div>
        <Settings open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      </div>
    </div>
  );
}
