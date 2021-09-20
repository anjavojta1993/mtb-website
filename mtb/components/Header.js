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
  width: 100vw;
  font-size: ${normalText};
  //background-color: green;

  @media (max-width: 768px) {
    padding: 32px 24px;
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

export default function Header(props) {
  const [open, setOpen] = useState(false);
  return (
    <header css={headerStyles}>
      <div css={logoContainer}>
        <Image
          src={Logo}
          alt="Blauer Kreis mit Initialien MTB und Systemischer Coach"
        />
      </div>
      <HeaderRightNav open={open} />
      <HeaderBurger open={open} setOpen={setOpen} />
    </header>
  );
}
