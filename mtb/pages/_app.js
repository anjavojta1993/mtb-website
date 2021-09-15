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
      <Head />
      <Component css={contentWrapper} {...pageProps} />
    </>
  );
}

export default MyApp;
