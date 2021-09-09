import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Coaching from '../public/images/coaching.png';
import FrauenFördern from '../public/images/frauenfördern.png';
import MännerStärken from '../public/images/männerstärken.png';
import TelefonAnfrage from '../public/images/telephone.png';
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
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const appointmentContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
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

const itemContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  margin-left: 80px;
  margin-right: 80px;
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
  border: 1px solid black;
  align-items: center;
  width: 30%;
  height: 80vh;
  margin-left: 80px;
  margin-right: 80px;
`;

const itemHeadingAppointment = css`
  display: flex;
  font-size: ${largeText};
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 10px;
  margin-top: 20px;
  height: 10%;
  text-transform: uppercase;
`;

const itemAppointmentStyles = css`
  display: flex;
  font-size: ${normalText};
  letter-spacing: 1.5px;
  padding: 20px;
  height: 15%;
  text-transform: uppercase;
`;

const containerHeadingAppointment = css`
  font-size: ${h1};
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.5px;
  width: 100%;
  justify-content: center;
  height: 20%;
  padding: 80px;
  text-transform: uppercase;
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

export default function Offer() {
  return (
    <Layout>
      <Head>
        <title>Mein Angebot</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Mein Angebot</div>
      </div>
      <div css={quoteContainer}>
        <div css={quoteStyles}>
          “So manche vermeintliche Bedrohung ist in Wirklichkeit eine Chance.
          <br />
          Man muss sie nur sehen und ergreifen!”
        </div>
      </div>
      <section css={pageContainer}>
        <div css={itemContainer}>
          <div css={itemHeading}>Frauen fördern</div>
          <Image
            src={FrauenFördern}
            alt="Junge Frau mit kurzem Afro steht an Whiteboard und coacht Frau die am Tisch sitzt"
          ></Image>
          <Link href="/women/">
            <a css={buttonStylesBlue}>Mehr Infos</a>
          </Link>
        </div>
        <div css={itemContainer}>
          <div css={itemHeading}>Männer stärken</div>
          <Image
            src={MännerStärken}
            alt="Junge Frau im Anzug sitzt mit Mann im Hemd auf einer Parkbank und coacht ihn"
          ></Image>
          <Link href="/men/">
            <a css={buttonStylesBlue}>Mehr Infos</a>
          </Link>
        </div>
      </section>
      <div css={containerHeading}>Methoden</div>
      <div css={testimonialContainer}>ICH BIN EIN TEXT</div>
      <div css={containerHeadingAppointment}>Termin buchen</div>
      <div css={appointmentContainer}>
        <div css={itemContainerAppointment}>
          <Image
            src={TelefonAnfrage}
            alt="Junge Frau mit Afro sitzt an Schreibtisch und telefoniert mit Kabeltelefon"
          ></Image>
          <div css={itemHeadingAppointment}>Telefonische Anfrage</div>
          <div css={itemAppointmentStyles}>
            Gerne können wir unverbindlich über Ihr Anliegen sprechen.
          </div>
          <a css={buttonStylesBlue}>0664 1111111</a>
        </div>
        <div css={itemContainerAppointment}>
          <Image
            src={Coaching}
            alt="Frau und Mann sitzen an Schreibtisch und Frau coacht Mann mit Laptop"
          ></Image>
          <div css={itemHeadingAppointment}>Einzelcoaching</div>
          <div css={itemAppointmentStyles}>90 Minuten</div>
          <Link href="/men/">
            <a css={buttonStylesBlue}>Jetzt buchen</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
