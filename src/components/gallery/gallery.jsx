import * as styles from "./gallery.module.scss"
import * as React from "react"

export const Gallery = ({ children }) => {
  return (
    <div
      className={styles.gallery}
      style={{
        "--gallery--image-count": children.length,
      }}
    >
      {children}
    </div>
  )
}
