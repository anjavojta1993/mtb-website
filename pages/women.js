/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  h1,
  h2,
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
  background-image: url('images/women.png');
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
  background-color: ${lightBlue};
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
        <title>Frauen f??rdern</title>
      </Head>
      <section css={pageContainer}>
        <div css={heroContainer}>
          <div css={heroHeading}>Frauen f??rdern</div>
        </div>
        <div css={quoteContainer}>
          <div css={quoteStyles}>
            &quot;Das (Berufs-)Leben ist wie eine spannende Reise, das erforscht
            werden will, <br />
            aber bestimmt kein Problem, das gel??st werden muss.&quot;
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
              &quot;Was wir heute nicht tr??umen, wird morgen nicht wahr&quot;
            </i>
            <br />
            <br />
            Sie haben Ihre Ausbildung beendet ??? Gratulation und Ihr Berufsleben
            wartet schon auf Sie! <br />
            Jetzt haben Sie Erwartungen und W??nsche an Ihr Berufsleben, sind
            sehr motiviert, haben zugleich aber auch ??ngste vor dieser
            beruflichen Zukunft? <br />
            <br />
            <b>Einstieg</b>
            <ul>
              <li>Wie gestalte ich meine Unterlagen?</li>
              <li>Auf welche beruflichen Netzwerke soll ich gehen?</li>
              <li>Wie laufen die Bewerbungsgespr??che ab?</li>
              <li>Mit welchen Fragen darf ich rechnen?</li>
            </ul>
            Kleine Hilfestellungen st??rken das Selbstbewusstsein, reduzieren
            Ihre Sorgen und erleichtern Ihren Berufseinstieg.
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingRight}>Realit??t &amp; Vision</div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/realit??tvision.png"
              alt="Blonde Dame mit Pferdeschwanz und Brille sitzt am Schreibtisch vor ihrem PC"
            />
          </div>
          <div css={itemText}>
            <i>&quot;Gesteckte Ziele d??rfen wahr werden&quot;</i>
            <br />
            <br />
            Sie haben beruflich schon Fu?? gefasst und es gilt jetzt etwas zu
            ver??ndern: <b>Aufstieg-Umstieg-Neuorientierung?</b> <br />
            <ul>
              <li>Wie gehe ich es an?</li>
              <li>Wann ist der richtige Zeitpunkt daf??r?</li>
              <li>Wohin ver??ndere ich mich?</li>
            </ul>
            Unterst??tzung bei der Erarbeitung von beruflichen
            Zukunftsperspektiven.
            <br />
            <br />
            Sie hatten eine berufliche Auszeit (Kinder- oder Bildungskarenz oder
            anders) und denken an eine <b>R??ckkehr in die Arbeitswelt</b>
            <ul>
              <li>Bin ich schon bereit?</li>
              <li>Ist dieser Wunsch schon realisierbar?</li>
              <li>Was hindert mich darin?</li>
              <li>Was wird von mir erwartet?</li>
            </ul>
            Definieren von beruflichen W??nschen und Konkretisieren von ersten
            Umsetzungsschritten.
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingLeft}>
          R??ckschau &amp; Realit??t &amp; Vision
        </div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/r??ckschaurealit??tvision.png"
              alt="??ltere Dame mit kurzen bloden Haaren unterh??lt sich am Schreibtisch mit ??lterer Dame mit langen schwarzen Haaren"
            />
          </div>
          <div css={itemText}>
            <i>&quot;Mit frischem Wind zum neuen Ziel&quot;</i> <br />
            <br />
            Sie haben schon viel erlebt, sowohl beruflich als auch privat,
            arrangieren sich gut mit der Ist-Situation und f??hlen sich famili??r
            und pers??nlich bereit, beruflich etwas Neues zu wagen.
            <br />
            <br />
            <b>Orientierung - Wiedereinstieg</b>
            <ul>
              <li>Wie gehe ich es an?</li>
              <li>Wie gestalte ich meine Unterlagen?</li>
              <li>Auf welche beruflichen Netzwerke soll ich gehen?</li>
              <li>Wie pr??sentiere ich mich interessant f??r die Arbeitswelt?</li>
            </ul>
            Verbesserung des Selbstmarketings und Planung der schrittweisen
            Vorgangsweise
          </div>
        </div>
        <Link href="/contact/">
          <a css={buttonStylesBlue}>Infogespr??ch vereinbaren</a>
        </Link>
      </section>
    </Layout>
  );
}
