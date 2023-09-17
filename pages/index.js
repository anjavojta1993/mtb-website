import Head from 'next/head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
          <meta property="og:title" content="Marlies Theres Brunner" />
          <meta
            property="og:image"
            content="/public/images/title_photo_blue.png"
          />
          <meta
            property="og:description"
            content="Business- und Karrierecoaching. Beratung und Begleitung in jeder Phase
            Ihres Berufslebens!"
          />
          <meta property="og:url" content="//www.marliestheresbrunner.at" />
        </Head>
        <Hero />
      </Layout>
    </>
  );
}
