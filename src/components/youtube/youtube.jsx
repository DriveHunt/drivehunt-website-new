import * as styles from "./youtube.module.scss";
import * as React from "react";

const toNumber = (bool) => bool ? 1 : 0;

const defaultArgs = {
    iv_load_policy: 3,
    cc_load_policy: 0,
    start: 0,
    end: 0
}

export const YouTubeVideo = ({
                                 id, allowFullscreen, showInfo, showRelated
                             }) => {
    const queryArgs = {
        fs: toNumber(allowFullscreen ?? true),
        showinfo: toNumber(showInfo ?? false),
        rel: toNumber(showRelated ?? false),
        ...defaultArgs
    };

    const url = new URL(`https://www.youtube.com/embed/${id}`);
    Object.keys(queryArgs).forEach((key) => {
        url.searchParams.set(key, queryArgs[key]);
    });
    const source = url.toString();

    return (<div className={styles.youtubeVideo}>
        <iframe src={source}
                title={`youtube-${id}`}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width="100%"
        />
    </div>)
}
