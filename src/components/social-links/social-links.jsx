import * as styles from "./social-links.module.scss";
import {SocialIcon} from "../social-icon/social-icon";
import {SocialMediaLinks} from "../../constants/social-media-links";
import * as React from "react";

export const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <SocialIcon size={"small"} icon={"facebook"} href={SocialMediaLinks.facebook} displayLink={true}/>
            <SocialIcon size={"small"} icon={"instagram"} href={SocialMediaLinks.instagram} displayLink={true}/>
            <SocialIcon size={"small"} icon={"youtube"} href={SocialMediaLinks.youtube} displayLink={true}/>
        </div>
    );
}
