import Head from 'next/head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const express = require('express');
const app = express();

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Hero />
      </Layout>
    </>
  );
}

function requireHTTPS(req, res, next) {
  if (process.env.NODE_ENV == 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
    }
  }

  next();
}

app.use(requireHTTPS);
