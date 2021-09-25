/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import DieBestenArtikel from '../public/diebesten.pdf';
import SalzburgerNachrichtenArtikel from '../public/salzburgernachrichten.pdf';
import {
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
  justify-content: center;
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
  background-image: url('images/press.png');
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

const itemContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 35%;
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
  border: none;
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
      <div css={heroContainer}>
        <div css={heroHeading}>Presse</div>
      </div>
      <section css={pageContainer}>
        <div css={itemContainer}>
          <div css={itemHeading}>Die besten - Karrieremagazin</div>
          <img
            src="/images/diebesten.png"
            alt="Ausschnitt aus Artikel in Die Besten das Karrieremagazin mit Mag. Marlies Theres Brunner"
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
        <div css={itemContainer}>
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
      </section>
    </Layout>
  );
}
