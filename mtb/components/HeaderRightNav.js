import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { mediumBlue, normalText } from '../styles/sharedStyles';

const navBarContainer = (open) => css`
  display: flex;
  justify-content: space-around;
  //background-color: yellow;
  width: 70%;
  list-style: none;
  z-index: 1200;

  padding: 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;

    @media (max-width: 1125px) {
      padding-bottom: 16px;
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
    :hover {
      cursor: pointer;
      border-bottom: 1px solid black;
    }
  }

  @media (max-width: 1125px) {
    flex-flow: column nowrap;
    background-color: ${mediumBlue};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 210px;
    margin-top: 0;
    padding-top: 3rem;
    transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

// const navBar = css`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   text-decoration: none;
//   //background-color: blue;

export default function HeaderRightNav(props) {
  const [open, setOpen] = useState(false);
  return (
    <ul css={navBarContainer(props.open)}>
      <Link href="/">
        <a>
          <li>Home</li>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <li>Über mich</li>
        </a>
      </Link>
      <Link href="/women">
        <a>
          <li>Frauen fördern</li>
        </a>
      </Link>
      <Link href="/men">
        <a>
          <li>Männer stärken</li>
        </a>
      </Link>
      <Link href="/press">
        <a>
          <li>Presse</li>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <li>Kontakt</li>
        </a>
      </Link>
    </ul>
  );
}
