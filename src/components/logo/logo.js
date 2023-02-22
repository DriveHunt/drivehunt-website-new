import * as React from "react"
import * as styles from "./logo.module.scss";
import LogoSVG from "/src/assets/logo.svg";

export const Logo = () => {
    return <LogoSVG className={styles.logo} />
}
