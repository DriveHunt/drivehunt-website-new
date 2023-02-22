import * as React from "react"
import * as styles from "./header.module.scss"
import MenuSVG from "/src/assets/menu.svg"

export const Header = () => {
  return (
    <div className={styles.placeholder}>
      <div className={styles.header}>
        <MenuSVG className={styles.menuIcon} />
      </div>
    </div>
  )
}
