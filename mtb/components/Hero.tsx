/* eslint-disable @next/next/no-page-custom-font */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Signature from '../public/images/signature.png';
import {
  h1,
  h2,
  largeText,
  mediumBlue,
  normalText,
} from '../styles/sharedStyles';

const pageContainer = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/title_photo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 540px) {
    position: absolute;
    margin-top: 120px;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    background-image: url('images/title_photo_responsive.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const heroContainer = css`
  position: absolute;
  bottom: 2%;
  left: 10%;
  width: 60%;
  height: 80%;

  @media (max-width: 1280px) {
    position: absolute;
    bottom: 15%;
    left: 5%;
    width: 80%;
    height: 80%;
    //background-color: green;
  }
  @media (max-width: 540px) {
    position: relative;
    top: 0%;
    width: 80%;
    height: 80%;
  }
`;

const heroHeadingContainer = css`
  font-size: ${h1};
  text-transform: uppercase;
  font-weight: 700;
  //background-color: yellow;
  letter-spacing: 1.5px;
  line-height: 1.5;
  width: 700px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 95%;
    margin-top: 60px;
  }
`;

const heroSubheadingContainer = css`
  font-size: ${largeText};
  font-weight: 400;
  margin-top: 40px;

  //background-color: red;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 20px;
  }
`;

const heroSubheadingContainerItalic = css`
  font-size: ${normalText};
  font-weight: 400;
  margin-top: 40px;
  text-transform: uppercase;
  //background-color: red;
  line-height: 1.5;
`;

const signatureStyles = css`
  display: block;
  margin-top: 60px;

  @media (max-width: 540px) {
    margin: auto;
    margin-top: 20px;
    width: 50%;
    height: 120px;
  }
`;

const buttonContainer = css`
  display: inline-block;
`;

const buttonStylesBlue = css`
  display: inline-block;
  margin-right: 5%;
  margin-top: 40px;
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
    margin-right: 5%;
    margin-top: 20px;
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

const buttonStylesLight = css`
  display: inline-block;
  margin-top: 40px;
  color: black;
  background-color: none;
  font-size: ${normalText};
  font-weight: 400;
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  :hover {
    transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    cursor: pointer;
  }

  @media (max-width: 540px) {
    display: inline-block;
    margin-right: 5%;
    color: black;
    margin-top: 20px;
    background-color: none;
    font-size: 0.75rem;
    font-weight: 400;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px 10px;
    letter-spacing: 2px;
    text-transform: none;

    :hover {
      transform: scale(1.1, 1.1);
      -webkit-transform: scale(1.1, 1.1);
      -moz-transform: scale(1.1, 1.1);
      cursor: pointer;
    }
  }
`;

export default function Hero() {
  return (
    <div css={pageContainer}>
      <div css={heroContainer}>
        <div css={heroHeadingContainer}>Systemisches Coaching im Beruf</div>
        <div css={heroSubheadingContainerItalic}>
          <i>Einstieg – Aufstieg – Orientierung – Veränderung – Neustart</i>
        </div>
        <div css={heroSubheadingContainer}>
          Beratung und Begleitung in jeder Phase <br />
          ihres Berufslebens!
        </div>

        <Link href="/offer/">
          <a css={buttonStylesBlue}>Mein Angebot</a>
        </Link>
        <Link href="/calendly">
          <a css={buttonStylesLight}>Termin buchen</a>
        </Link>

        <div css={signatureStyles}>
          <Image
            src={Signature}
            alt="Unterschrift von Marlies Theres Brunner"
          ></Image>
        </div>
      </div>
    </div>
  );
}
