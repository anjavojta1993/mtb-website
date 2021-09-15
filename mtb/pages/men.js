import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import NeustartVision from '../public/images/neustartvision.png';
import {
  h1,
  h2,
  lightGrey,
  mediumBlue,
  mediumText,
  normalText,
} from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: column;
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
  background-image: url('images/men.png');
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
  //background-color: blue;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const itemContainer = css`
  display: flex;
  flex-direction: row;
  height: 50vh;
  width: 80vw;
  //background-color: orange;
  margin-bottom: 40px;
`;

const itemTextRight = css`
  padding-left: 10px;
  margin-left: 10px;
  font-size: ${normalText};
  //background-color: blue;
  letter-spacing: 1.5px;
  line-height: 2;
  height: 100%;
  width: 50%;
`;

const itemPhoto = css`
  align-content: center;
  //background-color: red;
  height: 100%;
  width: 50%;
`;

const containerHeadingLeft = css`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
  padding-bottom: 30px;
  font-size: ${h2};
  text-transform: uppercase;
  font-weight: 700;
  width: 80%;
  letter-spacing: 1.5px;
`;

const buttonStylesBlue = css`
  display: inline-block;
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

export default function OfferMen() {
  return (
    <Layout>
      <Head>
        <title>Männer stärken</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Männer stärken</div>
      </div>
      <div css={quoteContainer}>
        <div css={quoteStyles}>
          "Die Situation nicht als Rückschlag werten sondern als “erneut Anlauf
          nehmen” beschreiben.”
        </div>
      </div>
      <section css={pageContainer}>
        <div css={containerHeadingLeft}>neustart & Vision</div>
        <div css={itemContainer}>
          <div css={itemPhoto}>
            <Image
              src={NeustartVision}
              alt="Älterer Herr mit Brille sitzt auf weißen Sofa und sieht sich Unterlagen an "
            ></Image>
          </div>
          <div css={itemTextRight}>
            Sie haben eine gute Ausbildung und verdienen auch (sehr) gut. Sie
            wurden aber aus diversen Gründen „aus der Bahn geschmissen“ und
            stehen dann „unter Schock“. Sie waren beruflich anerkannt, viele
            haben/hatten eine leitende Position und sie selbst wurden um Rat
            gefragt.
          </div>
        </div>
        <Link href="/calendly/">
          <a css={buttonStylesBlue}>Termin buchen</a>
        </Link>
      </section>
    </Layout>
  );
}
