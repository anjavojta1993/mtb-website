import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/images/logo.jpg';
import { normalText } from '../styles/sharedStyles';
import HeaderBurger from './HeaderBurger';
import HeaderRightNav from './HeaderRightNav';

const headerStyles = css`
  display: flex;
  align-items: center;
  height: 120px;
  width: 100%;
  font-size: ${normalText};
  z-index: 2000;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 120px;
    z-index: 2000;
    position: fixed;
    background-color: white;
  }

  @media (max-width: 540px) {
    position: fixed;
  }
`;

const logoContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 25%;
  margin-left: 30px;
  background-image: url('images/logo.jpg');
  background-repeat: no-repeat;
  //background-color: red;

  @media (max-width: 1208px) {
    margin-top: 20px;
    margin-left: 30px;
    background-image: url('images/logo_responsive.jpg');
  }
`;

export default function Header(props) {
  const [open, setOpen] = useState(false);
  return (
    <header css={headerStyles}>
      <div css={logoContainer}>
        {/* <Image
          src={Logo}
          alt="Blauer Kreis mit Initialien MTB und Systemischer Coach"
        /> */}
      </div>
      <HeaderRightNav open={open} />
      <HeaderBurger open={open} setOpen={setOpen} />
    </header>
  );
}
