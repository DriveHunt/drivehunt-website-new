import * as React from "react"
import * as styles from "./social-icon.module.scss"

import InstagramSVG from "/src/assets/logo-instagram.svg"
import FacebookSVG from "/src/assets/logo-facebook.svg"
import YouTubeSVG from "/src/assets/logo-youtube.svg"
import SpotifySVG from "/src/assets/logo-spotify.svg"

const logos = {
  instagram: InstagramSVG,
  facebook: FacebookSVG,
  youtube: YouTubeSVG,
  spotify: SpotifySVG,
}

export const SocialIcon = ({ icon, href, displayLink, size }) => {
  const Icon = logos[icon]
  displayLink = displayLink ?? false
  size = size ?? "big"
  const sizeClass = size === "small" ? styles.sizeSmall : ""

  const link = (
    <span className={styles.link}>
      {href?.replace(/https?:\/\/(www\.)?/, "")}
    </span>
  )

  return (
    <a
      className={`${styles.socialIcon} ${
        href ? "" : styles.inactive
      } ${sizeClass}`}
      target={"_blank"}
      rel={"noreferrer"}
      href={href}
    >
      <Icon className={styles.icon} /> {displayLink ? link : ""}
    </a>
  )
}
