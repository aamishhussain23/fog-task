import { Box, Progress, RingProgress, Text, Title } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import badge1 from "../assets/others/BF4_Celebration_Dog_Tag.png";
import badge2 from "../assets/others/premium dog tag.png";
import levelImage from "../assets/soldier__level-icon.png";
import avatar from "../assets/soldier__pic.png";
import Loadout from "./Loadout";
import styles from "./styles/SoldierMenu.module.css";

const getPercent = (a, b) => {
  return (a / b) * 100;
};

export default function SoilderMenu() {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async function () {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + "user");
      if (!res.ok) {
        throw new Error("Couldn't fetch user data");
      }

      const dataObj = await res.json();
      setData(dataObj);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <div className={styles.character}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.badge1}>
          <img src={badge1} alt="" />
        </div>
        <div className={styles.badge2}>
          <img src={badge2} alt="" />
        </div>
      </div>

      {data && (
        <div className={styles.info}>
          <div className={styles.details}>
            <div className={styles.level}>
              <RingProgress
                label={<img src={levelImage} alt="" />}
                thickness={2}
                size={70}
                rootColor="#8a959a"
                sections={[{ value: 70, color: "yellow.6" }]}
              />
            </div>

            <div className={styles.personal}>
              <Text fw={600} size="xl">
                {data.name}
              </Text>

              <div className={styles.rank}>
                <Box className={styles.level}>
                  <Text size="xs">{data.level.current}</Text>
                </Box>
                <div>
                  <Text size="xs" span>
                    {data.level.value} / {data.level.max}
                  </Text>
                  <Text size="xs" c="gray.6" fw={600} span>
                    - Estimated rank up in {data.level.estHour}h
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.table}>
              {data.progress.map((el) => (
                <div key={el.name} className={styles.row}>
                  <Text fw={600} size="xs">
                    {el?.name.toUpperCase()}
                  </Text>

                  <div className="">
                    {el.max && el.value && (
                      <>
                        <Text size="xs" fw={600}>
                          {el.value}/{el.max}
                        </Text>
                        <Progress.Root
                          miw={50}
                          style={{ backgroundColor: "#00000086" }}
                          size="xs"
                          radius="xs"
                        >
                          <Progress.Section
                            c={"primary"}
                            value={getPercent(el.value, el.max)}
                          />
                        </Progress.Root>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.ingame}>
              <div className={styles.scores}>
                <div>
                  <Text size="sm" fw={500}>
                    WINS
                  </Text>
                  <Title order={2}>{data.stats.winPercent}%</Title>
                </div>
                <div>
                  <Text size="sm" fw={500}>
                    SCORE/MIN
                  </Text>
                  <Title order={2}>{data.stats.scoreMin}</Title>
                </div>
                <div>
                  <Text size="sm" fw={500}>
                    KILLS/MIN
                  </Text>
                  <Title order={2}>{data.stats.killsAvg}</Title>
                </div>
              </div>
              <div className={styles.loadouts}>
                {data.loadOuts.map((el) => (
                  <Loadout key={el.title} loadout={el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
