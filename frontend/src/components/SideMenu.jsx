import { Icon } from "@iconify/react";

import game1 from "../assets/games/side-menu__game1.png";
import game2 from "../assets/games/side-menu__game2.png";
import game3 from "../assets/games/side-menu__game3.png";
import game4 from "../assets/games/side-menu__game4.png";
import game5 from "../assets/games/side-menu__game5.png";

import other1 from "../assets/others/side-menu.png";
import other2 from "../assets/others/side-menu2.png";

import styles from "./styles/SideMenu.module.css";
import { Tooltip } from "@mantine/core";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.games}>
        <div className={styles.banner}>
          <img src={game1} alt={"game one"} />
        </div>
        <div className={styles.banner}>
          <img src={game2} alt={"game two"} />
        </div>
        <div className={`${styles.banner} ${styles.selected}`}>
          <img src={game3} alt={"game three"} />
        </div>
        <div className={styles.banner}>
          <img src={game4} alt={"game four"} />
        </div>
        <div className={styles.banner}>
          <img src={game5} alt={"game five"} />
        </div>
      </div>
      <div className={styles.others}>
        <div className={styles.banner}>
          <img src={other2} alt={"other two"} />
        </div>
        <div className={styles.banner}>
          <img src={other1} alt={"other one"} />
        </div>
      </div>
      <div className={styles.misc}>
        <Tooltip label="HELP" position="right" offset={16}>
          <Icon icon="pajamas:question" style={{ color: "var(--neutral)" }} />
        </Tooltip>

        <Tooltip label="QUIT" position="right" offset={16}>
          <Icon
            icon="grommet-icons:power-shutdown"
            style={{ color: "var(--neutral)" }}
          />
        </Tooltip>
      </div>
    </div>
  );
}
