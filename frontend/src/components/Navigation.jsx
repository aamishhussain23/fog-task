import styles from "./styles/Navigation.module.css";
import levelImage from "../assets/soldier__level-icon.png";
import gameLogo from "../assets/home__logo.png";
import { RingProgress } from "@mantine/core";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <p>HOME</p>
        <p>MULTIPLAYER</p>
        <p>CAMPAIGN</p>
        <p className={styles.selected}>SOILDER</p>
        <p>STORE</p>
        <p>MORE</p>
      </div>
      <div className={styles.group}>
        <div className={styles.level}>
          <RingProgress
            label={<img src={levelImage} alt="" />}
            thickness={2}
            size={50}
            rootColor="#8a959a"
            sections={[{ value: 70, color: "yellow.6" }]}
          />
        </div>
        <div className={styles.logo}>
          <img src={gameLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
