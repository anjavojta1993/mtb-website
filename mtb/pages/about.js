import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Brecka from '../public/images/brecka.png';
import Collini from '../public/images/collini.png';
import Gruber from '../public/images/gruber.png';
import Langthaler from '../public/images/langthaler.png';
import Portrait from '../public/images/portrait.png';
import Schallhammer from '../public/images/schallhammer.png';
import Ullmann from '../public/images/ullmann.png';
import {
  darkBlue,
  h1,
  lightGrey,
  mediumText,
  normalText,
} from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 40px;
`;

const leftContainer = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  height: 80vh;
  align-items: center;
  background-color: green;
  margin-bottom: 50px;
`;

const leftContainerHeading = css`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 10vh;
  align-items: center;
  font-size: ${mediumText};
  font-weight: 700;
  background-color: purple;
`;

const rightContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  padding: 10px;
  padding-right: 40px;
  height: 80vh;
  align-items: center;
  margin-bottom: 50px;
  background-color: yellow;
`;

const testimonialContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  height: auto;
  align-items: flex-start;
  background-color: ${darkBlue};
`;

const singleTestimonialContainer = css`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
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
`;

const testimonialHeading = css`
  color: white;
  //background-color: green;
  font-size: ${mediumText};
  font-weight: 700;
  text-align: center;
  display: flex;
  margin-bottom: 10px;
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
`;

const portraitContainer = css`
  width: auto;
  height: auto;
  margin: 20px;
`;

const testimonialText = css`
  color: white;
  font-size: ${normalText};
  margin: 20px;
  text-align: center;
  line-height: 1.5;
`;

const heroContainer = css`
  position: relative;
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/about_me.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
`;

const quoteContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightGrey};
  height: 20vh;
`;

const quoteStyles = css`
  margin: 10px;
  padding: 10px;
  align-content: center;
  font-size: ${mediumText};
  background-color: blue;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Über mich</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Über mich</div>
      </div>
      <div css={quoteContainer}>
        <div css={quoteStyles}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.”
        </div>
      </div>
      <section css={pageContainer}>
        <div css={leftContainer}>
          <div css={leftContainerHeading}>MAG. MARLIES THERES BRUNNER, MTD</div>
          <Image
            src={Portrait}
            width="500"
            height="500"
            alt="Portrait von Marlies Theres Brunner"
          ></Image>
        </div>
        <div css={rightContainer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum." fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id . <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </section>
      <div css={containerHeading}>REFERENZEN</div>
      <div css={testimonialContainer}>
        <div css={singleTestimonialContainer}>
          <div css={testimonialHeading}>Ing. Mag. Anton Ullmann</div>
          <div css={portraitContainer}>
            {' '}
            <Image
              src={Ullmann}
              alt="Portrait von Ing. Mag. Anton Ullmann"
            ></Image>
          </div>
          <div css={testimonialPosition}>
            Head of Strategy Development, Salzburg AG
          </div>
          <div css={testimonialText}>
            "Frau Brunner schärft den ganzheitlichen, objektiven Blick auf die
            eigene Persönlichkeit und ihr Entwicklungspotential. Dabei
            unterstützt sie die klare Fokussierung auf alle nützlichen
            individuellen Stärken, welche man dann zu 100% mit geballter Kraft
            auf die 'Strasse' bringt. Fantastisch!"
          </div>
        </div>
        <div css={singleTestimonialContainer}>
          <div css={testimonialHeading}>Mag. Ingrid Langthaler</div>
          <div css={portraitContainer}>
            {' '}
            <Image
              src={Langthaler}
              alt="Portrait von Mag. Ingrid Langthaler"
            ></Image>
          </div>
          <div css={testimonialPosition}>
            FH Salzburg, Career Center & Unternehmenskooperationen
          </div>
          <div css={testimonialText}>
            “Marlies Brunner weiß aus langjähriger Erfahrung wie eine Bewerbung
            erfolgreich wird. Das besondere ist, dass sie beide Seiten kennt -
            die der Bewerber*in und die des Unternehmens. Von ihren praxisnahen
            Tipps konnten Studierende der FH Salzburg in den Beratungsgesprächen
            bisher sehr profitieren.”
          </div>
        </div>
        <div css={singleTestimonialContainer}>
          <div css={testimonialHeading}>Gerhard Brecka</div>
          <div css={portraitContainer}>
            {' '}
            <Image src={Brecka} alt="Portrait von Gerhard Brecka"></Image>
          </div>
          <div css={testimonialPosition}>
            COO, <br />
            Polo AG
          </div>
          <div css={testimonialText}>
            „Frau Marlies Brunner hat mir in einer Zeit des beruflichen Umbruchs
            durch ihre langjährige Erfahrung und Empathie vom ersten Gespräch an
            sehr viel Zuversicht gegeben. Sie hat mir klar aufgezeigt, welche
            Aktivitäten und Maßnahmen mir die entsprechende Aufmerksamkeit bei
            den Personalsuchenden sichert und wie ich aus den zahlreichen
            Bewerbungen heraussteche. Et voilá – es hat prompt funktioniert.
            Vielen Dank Marlies für deine Unterstützung!“
          </div>
        </div>
      </div>

      <div css={testimonialContainer}>
        <div css={singleTestimonialContainer}>
          <div css={testimonialHeading}>Julia Collini</div>
          <div css={portraitContainer}>
            {' '}
            <Image src={Collini} alt="Portrait von Julia Collini"></Image>
          </div>
          <div css={testimonialPosition}>
            BWL-Masterstudentin, <br /> Privatuni Seeburg
          </div>
          <div css={testimonialText}>
            “Ich möchte mich bei Frau Mag. Brunner ganz herzlich bedanken. Ich
            bin schon seit Jahren Klientin bei ihr, und habe von dem
            Karrierecoaching definitiv in meinem Berufs- und Privatleben,
            besonders auch als Frau, profitiert. Durch das Coaching konnte ich
            durch das fachspezifische Wissen von Frau Mag. Brunner viel Neues
            lernen und umsetzen und dieses in meinem Alltag anwenden.”
          </div>
        </div>
        <div css={singleTestimonialContainer}>
          <div css={testimonialHeading}>Gerhard Schallhammer</div>
          <div css={portraitContainer}>
            {' '}
            <Image
              src={Schallhammer}
              alt="Portrait von Gerhard Schallhammer"
            ></Image>
          </div>
          <div css={testimonialPosition}>
            Vetrieb, Kloeckner Metals Austria GmbH & Co KG
          </div>
          <div css={testimonialText}>
            “In dieser schnelllebigen Zeit ist es wichtig, die richtigen
            Entscheidungen zu treffen. Frau Brunner ist hierbei die beste Wahl!
            Mit viel Fachwissen, Erfahrung, Gespühr führt sie zum richtigen Weg
            und hilft dabei, nie den Mut zu verlieren! Vor allem das war
            besonders wichtig - Danke!”
          </div>
        </div>
        <div css={singleTestimonialContainer}>
          <div css={testimonialHeading}>Mag. Brigitte Maria Gruber</div>
          <div css={portraitContainer}>
            <Image
              src={Gruber}
              alt="Portrait von Mag. Brigitte Maria Gruber"
            ></Image>
          </div>
          <div css={testimonialPosition}>
            Geschäftsführerin & Leiterin, Frauenfachakademie
          </div>
          <div css={testimonialText}>
            "Bei unserem WEITBLICK!-Mentoring haben wir Frau Mag. Brunner als
            äußerst wertvolle Begleiterin und Mentorin schätzen gelernt. Mit
            Expertise und Empathie beflügelt sie Frauen auf ihrem Weg zu mehr
            Klarheit und kraftvollem Selbstbewusstsein. Dafür sagen wir herzlich
            "DANKE"!
          </div>
        </div>
      </div>
    </Layout>
  );
}
