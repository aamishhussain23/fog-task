import Invite from "./components/Invite";
import Navigation from "./components/Navigation";
import SideMenu from "./components/SideMenu";
import SoilderMenu from "./components/SoldierMenu";
import "@mantine/core/styles.css";
import styles from "./App.module.css";
import { MantineProvider, createTheme } from "@mantine/core";
import emblem from "./assets/others/soldier__BFemblem.png";

const theme = createTheme({
    fontFamily: "Rajdhani, sans-serif",
  primaryColor: "yellow",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <main className={styles.main}>
        <div className={styles.emblem}>
          <img src={emblem} alt="" />
        </div>
        <div className={styles.sidemenu}>
          <SideMenu />
        </div>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Navigation />
          </nav>
          <div className={styles.content}>
            <SoilderMenu />
          </div>
        </div>
        <div className={styles.invite}>
          <Invite />
        </div>
      </main>
    </MantineProvider>
  );
}

export default App;
