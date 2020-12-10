import logo from './logo.svg';
import styles from './App.module.css';
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Main from "./components/main/main";

function App() {
  return (
    <div className={styles.bossdiv}>
        <Header />
        <main>
            {/*<Menu />*/}
            <Main />
        </main>
    </div>
  );
}

export default App;
