/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
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

const horizontalLine = css`
  border: solid 1px black;
  width: 80%;
  color: black;
  height: 1px;
  margin-bottom: 20px;
`;

const heroContainer = css`
  position: relative;
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/men.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
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

export default function OfferMen() {
  return (
    <Layout>
      <Head>
        <title>M??nner st??rken</title>
      </Head>
      <section css={pageContainer}>
        <div css={heroContainer}>
          <div css={heroHeading}>M??nner st??rken</div>
        </div>
        <div css={quoteContainer}>
          <div css={quoteStyles}>
            &quot;Berufliche Flaute? Bei einer vermeintlichen beruflichen
            ???Windstille??? musst du oft nur die Segel anders setzen <br />
            und schon nimmst du wieder Fahrt auf!&quot;
          </div>
        </div>
        <div css={containerHeadingLeft}>Vision</div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/visionmen.jpg"
              alt="Mittelj??hriger Herr sitzt an Holz B??rotisch mit Laptop und Handy am Ohr und telefoniert l??chelnd"
            />
          </div>
          <div css={itemText}>
            <i>&quot;Mut ist die Bugwelle zum Erfolg&quot;</i>
            <br />
            <br />
            F??r eine berufliche Ver??nderung sind Sie bereit und Sie m??chten
            strategisch klug vorgehen und Ihre Vorgangsweise planen.
            <br />
            <br />
            <b>Umstieg - Aufstieg</b>
            <ul>
              <li>Wie gehe ich es an?</li>
              <li>Wann ist der richtige Zeitpunkt daf??r?</li>
              <li>Wohin und in welchem Ausma?? ver??ndere ich mich?</li>
            </ul>
            Unterst??tzung bei der Erarbeitung von beruflichen
            Zukunftsperspektiven.
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingRight}>Neustart</div>
        <div css={itemContainer}>
          <div css={leftContainer}>
            <img
              src="/images/neustart.jpg"
              alt="??lterer Herr mit Brille sitzt in einem Caf?? an Tisch und blickt in seinen Laptop "
            />
          </div>
          <div css={itemText}>
            <i>
              &quot;Ein kurzes Innehalten ist wichtig vor einem neuen
              Anlauf.&quot;
            </i>
            <br />
            <br />
            Ihre solide berufliche Ist-Situation ist aus diversen Gr??nden ins
            Schwanken geraten und Sie m??ssen sich jetzt neu orientieren.
            <br />
            <br />
            <b>Orientierung - Ver??nderung - Neustart</b>
            <br />
            <ul>
              <li>
                Welche Chance ergibt sich aus meiner bisherigen Erfahrung?
              </li>
              <li>Wie gehe ich es an?</li>
              <li>
                Auf welchen beruflichen Netzwerken bin ich zu finden und wie
                pr??sentiere ich mich dort?
              </li>
            </ul>
            Unterst??tzung bei der Erarbeitung von beruflichen
            Zukunftsperspektiven.
          </div>
        </div>
        <Link href="/contact/">
          <a css={buttonStylesBlue}>Infogespr??ch vereinbaren</a>
        </Link>
      </section>
    </Layout>
  );
}
