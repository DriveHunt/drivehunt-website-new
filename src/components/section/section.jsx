import * as React from "react";
import * as styles from "./section.module.scss";
import CrackSVG from "/src/assets/crack.svg";

export const Section = ({ children }) => {
    return (
        <div className={styles.section}>
            <CrackSVG className={styles.crack} />
            <h1 className={styles.title}>{ children }</h1>
        </div>
    )
}
