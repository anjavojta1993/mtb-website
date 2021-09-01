/* eslint-disable @next/next/no-page-custom-font */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Signature from '../public/images/signature.png';
import { h1, h2, mediumBlue, normalText } from '../styles/sharedStyles';

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
`;

const heroContainer = css`
  position: absolute;
  bottom: 2%;
  left: 10%;
  width: 60%;
  height: 80%;
  //background-color: green;
`;

const heroHeadingContainer = css`
  font-size: ${h1};
  text-transform: uppercase;
  font-weight: 700;
  //background-color: yellow;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const heroSubheadingContainer = css`
  font-size: ${h2};
  font-weight: 400;
  margin-top: 50px;
  //background-color: red;
  line-height: 1.5;
`;

const signatureStyles = css`
  display: inline-block;
  margin-top: 70px;
`;

const buttonContainer = css`
  display: inline-block;
`;

const buttonStylesBlue = css`
  display: inline-block;
  margin-right: 5%;
  margin-top: 50px;
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

const buttonStylesLight = css`
  display: inline-block;
  margin-top: 50px;
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
`;

export default function Hero() {
  return (
    <div css={pageContainer}>
      <div css={heroContainer}>
        <div css={heroHeadingContainer}>
          Systemisches Coaching <br /> im Beruf
        </div>
        <div css={heroSubheadingContainer}>
          Beraten & Begleiten - vom Berufseinsteiger <br /> bis zum Experten.
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
