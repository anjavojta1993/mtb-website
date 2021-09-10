import { css } from '@emotion/react';
import Head from 'next/head';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Layout from '../components/Layout';
import { darkBlue, h1, lightGrey, mediumText } from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
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

const leftContainer = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  align-items: center;
  padding-top: 40px;
`;

const rightContainer = css`
  display: flex;
  flex-direction: column;
  background-color: ${darkBlue};
  color: white;
  width: 50%;
  height: 100vh;
  align-items: center;
  padding-top: 40px;
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
      <section css={pageContainer}>
        <div css={leftContainer}>SENDGRID</div>
        <div css={rightContainer}>
          <GoLocation size={32} /> <HiOutlineMailOpen size={32} />{' '}
          <FiPhone size={32} />
        </div>
      </section>
    </Layout>
  );
}
