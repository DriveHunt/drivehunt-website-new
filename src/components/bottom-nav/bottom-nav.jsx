import * as styles from "./bottom-nav.module.scss";
import * as React from "react";

export const BottomNav = ({ children }) => {
    return (
        <nav className={styles.bottomNav}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <div className={styles.bottomNavContent}>
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
