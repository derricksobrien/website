import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Website</title>
        <meta name="description" content="Welcome to our website" />
      </Head>
      <Header />
      <main>
        <h1>Welcome</h1>
        <p>This is the home page.</p>
      </main>
    </>
  );
}
