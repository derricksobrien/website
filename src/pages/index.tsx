import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Generative AI History - Timeline & Overview</title>
        <meta name="description" content="Comprehensive history of generative AI from 1948 to present day" />
      </Head>
      <Header title="Generative AI History" />
      <main>
        <h1>🤖 A Comprehensive History of Generative AI</h1>
        <p>
          Generative artificial intelligence (GAI) refers to a family of AI techniques that can <strong>create new data</strong>—texts, images, audio or code—that resemble human-produced content. This comprehensive timeline traces the development of generative methods from their early roots in the 1940s to today's foundation models.
        </p>

        <div className="card">
          <h2>📚 Seven Eras of Generative AI</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <Link href="/timeline/era-1" style={{ textDecoration: 'none' }}>
              <div className="era-card">
                <h3>1️⃣ Early Foundations</h3>
                <p><strong>1940s–1950s</strong></p>
                <p className="era-description">Information theory, Turing test, early neural models</p>
              </div>
            </Link>

            <Link href="/timeline/era-2" style={{ textDecoration: 'none' }}>
              <div className="era-card">
                <h3>2️⃣ Rule-Based Systems</h3>
                <p><strong>1950s–1970s</strong></p>
                <p className="era-description">ELIZA, expert systems, symbolic AI</p>
              </div>
            </Link>

            <Link href="/timeline/era-3" style={{ textDecoration: 'none' }}>
              <div className="era-card">
                <h3>3️⃣ Model-Based Algorithms</h3>
                <p><strong>1960s–1990s</strong></p>
                <p className="era-description">Statistical models, backpropagation, early neural networks</p>
              </div>
            </Link>

            <Link href="/timeline/era-4" style={{ textDecoration: 'none' }}>
              <div className="era-card">
                <h3>4️⃣ Deep Generative Models</h3>
                <p><strong>2010s</strong></p>
                <p className="era-description">GANs, VAEs, Transformers, BERT</p>
              </div>
            </Link>

            <Link href="/timeline/era-5" style={{ textDecoration: 'none' }}>
              <div className="era-card">
                <h3>5️⃣ Foundation Models Era</h3>
                <p><strong>Late 2010s–2020s</strong></p>
                <p className="era-description">GPT-3, Diffusion models, ChatGPT</p>
              </div>
            </Link>

            <Link href="/suppliers" style={{ textDecoration: 'none' }}>
              <div className="era-card">
                <h3>6️⃣ Major Suppliers</h3>
                <p><strong>Current Ecosystem</strong></p>
                <p className="era-description">OpenAI, Anthropic, Google, Meta, and more</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card">
          <h2>🎯 Key Milestones</h2>
          <ul>
            <li><strong>1948:</strong> Shannon's Information Theory - foundation for language prediction</li>
            <li><strong>1950:</strong> Turing Test - proposed test for machine intelligence</li>
            <li><strong>1966:</strong> ELIZA - first generative AI chatbot</li>
            <li><strong>1986:</strong> Backpropagation - enabled deep neural networks</li>
            <li><strong>2014:</strong> GANs - generative adversarial networks by Goodfellow</li>
            <li><strong>2017:</strong> Transformers - "Attention Is All You Need"</li>
            <li><strong>2020:</strong> GPT-3 - 175B parameter language model</li>
            <li><strong>2022:</strong> ChatGPT - millions of users in days</li>
          </ul>
        </div>

        <div className="card">
          <h2>🚀 Explore More</h2>
          <p>
            Click on any era above to explore the key research papers, contributors, and innovations that shaped generative AI. Learn about the major suppliers driving the current generative AI ecosystem.
          </p>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/timeline/era-1" className="btn">
              Start with Era 1 →
            </Link>
            <Link href="/suppliers" className="btn" style={{ marginLeft: '1rem' }}>
              View Suppliers →
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <p>© 2026 Generative AI History. A comprehensive timeline of AI innovation.</p>
      </footer>
    </>
  );
}
