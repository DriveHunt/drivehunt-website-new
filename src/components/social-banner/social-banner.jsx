import * as React from "react"
import * as styles from "./social-banner.module.scss"
import { SocialIcon } from "../social-icon/social-icon"
import { SocialMediaLinks } from "../../constants/social-media-links"

export const SocialBanner = () => {
  return (
    <div className={`container ${styles.socialBanner}`}>
      <div className={styles.socialBannerContent}>
        <h1>Find us on</h1>
        <SocialIcon icon={"instagram"} href={SocialMediaLinks.instagram} />
        <SocialIcon icon={"facebook"} href={SocialMediaLinks.facebook} />
        <SocialIcon icon={"youtube"} href={SocialMediaLinks.youtube} />
        <SocialIcon icon={"spotify"} />
      </div>
    </div>
  )
}
