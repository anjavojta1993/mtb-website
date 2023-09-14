import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { SiLinkedin } from 'react-icons/si';
import Logo from '../public/images/logo.png';
import { lightGrey, normalText } from '../styles/sharedStyles';

const footerStyles = css`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100vw;
  font-size: ${normalText};
  background-color: ${lightGrey};

  @media (max-width: 768px) {
    height: 200px;
    width: 100vw;
    font-size: ${normalText};
    background-color: ${lightGrey};
    flex-wrap: wrap;
  }

  @media (max-width: 540px) {
    font-size: 0.75rem;
  }
`;

const navBarContainer = css`
  display: flex;
  //justify-content: space-around;
  //background-color: yellow;
  width: 100%;
  height: 50%;
  margin-left: 10%;

  li {
    list-style: none;
    margin: auto;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    //text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    //background-color: blue;
    margin-right: 20px;

    p:hover {
      cursor: none;
      text-decoration: none;
    }

    :hover {
      cursor: pointer;
      font-weight: bold;
    }

    :visited {
      cursor: pointer;
      color: black;
    }
    :active {
      cursor: pointer;
      color: black;
    }
    :link {
      cursor: pointer;
      color: black;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const iconContainer = css`
  display: flex;
  //align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 30%;
  //background-color: green;
  text-decoration: none;
  a:hover {
    cursor: pointer;
    color: black;
  }
  a:visited {
    cursor: pointer;
    color: black;
  }
  a:active {
    cursor: pointer;
    color: black;
  }
  a:link {
    cursor: pointer;
    color: black;
  }
`;

export default function Footer() {
  return (
    <div css={footerStyles}>
      <div css={navBarContainer}>
        <Link href="/impressum">
            <li>Impressum</li>
        </Link>
        <Link href="/datenschutz">
            <li>Datenschutzerklärung</li>
        </Link>
        <a href="https://www.linkedin.com/in/marlies-theres-brunner-97761118/" target="blank">
            <SiLinkedin size={26} />
        </a>
        <li>&copy; Marlies Theres Brunner</li>
      </div>
    </div>
  );
}
