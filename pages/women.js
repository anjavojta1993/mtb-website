/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  darkBlue,
  h1,
  h2,
  h3,
  lightBlue,
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
  background-image: url('images/women_neu.png');
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
  background-color: ${darkBlue};
  height: auto;
  padding: 20px;
  width: 100%;
  margin-bottom: 40px;
`;

const quoteStyles = css`
  margin: 10px;
  color: white;
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
  //text-align: justify;
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
    padding-left: 0px;
    width: 90%;
    margin-top: 20px;
    margin-left: 0px;
  }

  @media (max-width: 1024px) {
    padding-left: 0px;
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

const wrapperContainer = css`
  display: flex;
  flex-direction: column;
  //background-color: green;

  > span {
    line-height: 2;
  }
`;

const infoContainer = css`
  align-items: center;
  text-align: left;
  display: flex;
  //background-color: red;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  padding-top: 30px;
  width: auto;
  height: auto;
  border: 1px black solid;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    //width: 70%;
    margin-top: 20px;
  }

  @media (max-width: 780px) {
    width: 80vw;
    align-items: center;
    text-align: left;
  }

  @media (max-width: 540px) {
    width: 80vw;
    font-size: 0.75rem;
    padding: 20px;
    align-items: center;
    text-align: left;
  }
`;

const containerHeadingLeft = css`
  display: flex;
  color: ${darkBlue};
  justify-content: flex-start;
  padding-top: 20px;
  padding-bottom: 10px;
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
  color: ${darkBlue};
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

const containerQuoteStyles = css`
  display: flex;
  color: ${darkBlue};
  margin-bottom: 20px;
  justify-content: flex-start;
  font-weight: 700;
  width: 80%;
  letter-spacing: 1.5px;
  @media (max-width: 780px) {
    margin-bottom: 10px;

    @media (max-width: 780px) {
      font-weight: 500;
      font-size: 12px;
    }
  }
`;

const buttonStylesBlue = css`
  display: inline-block;
  text-align: center;
  //margin-top: 0px;
  margin-bottom: 20px;
  color: white;
  background-color: ${darkBlue};
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
    margin-bottom: 10px;
    color: white;
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
  border: solid 1px ${darkBlue};
  width: 80%;
  color: ${darkBlue};
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
            &quot;Das (Berufs-)Leben ist wie eine spannende Reise, <br />
            das erforscht werden will, aber bestimmt kein Problem, das gelöst
            werden muss.&quot;
          </div>
        </div>
        <div css={containerHeadingLeft}>Berufseinstieg</div>
        <div css={containerQuoteStyles}>
          <i>&quot;Was wir heute nicht träumen, wird morgen nicht wahr&quot;</i>
        </div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/vision.png"
              alt="Blonde, junge Dame telefoniert im Freien mit Handy am Ohr"
            />
          </div>
          <div css={itemText}>
            Sie haben Ihre Ausbildung beendet – Gratulation und Ihr Berufsleben
            wartet schon auf Sie! <br />
            Jetzt haben Sie Erwartungen und Wünsche an Ihr Berufsleben, sind
            sehr motiviert, haben zugleich aber auch Ängste vor dieser
            beruflichen Zukunft? <br />
            <br />
            <b>Einstieg</b>
            <ul>
              <li>Wie mache ich auf mich aufmerksam?</li>
              <li>Wie gestalte ich meine Unterlagen?</li>
              <li>
                Auf welchen beruflichen Netzwerken soll ich präsent sein und wie
                präsentiere ich mich dort?
              </li>
              <li>Wie laufen die Bewerbungsgespräche ab?</li>
              <li>Mit welchen Fragen darf ich rechnen?</li>
            </ul>
            Kleine Hilfestellungen stärken das Selbstbewusstsein, reduzieren
            Ihre Sorgen und erleichtern Ihren Berufseinstieg.
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingLeft}>Aufstieg-Umstieg-Rückkehr</div>
        <div css={containerQuoteStyles}>
          <i>&quot;Gesteckte Ziele dürfen wahr werden&quot;</i>
        </div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/realitätvision.png"
              alt="Blonde Dame mit Pferdeschwanz und Brille sitzt am Schreibtisch vor ihrem PC"
            />
          </div>
          <div css={itemText}>
            Sie haben beruflich schon Fuß gefasst und es gilt jetzt etwas zu
            verändern: <b>Aufstieg-Umstieg-Neuorientierung?</b> <br />
            <ul>
              <li>Wie gehe ich es an?</li>
              <li>Wann ist der richtige Zeitpunkt dafür?</li>
              <li>Wie verändere ich mich und wohin?</li>
              <li>
                Ist mein Weg der richtige und schlage ich ihn zum rechten
                Zeitpunkt ein?
              </li>
            </ul>
            Unterstützung bei der Erarbeitung von beruflichen
            Zukunftsperspektiven.
            <br />
            <br />
            Sie hatten eine berufliche Auszeit (Kinder- oder Bildungskarenz oder
            anders) und denken an eine <b>Rückkehr in die Arbeitswelt</b>
            <ul>
              <li>Sind ich und mein Umfeld schon bereit?</li>
              <li>Ist dieser Wunsch schon realisierbar?</li>
              <li>Was wird von mir erwartet?</li>
              <li>Was lässt mich noch zögern?</li>
              <li>Was hindert mich darin?</li>
            </ul>
            Definieren von beruflichen Wünschen und Konkretisieren von ersten
            Umsetzungsschritten.
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingLeft}>Neuorientierung</div>
        <div css={containerQuoteStyles}>
          <i>&quot;Mit frischem Wind zum neuen Ziel&quot;</i>
        </div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/rückschaurealitätvision.png"
              alt="Ältere Dame mit kurzen bloden Haaren unterhält sich am Schreibtisch mit älterer Dame mit langen schwarzen Haaren"
            />
          </div>
          <div css={itemText}>
            Sie haben schon viel erlebt, sowohl beruflich als auch privat,
            arrangieren sich gut mit der Ist-Situation und fühlen sich familiär
            und persönlich bereit, beruflich etwas Neues zu wagen.
            <br />
            <br />
            <b>Orientierung - Wiedereinstieg</b>
            <ul>
              <li>Bin ich bereit?</li>
              <li>
                Wie gestalte ich meine Unterlagen aussagekräftig und wie gehe
                ich mit Lücken um?
              </li>
              <li>Wie mache ich mich interessant für die Arbeitswelt?</li>
              <li>Wo und wie finde ich die richtige Stelle für mich?</li>
              <li>Wie werde ich gefunden?</li>
            </ul>
            Verbesserung des Selbstmarketings, Planung der schrittweisen
            Vorgangsweise und müheloses und selbstbewusstes Präsentieren der
            eigenen Kompetenzen.
          </div>
        </div>
        <div css={infoContainer}>
          <div css={wrapperContainer}>
            <Link href="/contact/">
              <a css={buttonStylesBlue}>Infogespräch vereinbaren</a>
            </Link>
            <span>&#10003; Austausch über Ihre Situation</span>
            <span>&#10003; Individuelles Coaching Angebot</span>
            <span>&#10003; Nächste Schritte & Terminvereinbarung</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
