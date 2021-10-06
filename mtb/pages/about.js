/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Portrait from '../public/images/portrait.png';
import {
  darkBlue,
  h1,
  lightGrey,
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
`;

const aboutContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  height: auto;
  align-items: flex-start;
  padding-top: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const leftContainer = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  height: 80vh;
  align-items: center;
  //background-color: green;
  margin-bottom: 50px;
  margin-top: 20px;

  @media (max-width: 1024px) {
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
  flex-direction: row;
  justify-content: center;
  width: 50%;
  padding: 10px;
  padding-right: 80px;
  height: 80vh;
  align-items: center;
  margin-bottom: 50px;
  //background-color: yellow;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 780px) {
    font-size: 0.75rem;
    margin-bottom: 0px;
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
    width: 300px;
    height: 300px;
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
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt.&quot;
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
                width="500"
                height="500"
                alt="Portrait von Marlies Theres Brunner"
              ></Image>
            </div>
          </div>
          <div css={rightContainer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id . <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
            <div css={testimonialHeading}>Gerhard Brecka</div>
            <div css={portraitContainer}>
              {' '}
              <img
                src="/images/brecka.png"
                width="200px"
                height="200px"
                alt="Portrait von Gerhard Brecka"
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
              Geschäftsführerin & Leiterin, Frauenfachakademie
            </div>
            <div css={testimonialText}>
              &quot;Bei unserem WEITBLICK!-Mentoring haben wir Frau Mag. Brunner
              als äußerst wertvolle Begleiterin und Mentorin schätzen gelernt.
              Mit Expertise und Empathie beflügelt sie Frauen auf ihrem Weg zu
              mehr Klarheit und kraftvollem Selbstbewusstsein. Dafür sagen wir
              herzlich DANKE!&quot;
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
