import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Portrait from '../public/images/portrait.png';
import { darkBlue, h1, lightGrey, mediumText } from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 40px;
`;

const leftContainer = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  height: 80vh;
  align-items: center;
  background-color: green;
  margin-bottom: 50px;
`;

const leftContainerHeading = css`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 10vh;
  align-items: center;
  font-size: ${mediumText};
  font-weight: 700;
  background-color: purple;
`;

const rightContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  padding: 10px;
  height: 80vh;
  align-items: center;
  margin-bottom: 50px;
  background-color: yellow;
`;

const testimonialContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  height: 80vh;
  align-items: center;
  background-color: ${darkBlue};
`;

const heroContainer = css`
  position: relative;
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/about_me.png');
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

const quoteContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightGrey};
  height: 20vh;
`;

const quoteStyles = css`
  margin: 10px;
  padding: 10px;
  align-content: center;
  font-size: ${mediumText};
  background-color: blue;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Über mich</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Über mich</div>
      </div>
      <div css={quoteContainer}>
        <div css={quoteStyles}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.”
        </div>
      </div>
      <section css={pageContainer}>
        <div css={leftContainer}>
          <div css={leftContainerHeading}>MAG. MARLIES THERES BRUNNER, MTD</div>
          <Image
            src={Portrait}
            width="500"
            height="500"
            alt="Portrait von Marlies Theres Brunner"
          ></Image>
        </div>
        <div css={rightContainer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum." fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id .
        </div>
      </section>
      <div css={testimonialContainer}>TESTIMONIALS</div>
    </Layout>
  );
}
