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
`;

const navBarContainer = css`
  display: flex;
  //justify-content: space-around;
  //background-color: yellow;
  width: 100%;
  height: 50%;
`;

const navBar = css`
  display: flex;
  align-items: center;
  justify-content: center;
  //text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  //background-color: blue;
  :first-of-type {
    margin-left: 10%;
    margin-right: 20px;
  }

  p:hover {
    cursor: none;
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
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
`;

export default function Footer() {
  return (
    <div css={footerStyles}>
      <div css={navBarContainer}>
        <Link href="/impressum">
          <a css={navBar}>Impressum</a>
        </Link>
        <Link href="/datenschutz">
          <a css={navBar}>Datenschutzerklärung</a>
        </Link>
        <div css={navBar}>
          <p>&copy; Marlies Theres Brunner</p>
        </div>
        <div css={iconContainer}>
          <Link href="https://www.linkedin.com/in/marlies-theres-brunner-97761118/">
            <a target="blank">
              <SiLinkedin size={26} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
