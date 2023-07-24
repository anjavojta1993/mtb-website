import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Layout from '../components/Layout';
import Portrait from '../public/images/portrait_neu.png';
import {
  darkBlue,
  h1,
  lightBlue,
  mediumBlue,
  mediumText,
  normalText,
} from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (max-width: 540px) {
    position: relative;
    margin-top: 120px;
  }
`;

const portraitContainer = css`
  display: flex;
  width: 70%;
  height: 30%;
  margin-bottom: 20px;
  //background-color: yellow;
  justify-content: center;
`;

const heroContainer = css`
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url('images/contact.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    //margin-top: 120px;
    height: 30vh;
  }
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
    align-self: center;
    align-items: center;
  }
`;

const leftContainer = css`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  align-items: center;
  padding-top: 40px;
  //background-color: green;

  span {
    width: 100vw;
    text-align: center;
    align-items: center;
    margin-top: 50px;
    font-size: ${mediumText};
  }

  p {
    margin-bottom: 30px;
    font-weight: bold italic;
    font-size: ${mediumText};
  }

  @media (max-width: 1024px) {
    height: auto;
    width: 100%;
  }

  @media (max-width: 540px) {
    height: auto;
    span {
      font-size: 1rem;
    }
  }
`;

const rightContainer = css`
  display: flex;
  flex-direction: column;
  background-color: ${darkBlue};
  color: white;
  width: 40%;
  height: auto;
  align-items: center;
  padding-top: 40px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const contactInfosContainer = css`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  //background-color: orange;
  margin-bottom: 40px;

  @media (max-width: 540px) {
    margin-bottom: 20px;

    p,
    a {
      font-size: 0.75rem;
    }
  }
`;

const iconContainer = css`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  //background-color: green;

  p {
    margin-left: 20px;
    padding-top: 10px;
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
  margin-left: 70px;
  text-decoration: none;

  a:hover {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  a:visited {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  a:active {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  a:link {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 540px) {
    font-size: 0.75rem;
  }
`;

const horizontalLine = css`
  border: solid 1px white;
  width: 90%;
  color: white;
  height: 1px;
  margin-left: 20px;
`;

const contentContainer = css`
  display: flex;
  flex-direction: row;
  //background-color: red;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const formContainer = css`
  display: flex;
  flex-direction: column;
  //background-color: red;
  width: 70%;
  height: 70%;

  @media (max-width: 540px) {
    label {
      font-size: 0.75rem;
    }
  }
`;

const inputStyles = css`
  display: block;
  width: 100%;
  background-color: ${lightBlue};
  font-family: Spartan;
  font-size: ${normalText};
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  height: 40px;

  @media (max-width: 540px) {
    font-size: 0.75rem;
  }
`;

const textareaStyles = css`
  display: block;
  width: 100%;
  background-color: ${lightBlue};
  font-family: Spartan;
  font-size: ${normalText};
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  height: 200px;

  @media (max-width: 540px) {
    font-size: 0.75rem;
  }
`;

const buttonStylesBlue = css`
  display: flex;
  align-self: center;
  //background-color: yellow;
  border: none;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: white;
  width: 30%;
  align-items: center;
  background-color: ${darkBlue};
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

  @media (max-width: 540px) {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
    color: white;
    background-color: ${darkBlue};
    font-size: 0.75rem;
    font-weight: 400;
    border-radius: 8px;
    padding: 8px 10px;
    letter-spacing: 2px;
    text-transform: none;

    :hover {
      border: none;
      transform: scale(1.1, 1.1);
      -webkit-transform: scale(1.1, 1.1);
      -moz-transform: scale(1.1, 1.1);
      cursor: pointer;
    }
  }
`;

const buttonStylesMessage = css`
  display: flex;
  align-self: center;
  //background-color: yellow;
  border: none;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: white;
  width: 40%;
  align-items: center;
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

  @media (max-width: 540px) {
    display: inline-block;
    margin-top: 50px;
    color: white;
    background-color: ${mediumBlue};
    font-size: 0.75rem;
    font-weight: 400;
    border-radius: 8px;
    padding: 8px 10px;
    letter-spacing: 2px;
    text-transform: none;

    :hover {
      border: none;
      transform: scale(1.1, 1.1);
      -webkit-transform: scale(1.1, 1.1);
      -moz-transform: scale(1.1, 1.1);
      cursor: pointer;
    }
  }
`;

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleOnSubmit(e) {
    setLoading(true);
    console.log(e.currentTarget, 'event currenttarget');
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    e.target.reset();

    console.log(response, 'API response');
  }

  return (
    <Layout>
      <Head>
        <title>Kontakt</title>
      </Head>
      <section css={pageContainer}>
        <div css={heroContainer}>
          <div css={heroHeading}>Kontakt</div>
        </div>
        <div css={contentContainer}>
          {!loading ? (
            <div css={leftContainer}>
              <form css={formContainer} onSubmit={handleOnSubmit}>
                <div>
                  <label htmlFor>Name</label>
                  <input css={inputStyles} id="name" type="text" name="name" />
                </div>
                <div>
                  <label htmlFor>Email Adresse</label>
                  <input
                    css={inputStyles}
                    id="email"
                    type="text"
                    name="email"
                  />
                </div>

                <div>
                  <label htmlFor>Ihre Nachricht</label>
                  <textarea css={textareaStyles} id="message" name="message" />
                </div>
                <button css={buttonStylesBlue}>Senden</button>
              </form>
              <div css={portraitContainer}>
                <Image
                  src={Portrait}
                  width="400"
                  height="400"
                  alt="Portrait von Marlies Theres Brunner"
                ></Image>
              </div>
              <p>
                <i>
                  <b>Ich freue mich auf Sie!</b>
                </i>
              </p>
            </div>
          ) : (
            <div css={leftContainer}>
              <span>
                Danke für Ihre Nachricht. <br />
                Ich melde mich so bald wie möglich bei Ihnen!{' '}
              </span>
              <Link href="/contact/">
                <a css={buttonStylesMessage} onClick={() => setLoading(false)}>
                  Neue Nachricht
                </a>
              </Link>
            </div>
          )}
          <div css={rightContainer}>
            <div css={contactInfosContainer}>
              <div css={iconContainer}>
                <GoLocation size={32} />
                <p>Adresse</p>
              </div>
              <div css={horizontalLine} />
              <div css={contactInfosTextStyles}>
                Michael-Walz-Gasse 37, 5020 Salzburg
              </div>
            </div>
            <div css={contactInfosContainer}>
              <div css={iconContainer}>
                <HiOutlineMailOpen size={32} />
                <p>Email</p>
              </div>
              <div css={horizontalLine} />
              <div css={contactInfosTextStyles}>
                <Link href="mailto:info@mt-brunner.at">
                  <a>info@mt-brunner.at</a>
                </Link>
              </div>
            </div>
            <div css={contactInfosContainer}>
              <div css={iconContainer}>
                <FiPhone size={32} />
                <p>Telefon</p>
              </div>
              <div css={horizontalLine} />
              <div css={contactInfosTextStyles}>+43 664 3309622</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
