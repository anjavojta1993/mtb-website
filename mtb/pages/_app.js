import { css, Global } from '@emotion/react';
import Head from 'next/head';

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
          a {
            :hover {
              border-bottom: 1px solid black;
            }
          }
        `}
      />
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
