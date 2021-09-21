import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import RealitätVision from '../public/images/realitätvision.png';
import RückschauRealitätVision from '../public/images/rückschaurealitätvision.png';
import Vision from '../public/images/vision.png';
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

const heroContainer = css`
  position: relative;
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

  @media (max-width: 768px) {
    position: absolute;
    margin-top: 500px;
  }
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
  height: 50vh;
  width: 80vw;
  //background-color: orange;
  margin-bottom: 40px;
`;

const itemTextRight = css`
  padding-left: 10px;
  margin-left: 10px;
  font-size: ${normalText};
  //background-color: blue;
  letter-spacing: 1.5px;
  line-height: 2;
  height: 100%;
  width: 50%;
`;

const itemTextLeft = css`
  padding-left: 10px;
  margin-right: 10px;
  font-size: ${normalText};
  //background-color: blue;
  letter-spacing: 1.5px;
  line-height: 2;
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

const horizontalLine = css`
  border: solid 1px black;
  width: 80%;
  color: black;
  height: 1px;
  margin-bottom: 20px;
`;

export default function OfferWomen() {
  return (
    <Layout>
      <Head>
        <title>Frauen fördern</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Frauen fördern</div>
      </div>
      <div css={quoteContainer}>
        <div css={quoteStyles}>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.&quot;
        </div>
      </div>
      <section css={pageContainer}>
        <div css={containerHeadingLeft}>Vision</div>
        <div css={itemContainer}>
          <div css={itemPhoto}>
            <Image
              src={Vision}
              alt="Blonde, junge Dame telefoniert im Freien mit Handy am Ohr"
            ></Image>
          </div>
          <div css={itemTextRight}>
            Jene Frauen, die am Beginn ihrer Berufslaufbahn stehen und
            vorwiegend noch Wünsche an oder Ängste vor der beruflichen Zukunft
            haben. Sie beginnen motiviert, mit hohen Erwartungen und viel
            Ehrgeiz ihre Berufstätigkeit, fürchten aber das Ungewisse und
            strahlen das dann auch aus.{' '}
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingRight}>Realität &amp; Vision</div>
        <div css={itemContainer}>
          <div css={itemTextLeft}>
            Hier gibt es neben dem genannten Wunsch, wieder ins Berufsleben
            zurückzukehren, sehr viele andere Probleme, die es erst zu entdecken
            und zu bearbeiten gilt, bevor man sich dem eigentlichen Ziel –
            Rückkehr in die Arbeitswelt – widmen kann.
          </div>
          <div css={itemPhoto}>
            <Image
              src={RealitätVision}
              alt="Blonde Dame mit Pferdeschwanz und Brille sitzt am Schreibtisch vor ihrem PC"
            ></Image>
          </div>
        </div>
        <div css={horizontalLine} />
        <div css={containerHeadingLeft}>
          Rückschau &amp; Realität &amp; Vision
        </div>
        <div css={itemContainer}>
          <div css={itemPhoto}>
            <Image
              src={RückschauRealitätVision}
              alt="Ältere Dame mit kurzen bloden Haaren unterhält sich am Schreibtisch mit älterer Dame mit langen schwarzen Haaren"
            ></Image>
          </div>
          <div css={itemTextRight}>
            Sie haben schon viel erlebt, arrangieren sich weitgehend mit der
            Ist-Situation und haben auch gelernt, mit den erlebten
            Enttäuschungen und Abstrichen zu leben – sowohl beruflich als auch
            privat. Sie fühlen sich familiär und persönlich bereit, einen neuen
            Anfang zu wagen.
          </div>
        </div>
        <Link href="/calendly/">
          <a css={buttonStylesBlue}>Termin buchen</a>
        </Link>
      </section>
    </Layout>
  );
}
