import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { h1, lightGrey, mediumText } from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: row;
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
  background-image: url('images/contact.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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

export default function Press() {
  return (
    <Layout>
      <Head>
        <title>Kontakt</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Kontakt</div>
      </div>
      <section css={pageContainer}>ICH BIN EIN TEXT</section>
    </Layout>
  );
}
