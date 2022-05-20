/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import Layout from '../components/Layout';
import Coaching from '../public/images/coaching.png';
import TelefonAnfrage from '../public/images/telephone.png';
import {
  darkBlue,
  h1,
  largeText,
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

const appointmentContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  background-color: ${darkBlue};

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    margin-top: 0px;
  }
`;

const heroContainer = css`
  position: relative;
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/offer.png');
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
`;

const itemContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  margin-left: 80px;
  margin-right: 80px;

  @media (max-width: 1024px) {
    font-size: 1rem;
    align-self: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: 540px) {
    img {
      width: 300px;
      height: auto;
    }
  }
`;

const itemHeading = css`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 25px;
  font-size: ${largeText};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.5px;

  @media (max-width: 780px) {
    font-size: 1rem;
  }
`;

const buttonStylesBluePhone = css`
  display: inline-block;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: white;
  background-color: ${mediumBlue};
  font-size: ${normalText};
  font-weight: 400;
  border-radius: 8px;
  padding: 16px 40px;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: 540px) {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    background-color: ${mediumBlue};
    font-size: 0.75rem;
    font-weight: 400;
    border-radius: 8px;
    padding: 8px 10px;
    letter-spacing: 2px;
    text-transform: none;
  }
`;

const buttonStylesBlue = css`
  display: inline-block;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
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

const offerContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
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

  @media (max-width: 768px) {
    font-size: 1rem;
    align-self: center;
    align-items: center;
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
  text-transform: uppercase;
`;

const itemContainerAppointment = css`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  align-items: center;
  width: 30%;
  height: auto;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 50px;

  > img {
    height: auto;
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: auto;
    height: auto;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const itemHeadingAppointment = css`
  display: flex;
  font-size: ${mediumText};
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 20px;
  margin-top: 20px;
  height: auto;
  width: 100%;
  //background-color: green;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const itemAppointmentStyles = css`
  display: flex;
  font-size: ${normalText};
  letter-spacing: 1.5px;
  //background-color: red;
  padding: 20px;
  height: auto;
  width: 100%;
  //text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 0.7rem;
    width: auto;
  }
`;

const containerHeadingAppointment = css`
  font-size: ${h1};
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.5px;
  color: white;
  width: 100%;
  justify-content: center;
  height: 20%;
  padding: 50px;
  text-transform: uppercase;
  //background-color: green;

  @media (max-width: 780px) {
    font-size: 1.5rem;
  }
`;

const methodenContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  height: auto;
  align-items: flex-start;
  background-color: ${darkBlue};
  color: white;
`;

const iconContainer = css`
  display: flex;
  align-items: center;
  //background-color: green;
  padding: 0;
  margin: 0;

  span {
    margin-left: 20px;
  }
`;

export default function Offer() {
  return (
    <Layout>
      <Head>
        <title>Mein Angebot</title>
      </Head>
      <section css={pageContainer}>
        <div css={heroContainer}>
          <div css={heroHeading}>Mein Angebot</div>
        </div>
        <div css={quoteContainer}>
          <div css={quoteStyles}>
            &quot;Jede Veränderung beginnt in uns selbst.&quot;
          </div>
        </div>
        <div css={offerContainer}>
          <div css={itemContainer}>
            <div css={itemHeading}>Frauen fördern</div>
            <img
              src="/images/frauenfördern.png"
              width="340px"
              height="400px"
              alt="Junge Frau sitzt mit mit anderen Frauen auf Sofa und schreiben in ihre Notizblöcke"
            />
            <Link href="/women/">
              <a css={buttonStylesBlue}>Mehr Infos</a>
            </Link>
          </div>
          <div css={itemContainer}>
            <div css={itemHeading}>Männer stärken</div>
            <img
              src="/images/männerstärken.png"
              width="340px"
              height="400px"
              alt="Junge Frau im Anzug sitzt mit Mann im Hemd auf einer Parkbank und coacht ihn"
            />
            <Link href="/men/">
              <a css={buttonStylesBlue}>Mehr Infos</a>
            </Link>
          </div>
        </div>
        <div css={appointmentContainer}>
          <div css={containerHeadingAppointment}>Termin buchen</div>
          <div css={itemContainerAppointment}>
            <img
              src="/images/telephone.png"
              alt="Junge Frau mit Afro sitzt am Schreibtisch und telefoniert mit Kabeltelefon"
            />
            <div css={itemHeadingAppointment}>
              Kostenloses telefonisches <br />
              Erstgespräch
            </div>
            <div css={itemAppointmentStyles}>
              Gerne können wir unverbindlich und kostenlos <br />
              über Ihr Anliegen sprechen. Rufen Sie mich an!
            </div>
            <div css={buttonStylesBluePhone}>
              <div css={iconContainer}>
                <FiPhone size={22} /> <span>+43 664 3309622</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
