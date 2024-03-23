import { Text } from "@mantine/core";
import styles from "./styles/Loadout.module.css";

export default function Loadout({ loadout }) {
  return (
    <div className={styles.card}>
      <Text c="gray.6" size="sm" fw={600}>
        {loadout.title.toUpperCase()}
      </Text>

      <div className={styles.image}>
        <img src={loadout.image} alt="" />
      </div>

      <Text size="sm" fw={600}>
        {loadout.name.toUpperCase()}
      </Text>
      <Text size="sm" fw={600} c="gray.6">
        {loadout.kills ?? loadout.score}
      </Text>
    </div>
  );
}
