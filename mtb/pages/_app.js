import { css, Global } from '@emotion/react';
import Head from 'next/head';

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
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
        <meta name="HandheldFriendly" content="true"></meta>
      </Head>
      <Component css={contentWrapper} {...pageProps} />
    </>
  );
}

export default MyApp;
