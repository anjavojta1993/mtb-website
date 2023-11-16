import Head from 'next/head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="Business - und Karrierecoaching"
          content="Beratung und Begleitung in jeder Phase Ihres Berufslebens!
          Einstieg – Aufstieg – Orientierung – Veränderung – Neustart"
          key="desc"
        />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
