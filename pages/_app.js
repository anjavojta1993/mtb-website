import { css, Global } from '@emotion/react';
import Head from 'next/head';
import DisplayPhoto from '../public/images/title_photo_blue.png';

const contentWrapper = css`
  padding-bottom: 2.5rem;
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: 'Spartan', sans-serif;
            color: black;
          }
        `}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
        <meta name="HandheldFriendly" content="true"></meta>
        <meta property="og:title" content="Business- und Karrierecoaching" />
        <meta property="og:image" content={DisplayPhoto} />
        <meta
          property="og:description"
          content="Einstieg - Aufstieg - Orientierung - Veränderung - Neustart. Beratung und Begleitung in jeder Phase Ihres Berufslebens!"
        />
        <meta property="og:url" content="https://marliestheresbrunner.at" />
      </Head>
      <Component css={contentWrapper} {...pageProps} />
    </>
  );
}

export default MyApp;
