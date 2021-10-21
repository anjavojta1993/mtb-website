/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Portrait from '../public/images/portrait.png';
import {
  darkBlue,
  h1,
  largeText,
  lightGrey,
  mediumBlue,
  mediumText,
  normalText,
} from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  //margin-top: 40px;

  @media (max-width: 540px) {
    position: relative;
    margin-top: 120px;
  }

  a {
    :hover {
      cursor: pointer;
      font-weight: bold;
    }

    :visited {
      cursor: pointer;
      color: white;
    }
    :active {
      cursor: pointer;
      color: white;
    }
    :link {
      cursor: pointer;
      text-decoration: underline;
      color: white;
    }
  }
`;

const aboutContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding-top: 20px;
  //background-color: red;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const leftContainer = css`
  display: flex;
  flex-direction: column;
  width: 35%;
  justify-content: center;
  height: 80vh;
  align-items: center;
  //background-color: green;
  margin-bottom: 50px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 0px;
    height: auto;
  }
`;

const leftContainerHeading = css`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 10vh;
  align-items: center;
  font-size: ${mediumText};
  font-weight: 700;
  //background-color: purple;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const rightContainer = css`
  display: flex;
  margin-top: 20px;
  //margin-left: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 65%;
  height: auto;
  margin-bottom: 50px;
  margin-right: 20px;
  //background-color: yellow;

  li {
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 780px) {
    font-size: 0.75rem;
    margin-bottom: 0px;
  }
`;

const containerLeftUpperCorner = css`
  flex-direction: column;
  padding: 10px;
  border-radius: 10px 40px;
  width: 45%;
  height: 450px;
  box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  background-color: ${darkBlue};
  color: white;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    border-radius: 0px;
    order: 1;
  }

  @media (max-width: 780px) {
    font-size: 0.75rem;
    margin-bottom: 0px;
  }
`;

const containerRightUpperCorner = css`
  border-radius: 40px 10px;
  margin-left: 10px;
  box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  flex-direction: column;
  padding: 10px;
  width: 45%;
  height: 450px;
  background-color: ${mediumBlue};
  color: white;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    border-radius: 0px;
    margin: 0px;
    order: 2;
  }

  @media (max-width: 780px) {
    font-size: 0.75rem;
    margin-bottom: 0px;
  }
`;

const containerRightBottomCorner = css`
  border-radius: 10px 40px;
  box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  margin-top: 10px;
  flex-direction: column;
  margin-left: 10px;
  padding: 10px;
  width: 45%;
  height: 450px;
  background-color: ${darkBlue};
  color: white;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    border-radius: 0px;
    margin: 0px;
    order: 3;
  }

  @media (max-width: 780px) {
    font-size: 0.75rem;
    margin-bottom: 0px;
  }
`;

const containerLeftBottomCorner = css`
  border-radius: 40px 10px;
  box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  margin-top: 10px;
  flex-direction: column;
  padding: 10px;
  width: 45%;
  height: 450px;
  background-color: ${mediumBlue};
  color: white;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    border-radius: 0px;
    margin: 0px;
    order: 4;
  }

  @media (max-width: 780px) {
    font-size: 0.75rem;
    margin-bottom: 0px;
    margin-bottom: 20px;
  }
`;

const testimonialContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  height: auto;
  align-items: flex-start;
  background-color: ${darkBlue};
  padding-top: 20px;

  @media (max-width: 1024px) {
    flex-flow: row wrap;
    padding-top: 0px;
  }
`;

const singleTestimonialContainer = css`
  width: 30vw;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: purple;
  padding: 10px;
  margin: 10px;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const testimonialPosition = css`
  color: white;
  height: 50px;
  width: 100%;
  justify-content: center;
  //background-color: green;
  font-size: ${mediumText};
  font-weight: 700;
  text-align: center;
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 780px) {
    font-size: 1rem;
    margin-bottom: 0px;
  }
`;

const testimonialHeading = css`
  color: white;
  //background-color: green;
  font-size: ${mediumText};
  font-weight: 700;
  text-align: center;
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 780px) {
    font-size: 1rem;
  }
`;

const containerHeading = css`
  color: white;
  font-size: ${h1};
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.5px;
  width: 100%;
  justify-content: center;
  height: 20%;
  padding: 80px;
  background-color: ${darkBlue};

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    align-self: center;
    align-items: center;
    padding: 30px;
  }
`;

const portraitContainer = css`
  width: 200px;
  height: 200px;
  margin: 20px;
  //background-color: green;
`;

const testimonialText = css`
  color: white;
  font-size: ${normalText};
  margin: 20px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 780px) {
    font-size: 0.75rem;
    margin: 0px;
  }
`;

const heroContainer = css`
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/about_me.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    //margin-top: 120px;
    height: 30vh;
  }
`;

const heroHeading = css`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 25px;
  font-size: ${h1};
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  letter-spacing: 1.5px;
  //background-color: yellow;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    align-self: center;
    align-items: center;
  }
`;

const aboutHeadingLightBlue = css`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 25px;
  font-size: ${mediumText};
  color: ${mediumBlue};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1rem;
    align-self: center;
    align-items: center;
  }
`;

const aboutHeadingDarkBlue = css`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 25px;
  font-size: ${mediumText};
  color: ${darkBlue};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1rem;
    align-self: center;
    align-items: center;
  }
`;

const quoteContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightGrey};
  height: 20vh;
  width: 100%;
`;

const quoteStyles = css`
  margin: 10px;
  padding: 10px;
  align-content: center;
  font-size: ${mediumText};
  //background-color: blue;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    align-self: center;
    align-items: center;
  }
`;

const aboutPortraitContainer = css`
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Über mich</title>
      </Head>
      <section css={pageContainer}>
        <div css={heroContainer}>
          <div css={heroHeading}>Über mich</div>
        </div>
        <div css={quoteContainer}>
          <div css={quoteStyles}>
            &quot;So manche vermeintliche Bedrohung ist in Wirklichkeit eine
            neue Chance. <br />
            Man muss sie nur sehen und ergreifen.&quot;
          </div>
        </div>
        <div css={aboutContainer}>
          <div css={leftContainer}>
            <div css={leftContainerHeading}>
              MAG. MARLIES THERES BRUNNER, MTD
            </div>
            <div css={aboutPortraitContainer}>
              <Image
                src={Portrait}
                width="400"
                height="400"
                alt="Portrait von Marlies Theres Brunner"
              ></Image>
            </div>
          </div>
          <div css={rightContainer}>
            <div css={containerLeftUpperCorner}>
              <div css={aboutHeadingLightBlue}>Wer bin ich - beruflich?</div>
              <ul>
                <li>IBWL Studium in Wien – Schwerpunkt Human Resources</li>
                <li>Masterstudium in Salzburg- HR Training und Entwicklung</li>
                <li>Zertifizierter Systemischer Coach</li>
                <li>
                  Senior HR Consultant bei Dr. Pendl & Dr. Piswanger Salzburg
                  seit Oktober 2000
                </li>
                <li>Berufscoach </li>
                <li>
                  Mentorin bei der{' '}
                  <Link href="https://www.frauenfachakademie.at">
                    <a target="blank">Frauen:Fachakademie Schloss Mondsee</a>
                  </Link>
                </li>
                <li>
                  Referentin an der FH Salzburg und Wifi Kufstein für
                  Recruiting, Social Media, Employer Branding und Effektive
                  Kommunikation
                </li>
              </ul>
            </div>
            <div css={containerRightUpperCorner}>
              <div css={aboutHeadingDarkBlue}>Wer bin ich - privat?</div>
              <ul>
                <li>Salzburgerin, verheiratet, 3 Töchter</li>
                <li>Sportlich so aktiv wie möglich…</li>
                <li>Mit meiner Vespa unterwegs</li>
                <li>Sehr gern gesellig mit Freunden</li>
              </ul>
            </div>
            <div css={containerLeftBottomCorner}>
              <div css={aboutHeadingDarkBlue}>Was zeichnet mich aus?</div>
              <ul>
                <li>Langjährige Berufserfahrung im Bereich HR</li>
                <li>Unzählige Gespräche mit arbeitswilligen Personen</li>
                <li>Bindeglied zwischen Unternehmen und BewerberInnen</li>
                <li>Zuhören-Beobachten-Motivieren-Coachen</li>
              </ul>
            </div>
            <div css={containerRightBottomCorner}>
              <div css={aboutHeadingLightBlue}>Was motiviert mich?</div>
              <ul>
                <li>
                  Das Selbstbewusstsein zu stärken und die Angst vor neuen
                  beruflichen Herausforderungen zu nehmen
                </li>
                <li>
                  Das Erreichen beruflich gesteckter Ziele zu unterstützen
                </li>
                <li>
                  Den beruflichen Einstieg-Aufstieg-Veränderung -Neustart zu
                  begleiten
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div css={containerHeading}>REFERENZEN</div>
        <div css={testimonialContainer}>
          <div css={singleTestimonialContainer}>
            <div css={testimonialHeading}>Ing. Mag. Anton Ullmann</div>
            <div css={portraitContainer}>
              {' '}
              <img
                src="/images/ullmann.png"
                width="200px"
                height="200px"
                alt="Portrait von Mag. Anton Ullmann"
              />
            </div>
            <div css={testimonialPosition}>
              Head of Strategy Development, Salzburg AG
            </div>
            <div css={testimonialText}>
              &quot;Frau Brunner schärft den ganzheitlichen, objektiven Blick
              auf die eigene Persönlichkeit und ihr Entwicklungspotential. Dabei
              unterstützt sie die klare Fokussierung auf alle nützlichen
              individuellen Stärken, welche man dann zu 100% mit geballter Kraft
              auf die &quot;Strasse&quot; bringt. Fantastisch!&quot;
            </div>
          </div>
          <div css={singleTestimonialContainer}>
            <div css={testimonialHeading}>Mag. Ingrid Langthaler</div>
            <div css={portraitContainer}>
              {' '}
              <img
                src="/images/langthaler.png"
                width="200px"
                height="200px"
                alt="Portrait von Mag. Ingrid Langthaler"
              />
            </div>
            <div css={testimonialPosition}>
              FH Salzburg, Career Center &amp; Unternehmenskooperationen
            </div>
            <div css={testimonialText}>
              &quot;Marlies Brunner weiß aus langjähriger Erfahrung wie eine
              Bewerbung erfolgreich wird. Das besondere ist, dass sie beide
              Seiten kennt - die der Bewerber*in und die des Unternehmens. Von
              ihren praxisnahen Tipps konnten Studierende der FH Salzburg in den
              Beratungsgesprächen bisher sehr profitieren.&quot;
            </div>
          </div>
          <div css={singleTestimonialContainer}>
            <div css={testimonialHeading}>DI Gerhard Brecka</div>
            <div css={portraitContainer}>
              {' '}
              <img
                src="/images/brecka.png"
                width="200px"
                height="200px"
                alt="Portrait von Direktor Gerhard Brecka"
              />
            </div>
            <div css={testimonialPosition}>
              COO, <br />
              Polo AG
            </div>
            <div css={testimonialText}>
              &quot;Frau Marlies Brunner hat mir in einer Zeit des beruflichen
              Umbruchs durch ihre langjährige Erfahrung und Empathie vom ersten
              Gespräch an sehr viel Zuversicht gegeben. Sie hat mir klar
              aufgezeigt, welche Aktivitäten und Maßnahmen mir die entsprechende
              Aufmerksamkeit bei den Personalsuchenden sichert und wie ich aus
              den zahlreichen Bewerbungen heraussteche. Et voilá – es hat prompt
              funktioniert. Vielen Dank Marlies für deine Unterstützung!&quot;
            </div>
          </div>
          <div css={singleTestimonialContainer}>
            <div css={testimonialHeading}>Julia Collini</div>
            <div css={portraitContainer}>
              {' '}
              <img
                src="/images/collini.png"
                width="200px"
                height="200px"
                alt="Portrait von Julia Collini"
              />
            </div>
            <div css={testimonialPosition}>
              BWL-Masterstudentin, <br /> Privatuni Seeburg
            </div>
            <div css={testimonialText}>
              &quot;Ich möchte mich bei Frau Mag. Brunner ganz herzlich
              bedanken. Ich bin schon seit Jahren Klientin bei ihr, und habe von
              dem Karrierecoaching definitiv in meinem Berufs- und Privatleben,
              besonders auch als Frau, profitiert. Durch das Coaching konnte ich
              durch das fachspezifische Wissen von Frau Mag. Brunner viel Neues
              lernen und umsetzen und dieses in meinem Alltag anwenden.&quot;
            </div>
          </div>
          <div css={singleTestimonialContainer}>
            <div css={testimonialHeading}>Gerhard Schallhammer</div>
            <div css={portraitContainer}>
              {' '}
              <img
                src="/images/schallhammer.png"
                width="200px"
                height="200px"
                alt="Portrait von Gerhard Schallhammer"
              />
            </div>
            <div css={testimonialPosition}>
              Vetrieb, Kloeckner Metals Austria GmbH & Co KG
            </div>
            <div css={testimonialText}>
              &quot;In dieser schnelllebigen Zeit ist es wichtig, die richtigen
              Entscheidungen zu treffen. Frau Brunner ist hierbei die beste
              Wahl! Mit viel Fachwissen, Erfahrung, Gespühr führt sie zum
              richtigen Weg und hilft dabei, nie den Mut zu verlieren! Vor allem
              das war besonders wichtig - Danke!&quot;
            </div>
          </div>
          <div css={singleTestimonialContainer}>
            <div css={testimonialHeading}>Mag. Brigitte Maria Gruber</div>
            <div css={portraitContainer}>
              <img
                src="/images/gruber.png"
                width="200px"
                height="200px"
                alt="Portrait von Mag. Brigitte Maria Gruber"
              />
            </div>
            <div css={testimonialPosition}>
              Geschäftsführerin, Frauen:Fachakademie Schloss Mondsee
            </div>
            <div css={testimonialText}>
              &quot;Bei unserem WEITBLICK!-Mentoring haben wir Frau Mag. Brunner
              als äußerst wertvolle Begleiterin und Mentorin schätzen gelernt.
              Mit Expertise und Empathie beflügelt sie Frauen auf ihrem Weg zu
              mehr Klarheit und kraftvollem Selbstbewusstsein. Dafür sagen wir
              herzlich DANKE!&quot;
            </div>
          </div>
          <div css={singleTestimonialContainer}>
            <div css={testimonialHeading}>Mag. Thomas Stockinger, MTD</div>
            <div css={portraitContainer}>
              <img
                src="/images/stockinger.png"
                width="200px"
                height="200px"
                alt="Portrait von Mag. Thomas Stockinger, MTD"
              />
            </div>
            <div css={testimonialPosition}>
              National Sales Training Manager, ŠKODA
            </div>
            <div css={testimonialText}>
              &quot;Ich kenne Frau Marlies Brunner als äußerst erfahrene,
              fachlich versierte und auch engagierte Personalberaterin. Bei der
              Überarbeitung meiner Bewerbungsunterlagen hat sie mich sehr
              ambitioniert gecoacht und mit ihren punktgenauen Anmerkungen aus
              der Recruiting-Perspektive einen wertvollen Beitrag
              geleistet.&quot;
            </div>
          </div>
          <div css={singleTestimonialContainer}>
            <div css={testimonialHeading}>Marie-Luise Brand </div>
            <div css={portraitContainer}>
              <img
                src="/images/brand.png"
                width="200px"
                height="200px"
                alt="Portrait von Marie-Luise Brand"
              />
            </div>
            <div css={testimonialPosition}>
              Business Process Manager, Salzburg AG
            </div>
            <div css={testimonialText}>
              &quot;Die wertschätzenden Impulse von Marlies haben mich dabei
              unterstützt, mir meiner Stärken bewusst zu werden und diese auch
              nach außen zu kommunizieren. Mit diesem Bewusstsein kann ich nun
              authentisch, selbstsicher und mit Leichtigkeit neue Wege
              beschreiten und Entscheidungen treffen, welche mir langfristige
              Zufriedenheit sowohl im beruflichen als auch privaten Umfeld
              garantieren.&quot;
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
