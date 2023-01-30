/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import DieBestenArtikel from '../public/diebesten.pdf';
import DieBestenArtikel2 from '../public/diebesten2.pdf';
import SalzburgerNachrichtenArtikel from '../public/salzburgernachrichten.pdf';
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

const heroContainer = css`
  position: relative;
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/press.png');
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

const itemContainer = css`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-flow: row wrap;
    padding-top: 0px;
  }
`;

const singleItemContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 35%;
  height: auto;
  margin-left: 80px;
  margin-right: 80px;

  @media (max-width: 540px) {
    img {
      width: 80vw;
    }
  }
`;

const singleItemContainerNew = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 35%;
  height: auto;
  margin-left: 80px;
  margin-right: 80px;
  align-self: left;

  img {
    border: 1px solid black;
  }

  @media (max-width: 540px) {
    img {
      width: 80vw;
    }
  }
`;

const itemHeading = css`
  display: flex;
  color: ${darkBlue};
  justify-content: center;
  width: 500px;
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

const buttonStylesBlue = css`
  display: inline-block;
  border: none;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
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
    margin-top: 20px;
    margin-bottom: 20px;
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

export default function Press() {
  const dieBesten = '/diebesten.pdf';

  function forceDownload(blob, filename) {
    // blob is a file-like object of immutable, raw data, can be read as text or binary data
    // Create an invisible anchor element
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.setAttribute('download', filename);
    document.body.appendChild(anchor);

    // Trigger the download by simulating click
    anchor.click();

    // Clean up
    window.URL.revokeObjectURL(anchor.href);
    document.body.removeChild(anchor);
  }

  function handleDownload(url, filename) {
    // If no filename is set, use filename from URL
    if (!filename) filename = url.match(/\/([^/#?]+)[^/]*$/)[1]; // some weird regex code?

    fetch(url, {
      headers: new Headers({
        Origin: window.location.origin,
      }),
      mode: 'cors', // request mode value, cors allows cross-origin requests
    })
      .then((response) => response.blob())
      .then((blob) => forceDownload(blob, filename))
      .catch((e) => console.error(e));
  }
  return (
    <Layout>
      <Head>
        <title>Presse</title>
      </Head>
      <section css={pageContainer}>
        <div css={heroContainer}>
          <div css={heroHeading}>Presse</div>
        </div>
        <div css={itemContainer}>
          <div css={singleItemContainer}>
            <div css={itemHeading}>Die besten</div>
            <img
              src="/images/diebesten.png"
              alt="Ausschnitt aus Artikel in Die Besten - Das Karrieremagazin mit Mag. Marlies Theres Brunner"
            />
            <button
              css={buttonStylesBlue}
              onClick={() => {
                handleDownload(DieBestenArtikel, 'Diebesten.pdf');
              }}
            >
              Jetzt lesen
            </button>
          </div>
          <div css={singleItemContainer}>
            <div css={itemHeading}>Salzburger Nachrichten</div>
            <img
              src="/images/salzburgernachrichten.png"
              alt="Ausschnitt aus Artikel in den Salzburger Nachrichten mit Mag. Marlies Theres Brunner"
            />
            <button
              css={buttonStylesBlue}
              onClick={() => {
                handleDownload(
                  SalzburgerNachrichtenArtikel,
                  'SalzburgerNachrichten.pdf',
                );
              }}
            >
              Jetzt lesen
            </button>
          </div>
        </div>
        <div css={itemContainer}>
          <div css={singleItemContainerNew}>
            <div css={itemHeading}>Die Besten</div>
            <img
              src="/images/diebesten2.png"
              alt="Ausschnitt aus Artikel aus Die Besten mit Mag. Marlies Theres Brunner"
            />
            <button
              css={buttonStylesBlue}
              onClick={() => {
                handleDownload(DieBestenArtikel2, 'diebesten2.pdf');
              }}
            >
              Jetzt lesen
            </button>
          </div>
          <div css={singleItemContainerNew}></div>
        </div>
      </section>
    </Layout>
  );
}
