import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/logo.png';
import { normalText } from '../styles/sharedStyles';

const headerStyles = css`
  display: flex;
  align-items: center;
  height: 120px;
  width: 100vw;
  font-size: ${normalText};
  //background-color: green;
`;

const navBarContainer = css`
  display: flex;
  justify-content: space-around;
  //background-color: yellow;
  width: 70%;
`;

const navBar = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  //background-color: blue;

  :hover {
    cursor: pointer;
  }
`;

const logoContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  //background-color: red;
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div css={logoContainer}>
        <Image
          src={Logo}
          height="110px"
          width="320px"
          alt="Blauer Kreis mit Initialien MTB und Systemischer Coach"
        />
      </div>
      <div css={navBarContainer}>
        <Link href="/">
          <a css={navBar}>Home</a>
        </Link>
        <Link href="/about">
          <a css={navBar}>Über mich</a>
        </Link>
        <Link href="/women">
          <a css={navBar}>Frauen fördern</a>
        </Link>
        <Link href="/men">
          <a css={navBar}>Männer stärken</a>
        </Link>
        <Link href="/press">
          <a css={navBar}>Presse</a>
        </Link>
        <Link href="/contact">
          <a css={navBar}>Kontakt</a>
        </Link>
      </div>
    </header>
  );
}
