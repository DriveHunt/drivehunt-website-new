import * as React from "react";
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import header from "./header.jpg"
import * as styles from "./new-parallax.module.scss";
import {Logo} from "../logo/logo";

export const NewParallax = () => {
    return (
        <ParallaxProvider>
            <ParallaxBanner style={{ aspectRatio: '3/1' }}>
            <ParallaxBannerLayer speed={-20}>
                    <img src={header} alt="Sahara Desert landscape" className={styles.parallax}/>
                </ParallaxBannerLayer>                
                <ParallaxBannerLayer speed={-10}>
                    <Logo />
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </ParallaxProvider>
    );
  };