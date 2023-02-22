import * as React from "react"
import {useEffect, useRef, useState} from "react"
import * as styles from "./parallax.module.scss";

export const Parallax = (props) => {
    const background = props.children[0];
    const foreground = props.children[1];
    const centeredAt = props.centeredAt ?? "bottom";
    const height = props.height;

    const [offset, setOffset] = useState(0);
    const containerRef = useRef();

    useEffect(() => {
        const onScroll = () => {
            const boundingRect = containerRef.current?.getBoundingClientRect();
            if (!boundingRect) {
                return;
            }

            if (boundingRect.y > window.innerHeight) {
                return;
            }

            let centerPoint;
            switch (centeredAt) {
                case "top": centerPoint = 0; break;
                case "center": centerPoint = window.innerHeight / 2 - boundingRect.height / 2; break;
                case "bottom": centerPoint = window.innerHeight - boundingRect.height; break;
                default: centerPoint = 0;
            }

            setOffset(boundingRect.y - centerPoint);
        }

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [centeredAt]);

    return (
        <div className={styles.parallax} ref={containerRef} style={{
            height,
            "--scroll-offset": offset,
            "--height": height,
        }}>
            <div className={styles.background}>
                {background}
            </div>

            <div className={`${styles.foreground}`}>
                <div className={`container ${styles.foregroundContent}`}>
                    {foreground}
                </div>
            </div>
        </div>
    )
}
