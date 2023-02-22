import * as React from "react"

import "../styles/styles.scss"
import {Logo} from "../components/logo/logo";
import {Parallax} from "../components/parallax/parallax";
import {Opener} from "../components/opener/opener";
import {SocialBanner} from "../components/social-banner/social-banner";
import {StaticImage} from "gatsby-plugin-image";
import {Gallery} from "../components/gallery/gallery";
import {YouTubeVideo} from "../components/youtube/youtube";
import {SocialLinks} from "../components/social-links/social-links";
import {BottomNav} from "../components/bottom-nav/bottom-nav";
import {Link} from "gatsby";

const IndexPage = () => (
  <>
        <SocialBanner/>
        <Parallax height={250} centeredAt={"top"}>
            <Opener/>
            <Logo/>
        </Parallax>
        <main>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <h1>
                            Make Rock great again!
                        </h1>
                    </div>
                    <div className={"col-lg-6"}>
                        <p>
                            Drive Hunt bringt genau das auf die Bühne, was wahren Musik-Liebhabern und Rockfans während
                            der langen Pandemie-Pause gefehlt hat:
                            &nbsp;<span className={"emphasised"}>Ehrliche Rockmusik in überzeugender Qualität</span>
                        </p>
                        <p>
                            Die Regensburger Band bietet einen authentischen Mix aus neuen Songs im Classic Rock Stil
                            und einem Best of der Rockgeschichte.
                        </p>
                    </div>
                    <div className={"col-lg-6"}/>
                </div>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <Gallery>
                            <StaticImage aspectRatio={3/4} src={"../assets/images/live/foodrock-21-002.jpg"} alt={"Guitarist"}/>
                            <StaticImage aspectRatio={3/4} src={"../assets/images/live/foodrock-21-004.jpg"} alt={"Singer"}/>
                            <StaticImage aspectRatio={3/4} src={"../assets/images/live/foodrock-21-003.jpg"} alt={"Guitarist"}/>
                        </Gallery>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <h2>
                            Music – Recording in progress
                        </h2>
                        <p>
                            ...more infos coming soon! STAY TUNED!
                        </p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <Gallery>
                            <StaticImage aspectRatio={5/3} src={"../assets/images/live/foodrock-21-001.jpg"} alt={"Drummer"}/>
                            
                        </Gallery>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2>Support us</h2>
                        <SocialLinks />
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2>Live impressions</h2>
                        <YouTubeVideo id={"dPMJQCmfcs0"}/>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2>Contact & Booking</h2>
                        Tel.: <a href={"tel:+491715785687"}>0171 57 85 68 7</a><br/>
                        E-Mail: <a href={"mailto:management@drivehunt.de"}>management@drivehunt.de</a>
                    </div>
                </div>
            </div>
        </footer>
        <BottomNav>
            <span>Copyright © 2022 Drive Hunt</span>
            <span><Link to={"/imprint"}>Impressum</Link></span>
        </BottomNav>

  </>
)

export default IndexPage

export const Head = () => <title>Home Page</title>
