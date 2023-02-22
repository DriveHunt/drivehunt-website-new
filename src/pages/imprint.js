
import {SocialBanner} from "../components/social-banner/social-banner";
import {NewParallax} from "../components/new-parallax/new-parallax";
import * as React from "react";

const ImprintPage = () => (
    <>
        <SocialBanner/>
        <NewParallax></NewParallax>
        <main>
            <div className={"container"}>
                <h1>Impressum</h1>
                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>Drive Hunt<br />
                    M&uuml;nchberger Stra&szlig;e 5<br />
                    93057 Regensburg</p>
                <p>
                    <strong>Vertreten durch:</strong><br />
                    Daniel Weiß<br/>
                    Mario Knab<br/>
                    Maximilian Sauerer<br/>
                    Sabrina Schönert<br/>
                </p>
                <h2>Kontakt</h2>
                <p>Telefon: 01715785687<br />
                    E-Mail: management@drivehunt.de</p>
                <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                    teilzunehmen.</p>

            </div>
        </main>
    </>
);

export default ImprintPage;
