import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/logo.png';
import { normalText } from '../styles/sharedStyles';

const footerStyles = css`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  font-size: ${normalText};
  background-color: red;
`;

const navBarContainer = css`
  display: flex;
  justify-content: space-around;
  background-color: yellow;
  width: 80%;
`;

const navBar = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  background-color: blue;

  :hover {
    cursor: pointer;
  }
`;

const iconContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20%;
  height: 100%;
  background-color: red;
`;

export default function Footer() {
  return <div css={footerStyles}>footer</div>;
}
