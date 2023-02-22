import * as React from "react"
import * as styles from "./layout.module.scss";

export const Layout = ({children}) => {
    return (
        <div className={`layout container ${styles.layout}`}>
            {children}
        </div>
    )
}
