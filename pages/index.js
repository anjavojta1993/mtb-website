import Head from 'next/head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Business- und Karrierecoaching" />
          <meta
            property="og:description"
            content="Beratung und Begleitung in jeder Phase Ihres Berufslebens!"
          />
          <meta
            property="og:image"
            content="../public/images/title_photo_blue.png"
          />
          <meta property="og:url" content="https://marliestheresbrunner.at" />
        </Head>
        <Hero />
      </Layout>
    </>
  );
}
