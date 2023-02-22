import * as React from "react"

import "../styles/styles.scss"
import { SocialBanner } from "../components/social-banner/social-banner"
import { StaticImage } from "gatsby-plugin-image"
import { Gallery } from "../components/gallery/gallery"
import { YouTubeVideo } from "../components/youtube/youtube"
import { SocialLinks } from "../components/social-links/social-links"
import { BottomNav } from "../components/bottom-nav/bottom-nav"
import { Link } from "gatsby"
import { NewParallax } from "../components/new-parallax/new-parallax"
import { Soundcloud } from "../components/soundcloud/soundcloud"

const IndexPage = () => (
  <>
    <SocialBanner />

    <NewParallax></NewParallax>
    <main>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-12"}>
            <h1>Wer Drive Hunt möchte, bekommt 100% Drive Hunt.</h1>
          </div>
          <div className={"col-lg-6"}>
            <p>
              Aufgesetzter Rock’n’Roll Look und Playbacks vom Band, um diverse
              Studio-Tricksereien zu kaschieren – damit kann die Rockband aus
              Regensburg nichts anfangen. Drive Hunt performt ihre Songs{" "}
              <span className={"emphasised"}>
                100% live und 100% authentisch.
              </span>
            </p>
          </div>
          <div className={"col-lg-6"} />
        </div>
        <div className={"row"}>
          <div className={"col-lg-12"}>
            <Gallery>
              <StaticImage
                aspectRatio={3 / 4}
                src={"../assets/images/live/foodrock-21-002.jpg"}
                alt={"Guitarist"}
              />
              <StaticImage
                aspectRatio={3 / 4}
                src={"../assets/images/live/foodrock-21-004.jpg"}
                alt={"Singer"}
              />
              <StaticImage
                aspectRatio={3 / 4}
                src={"../assets/images/live/foodrock-21-003.jpg"}
                alt={"Guitarist"}
              />
            </Gallery>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-lg-12"}>
            <h2>Die Vita der Band</h2>
            <p>
              liest sich knackig wie ihre Songs selbst: Mit der Aussicht, doch
              einen Gig im strengen Corona-Lockdown zu spielen,
              <span className={"emphasised"}>
                {" "}
                formierte sich die Band 2021{" "}
              </span>
              mit kurzer Vorlaufzeit, um mit Rocking Chefs Starkoch Ralf
              Jakumeit zum 1. Pfälzer Foodrock Open Air zu fahren und dort dem
              Publikum neben CC Top und Krüger Rockt einzuheizen.
            </p>
            <p>
              <span className={"emphasised"}>
                2022 wurde maßgeblich für Songwriting{" "}
              </span>
              und Studio-Recording genutzt, um das Repertoire zu erweitern. Die
              Titel der ersten Single-Auskopplungen „Wild & Free“, „To The Top“
              oder auch „Free World“ aus dem für das Jahr 2023 erscheinenden
              Debüt-Album sprechen der Frontfrau Sabrina aus der Seele.
            </p>
            <p>
              Doch 100% wirken können und wollen die Songs nur vor Publikum, das
              ehrliche Rockmusik mit Klasse liebt - 100% live und 100%
              authentisch!
            </p>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-12"}>
            <Gallery>
              <StaticImage
                aspectRatio={5 / 3}
                src={"../assets/images/live/foodrock-21-001.jpg"}
                alt={"Drummer"}
              />
            </Gallery>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-12"}>
            <h2>Feel us</h2>
            <Soundcloud></Soundcloud>
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
            <YouTubeVideo id={"hp1wx8sk748"} />
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-12"}>
            <h2>Contact & Booking</h2>
            Tel.: <a href={"tel:+491715785687"}>0171 57 85 68 7</a>
            <br />
            E-Mail:{" "}
            <a href={"mailto:management@drivehunt.de"}>
              management@drivehunt.de
            </a>
          </div>
        </div>
      </div>
    </footer>
    <BottomNav>
      <span>Copyright © 2023 Drive Hunt</span>
      <span>
        <Link to={"/imprint"}>Impressum</Link>
      </span>
    </BottomNav>
  </>
)

export default IndexPage

export const Head = () => <title>Home Page</title>
