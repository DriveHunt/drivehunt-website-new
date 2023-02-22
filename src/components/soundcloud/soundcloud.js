import * as React from "react";
import * as styles from "./soundcloud.module.scss";

export const Soundcloud = () => {
    return (
        <div className={styles.soundcloud}>
            <div className={"container"}> 
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <iframe title="To The Top - Drive Hunt" width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1419266122&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        <iframe title="Wild and Free - Drive Hunt" width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1427158474&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        <iframe title="Free World - Drive Hunt" width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1442689105&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
  };