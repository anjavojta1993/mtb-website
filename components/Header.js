/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { normalText } from '../styles/sharedStyles';
import HeaderBurger from './HeaderBurger';
import HeaderRightNav from './HeaderRightNav';

const headerStyles = css`
  display: flex;
  align-items: center;
  height: 120px;
  width: 100%;
  font-size: ${normalText};
  //background-color: green;
  z-index: 2000;

  @media (max-width: 540px) {
    position: fixed;
    top: 0px;
    right: 0px;
    background-color: white;
  }
`;

const logoContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-left: 20px;
  //background-color: red;

  img {
    height: 110px;
  }

  .logo2 {
    display: none;
  }

  @media (max-width: 780px) {
    .logo1 {
      display: none;
    }

    .logo2 {
      display: flex;
    }
  }
`;

export default function Header(props) {
  const [open, setOpen] = useState(false);
  return (
    <header css={headerStyles}>
      <div css={logoContainer}>
        <img
          src="/images/logo8.svg"
          alt="Blauer Kreis mit Initialien MTB und Systemischer Coach"
          className="logo1"
        />
        <img
          src="/images/logo_responsive.jpg"
          alt="Blauer Kreis mit Initialien MTB"
          className="logo2"
        />
      </div>
      <HeaderRightNav open={open} />
      <HeaderBurger open={open} setOpen={setOpen} />
    </header>
  );
}
