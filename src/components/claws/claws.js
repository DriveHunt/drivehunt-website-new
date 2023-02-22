import * as React from "react"
import * as styles from "./claws.module.scss"
import ClawsSVG from "/src/assets/claws.svg"

export const Claws = () => {
  return (
    <div className={styles.clawsContainer}>
      <ClawsSVG className={styles.claws} />
    </div>
  )
}
