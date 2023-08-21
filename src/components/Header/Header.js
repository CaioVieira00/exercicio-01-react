import { MainMenu } from "../MainMenu/MainMenu";
import { Search } from "../Search/Search";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <div className="logo-title">
                <h1>Olá pessoal!</h1>
            </div>

            <div className={styles.headerNavigation}>
                <MainMenu />

                <Search />
            </div>
        </header>
    )
}
