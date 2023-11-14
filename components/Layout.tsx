import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const containerStyles = css`
  margin: 0;
  overflow: hidden;
`;

type Props = {
  shoppingCart: {
    id: string;
    quantity: string;
  }[];

  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      {/* pass props from _app.js */}
      <Header />
      <div css={containerStyles}>{props.children}</div>
      <Footer />
    </>
  );
}
