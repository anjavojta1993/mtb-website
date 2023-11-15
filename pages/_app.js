import { css, Global } from '@emotion/react';
import Head from 'next/head';

const contentWrapper = css`
  padding-bottom: 2.5rem;
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Business - und Karrierecoaching</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business - und Karrierecoaching" />
        <meta
          property="og:description"
          content="Beratung und Begleitung in jeder Phase Ihres Berufslebens!"
        />
        <meta
          property="og:image"
          content="https://anjavojta.com/wp-content/uploads/2023/10/title_photo_blue.png"
        />
        <meta property="og:url" content="https://marliestheresbrunner.at" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
        <meta name="HandheldFriendly" content="true"></meta>
      </Head>
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
            width: 100%;
            overflow-x: hidden;
            a:link {
              text-decoration: none;
            }
            a:visited {
              text-decoration: none;
            }
            a:hover {
              text-decoration: none;
            }
            a:active {
              text-decoration: none;
            }
          }
        `}
      />
      <Component css={contentWrapper} {...pageProps} />
    </>
  );
}

export default MyApp;
