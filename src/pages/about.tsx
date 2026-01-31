import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Website</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <Header title="About Us" />
      <main>
        <h1>About Us</h1>
        <p>Welcome to our website. This is the about page where you can learn more about our project.</p>
        <h2>Our Mission</h2>
        <p>We're building a modern Next.js website with TypeScript and React.</p>
      </main>
    </>
  );
}
