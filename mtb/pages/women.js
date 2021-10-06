/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  h1,
  h2,
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

  @media (max-width: 540px) {
    position: relative;
    margin-top: 120px;
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
  margin-bottom: 20px;
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

const itemContainer = css`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 80vw;
  //background-color: orange;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

const leftContainer = css`
  height: 100%;
  width: 50%;
  //background-color: green;

  > img {
    height: auto;
    width: 100%;

    @media (max-width: 1024px) {
      width: 70%;
    }

    @media (max-width: 780px) {
      width: 80%;
    }

    @media (max-width: 540px) {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const itemText = css`
  padding-left: 30px;
  margin-left: 10px;
  font-size: ${normalText};
  //background-color: blue;
  letter-spacing: 1.5px;
  line-height: 1.5;
  height: 100%;
  width: 50%;

  @media (max-width: 540px) {
    font-size: 0.75rem;
    padding-left: 10px;
    width: 90%;
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    padding-left: 10px;
    width: 90%;
    margin-top: 20px;
  }
`;

// const itemPhoto = css`
//   align-content: center;
//   //background-color: red;
//   height: 350px;
//   width: 580px;

//   @media (max-width: 1024px) {
//     height: auto;
//     width: 380px;
//   }
// `;

const containerHeadingLeft = css`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
  padding-bottom: 30px;
  font-size: ${h2};
  text-transform: uppercase;
  font-weight: 700;
  width: 80%;
  letter-spacing: 1.5px;

  @media (max-width: 780px) {
    font-size: 1.5rem;
  }
`;

const containerHeadingRight = css`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 30px;
  font-size: ${h2};
  text-transform: uppercase;
  font-weight: 700;
  width: 80%;
  letter-spacing: 1.5px;

  @media (max-width: 780px) {
    font-size: 1.5rem;
  }
`;

const buttonStylesBlue = css`
  display: inline-block;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: white;
  background-color: ${mediumBlue};
  font-size: ${normalText};
  font-weight: 400;
  border-radius: 8px;
  padding: 16px 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  :hover {
    border: none;
    transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    cursor: pointer;
  }

  @media (max-width: 540px) {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
    color: white;
    background-color: ${mediumBlue};
    font-size: 0.75rem;
    font-weight: 400;
    border-radius: 8px;
    padding: 8px 10px;
    letter-spacing: 2px;
    text-transform: none;

    :hover {
      border: none;
      transform: scale(1.1, 1.1);
      -webkit-transform: scale(1.1, 1.1);
      -moz-transform: scale(1.1, 1.1);
      cursor: pointer;
    }
  }
`;

const horizontalLine = css`
  border: solid 1px black;
  width: 80%;
  color: black;
  height: 1px;
  margin-bottom: 20px;
`;

const itemPhoto = css``;

export default function OfferWomen() {
  return (
    <Layout>
      <Head>
        <title>Frauen fördern</title>
      </Head>
      <section css={pageContainer}>
        <div css={heroContainer}>
          <div css={heroHeading}>Frauen fördern</div>
        </div>
        <div css={quoteContainer}>
          <div css={quoteStyles}>
            &quot;Das (Berufs-)Leben ist wie eine spannende Reise, das erforscht
            werden will, <br />
            aber bestimmt kein Problem, das gelöst werden muss.&quot;
          </div>
        </div>
        <div css={containerHeadingLeft}>Vision</div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/vision.png"
              alt="Blonde, junge Dame telefoniert im Freien mit Handy am Ohr"
            />
          </div>
          <div css={itemText}>
            <i>
              &quot;Was wir heute nicht träumen, wird morgen nicht wahr&quot;
            </i>
            <br />
            <br />
            Sie haben ihre Ausbildung beendet – Gratulation und ihr Berufsleben
            wartet schon auf Sie! <br />
            Jetzt haben Sie Erwartungen und Wünsche an Ihre Berufsleben, sind
            sehr motiviert, haben zugleich aber auch Ängste vor dieser
            beruflichen Zukunft? <br />
            <br />
            <b>Einstieg</b>
            <ul>
              <li>Wie gestalte ich meine Unterlagen?</li>
              <li>Auf welche beruflichen Netzwerke soll ich gehen?</li>
              <li>Wie laufen die Bewerbungsgespräche ab?</li>
              <li>Mit welchen Fragen darf ich rechnen?</li>
            </ul>
            Kleine Hilfestellungen stärken das Selbstbewusstsein, reduzieren
            Ihre Sorgen und erleichtern Ihren Berufseinstieg.
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingRight}>Realität &amp; Vision</div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/realitätvision.png"
              alt="Blonde Dame mit Pferdeschwanz und Brille sitzt am Schreibtisch vor ihrem PC"
            />
          </div>
          <div css={itemText}>
            <i>&quot;Gesteckte Ziele dürfen wahr werden&quot;</i>
            <br />
            <br />
            Sie haben beruflich schon Fuß gefasst und es gilt jetzt etwas zu
            verändern: <b>Aufstieg-Umstieg- Neuorientierung?</b> <br />
            <ul>
              <li>Wie gehe ich es an?</li>
              <li>Wann ist der richtige Zeitpunkt dafür?</li>
              <li>Wohin verändere ich mich?</li>
              <li>
                Unterstützung bei der Erarbeitung von beruflichen
                Zukunftsperspektiven
              </li>
            </ul>
            <br />
            Sie hatten eine berufliche Auszeit (Kinder- oder Bildungskarenz oder
            anders) und denken an eine <b>Rückkehr in die Arbeitswelt</b>
            <ul>
              <li>Bin ich schon bereit?</li>
              <li>Ist dieser Wunsch schon realisierbar?</li>
              <li>Was hindert mich darin?</li>
              <li>Was wird von mir erwartet?</li>
              <li>
                Definieren von beruflichen Wünschen und Konkretisieren von
                ersten Umsetzungsschritten
              </li>
            </ul>
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingLeft}>
          Rückschau &amp; Realität &amp; Vision
        </div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/rückschaurealitätvision.png"
              alt="Ältere Dame mit kurzen bloden Haaren unterhält sich am Schreibtisch mit älterer Dame mit langen schwarzen Haaren"
            />
          </div>
          <div css={itemText}>
            <i>&quot;Mit frischem Wind zum neuen Ziel&quot;</i> <br />
            <br />
            Sie haben schon viel erlebt, sowohl beruflich als auch privat,
            arrangieren sich gut mit der Ist-Situation und fühlen sich familiär
            und persönlich bereit, beruflich etwas Neues zu wagen.
            <br />
            <br />
            <b>Orientierung - Wiedereinstieg</b>
            <ul>
              <li>Wie gehe ich es an?</li>
              <li>Wie gestalte ich meine Unterlagen?</li>
              <li>Auf welche beruflichen Netzwerke soll ich gehen?</li>
              <li>Wie präsentiere ich mich interessant für die Arbeitswelt?</li>
              <li>
                Verbesserung des Selbstmarketings und Planung der schrittweisen
                Vorgangsweise
              </li>
            </ul>
          </div>
        </div>
        <Link href="/calendly/">
          <a css={buttonStylesBlue}>Termin buchen</a>
        </Link>
      </section>
    </Layout>
  );
}
