import { Icon } from "@iconify/react";
import { Text } from "@mantine/core";
import { useState } from "react";
import online from "../assets/invite/home__friend-picture-MaryJane.png";
import offline from "../assets/invite/home__friend-picture.png";
import styles from "./styles/Invite.module.css";

export default function Invite() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`${isOpen && styles.isOpen} ${styles.container}`}
    >
      {!isOpen ? (
        <div className={styles.closed}>
          <div>
            <div className={styles.icon}>
              <Icon icon="fluent:people-team-24-filled" />
            </div>
            <div className={styles.avatar}>+</div>
          </div>
          <div>
            <div className={styles.icon}>
              <Icon icon="grommet-icons:radial-selected" />
            </div>
            <div className={styles.avatar}>
              <img src={online} alt="" />
            </div>
          </div>
          <div>
            <div className={styles.icon}>
              <Icon icon="grommet-icons:radial" />
            </div>
            <div className={styles.avatar} style={{ filter: "opacity(50%)" }}>
              <img src={offline} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.opened}>
          <div>
            {/* title */}
            <div className={styles.icon}>
              <Icon icon="fluent:people-team-24-filled" />
              <div className="">
                <Text size="xs" fw={600} pl={"0.5rem"}>
                  Squad
                </Text>
              </div>
            </div>

            {/* button */}
            <div className={styles.action}>
              <div className={styles.avatar}>+</div>
              <div className={styles.actionButton}>
                <Text size="xs" fw={600}>
                  Squad Join
                </Text>
              </div>
            </div>
          </div>

          <div>
            {/* title */}
            <div className={styles.icon}>
              <Icon icon="grommet-icons:radial-selected" />
              <div className="">
                <Text size="xs" fw={600} pl={"0.5rem"}>
                  ONLINE
                </Text>
              </div>
            </div>

            {/* button */}
            <div className={styles.action}>
              <div className={styles.avatar}>
                <img src={online} alt="" />
              </div>
              <div className={styles.actionButton}>
                <Text size="xs" fw={600}>
                  Mary Jane
                </Text>
                <Text c={"gray.6"} size="xs" fw={600}>
                  Online
                </Text>
              </div>
            </div>
          </div>

          <div>
            {/* title */}
            <div className={styles.icon}>
              <Icon icon="grommet-icons:radial" />
              <div className="">
                <Text size="xs" fw={600} pl={"0.5rem"}>
                  OFFLINE
                </Text>
              </div>
            </div>

            {/* button */}
            <div className={styles.action}>
              <div className={styles.avatar} style={{ filter: "opacity(50%)" }}>
                <img src={offline} alt="" />
              </div>
              <div className={styles.actionButton}>
                <Text c="gray.4" size="xs" fw={600}>
                  420
                </Text>
                <Text c={"gray.6"} size="xs" fw={600}>
                  Offline
                </Text>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
