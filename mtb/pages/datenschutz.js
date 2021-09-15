import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { lightGrey, normalText } from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 40px;
  height: 100vh;
`;

export default function Datenschutz() {
  return (
    <Layout>
      <div css={pageContainer}>TO DO: DATENSCHUTZ</div>;
    </Layout>
  );
}
