/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
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
  margin-top: 40px;
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
    position: absolute;
    margin-top: 120px;
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
  //background-color: blue;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const itemContainer = css`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 80vw;
  //background-color: orange;
  margin-bottom: 40px;
`;

const itemTextRight = css`
  padding-left: 30px;
  margin-left: 10px;
  font-size: ${normalText};
  //background-color: blue;
  letter-spacing: 1.5px;
  line-height: 1.5;
  height: 100%;
  width: 50%;
`;

const itemPhoto = css`
  align-content: center;
  //background-color: red;
  height: 100%;
  width: 50%;
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
`;

export default function OfferMen() {
  return (
    <Layout>
      <Head>
        <title>Männer stärken</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Männer stärken</div>
      </div>
      <div css={quoteContainer}>
        <div css={quoteStyles}>
          &quot;So manche vermeintliche Bedrohung ist in Wirklichkeit eine neue
          Chance. <br />
          Man muss sie nur sehen und ergreifen. &quot;
        </div>
      </div>
      <section css={pageContainer}>
        <div css={containerHeadingLeft}>neustart &amp; Vision</div>
        <div css={itemContainer}>
          <div css={itemPhoto}>
            <img
              src="/images/neustartvision.png"
              width="580px"
              height="370px"
              alt="Älterer Herr mit Brille sitzt auf weißen Sofa und sieht sich Unterlagen an "
            />
          </div>
          <div css={itemTextRight}>
            <i>
              &quot;„Ein kurzes Innehalten ist wichtig vor einem neuen
              Anlauf“&quot;
            </i>
            <br />
            <br />
            Für eine berufliche Veränderung sind Sie bereit und Sie möchten
            strategisch klug vorgehen und Ihre Vorgangsweise planen.
            <br />
            <br />
            <b>Umstieg - Aufstieg</b>
            <ul>
              <li>Wie gehe ich es an?</li>
              <li>Wann ist der richtige Zeitpunkt dafür?</li>
              <li>Wohin und in welchem Ausmaß verändere ich mich?</li>
              <li>
                Unterstützung bei der Erarbeitung von beruflichen
                Zukunftsperspektiven
              </li>
            </ul>
            <br />
            <br />
            Ihre solide berufliche Ist-Situation Sie aus diversen Gründen ins
            Schwanken geraden und Sie müssen sich jetzt neuorientieren.
            <br />
            <br />
            <b>Orientierung - Veränderung - Neustart</b>
            <br />
            <ul>
              <li>
                Welche Chance ergibt sich aus meiner bisherigen Erfahrung?
              </li>
              <li>Wie gehe ich es an?</li>
              <li>
                Auf welchen beruflichen Netzwerken bin ich zu finden und wie
                präsentiere ich mich dort?
              </li>
              <li>
                Unterstützung bei der Erarbeitung von beruflichen
                Zukunftsperspektiven
              </li>
            </ul>
          </div>
        </div>
        <div css={horizontalLine} />
        <Link href="/calendly/">
          <a css={buttonStylesBlue}>Termin buchen</a>
        </Link>
      </section>
    </Layout>
  );
}
