/* eslint-disable @next/next/no-page-custom-font */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Signature from '../public/images/signature.png';
import {
  darkBlue,
  h1,
  h2,
  largeText,
  mediumBlue,
  normalText,
} from '../styles/sharedStyles';

const pageContainer = css`
  position: relative;
  //margin-top: 120px;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/title_photo_new.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 540px) {
    position: relative;
    margin-top: 120px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    background-image: url('images/title_photo_responsive.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100vw;
    height: 100vh;
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
    position: absolute;
    text-align: center;
    top: 40%;
    left: 0%;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 60%;
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
    margin-top: 40px;
    line-height: 1.5;
  }

  @media (max-width: 540px) {
    font-size: 1.25rem;
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

  @media (max-width: 540px) {
    //text-shadow: 0 0 0.4em white;
    font-weight: 500;
    margin-top: 0px;
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const heroSubheadingContainerItalic = css`
  font-size: ${normalText};
  font-weight: 400;
  margin-top: 40px;
  text-transform: uppercase;
  //background-color: red;
  line-height: 1.5;

  @media (max-width: 540px) {
    margin-top: 20px;
    font-weight: 500;
    padding-top: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    //text-shadow: 0 0 0.4em white;
  }
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
    margin-top: 20px;
    font-size: 0.75rem;
    font-weight: 400;
    border: none;
    border-radius: 8px;
    padding: 8px 10px;
    letter-spacing: 2px;
    text-transform: none;
    background-color: ${darkBlue};
    color: white;

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
    <>
      <Head>
        <title>Business- und Karrierecoaching</title>
        <meta
          name="description"
          content="Einstieg – Aufstieg – Orientierung – Veränderung – Neustart. Beratung und Begleitung in jeder Phase
            Ihres Berufslebens!"
        ></meta>
      </Head>
      <div css={pageContainer}>
        <div css={heroContainer}>
          <div css={heroHeadingContainer}>
            Business- <br />
            und Karrierecoaching
          </div>
          <div css={heroSubheadingContainerItalic}>
            <i>Einstieg – Aufstieg – Orientierung – Veränderung – Neustart</i>
          </div>
          <div css={heroSubheadingContainer}>
            Beratung und Begleitung in jeder Phase <br />
            Ihres Berufslebens!
          </div>

          <Link href="/offer/">
            <a css={buttonStylesBlue}>Mein Angebot</a>
          </Link>
          <Link href="/contact">
            <a css={buttonStylesLight}>Infogespräch</a>
          </Link>

          <div css={signatureStyles}>
            <Image
              src={Signature}
              alt="Unterschrift von Marlies Theres Brunner"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
