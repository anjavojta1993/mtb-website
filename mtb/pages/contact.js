import { css } from '@emotion/react';
import Head from 'next/head';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Layout from '../components/Layout';
import {
  darkBlue,
  h1,
  lightGrey,
  mediumText,
  normalText,
} from '../styles/sharedStyles';

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
  width: 60%;
  height: 100vh;
  align-items: center;
  padding-top: 40px;
`;

const rightContainer = css`
  display: flex;
  flex-direction: column;
  background-color: ${darkBlue};
  color: white;
  width: 40%;
  height: 100vh;
  align-items: center;
  padding-top: 40px;
`;

const contactInfosContainer = css`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-color: orange;
  margin-bottom: 40px;
`;

const iconContainer = css`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: green;

  p {
    margin-left: 20px;
    text-transform: uppercase;
  }
`;

const contactInfosTextStyles = css`
  display: flex;
  font-size: ${normalText};
  color: white;
  margin: 20px;
  color: white;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const horizontalLine = css`
  border: solid 1px white;
  width: 80%;
  color: white;
  height: 1px;
  margin-left: 20px;
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
          <div css={contactInfosContainer}>
            <div css={iconContainer}>
              <GoLocation size={32} />
              <p>Adresse</p>
            </div>
            <div css={horizontalLine} />
            <div css={contactInfosTextStyles}>Testweg 12, 1000 Salzburg</div>
          </div>
          <div css={contactInfosContainer}>
            <div css={iconContainer}>
              <HiOutlineMailOpen size={32} />
              <p>Email</p>
            </div>
            <div css={horizontalLine} />
            <div css={contactInfosTextStyles}>
              marliestheresbrunner@gmail.com
            </div>
          </div>
          <div css={contactInfosContainer}>
            <div css={iconContainer}>
              <FiPhone size={32} />
              <p>Telefon</p>
            </div>
            <div css={horizontalLine} />
            <div css={contactInfosTextStyles}>0664 000 0000</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
