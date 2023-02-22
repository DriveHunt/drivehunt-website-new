import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "./opener.module.scss";

export const Opener = () => {
    return (
        <div className={styles.opener}>
            <StaticImage className={styles.image} src={"../../assets/images/header.jpg"} alt={""} />
        </div>
    );
}
