import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Generative AI History</title>
        <meta name="description" content="About this comprehensive generative AI timeline and resource" />
      </Head>
      <Header title="About" />
      <main>
        <h1>📖 About This Resource</h1>
        <p>
          This website is a comprehensive timeline and resource documenting the evolution of generative AI from its theoretical foundations in the 1940s to the present day. It traces how researchers and innovators transformed mathematical theory into practical systems that can generate text, images, code, and more.
        </p>

        <div className="card">
          <h2>🎯 Purpose</h2>
          <p>
            Generative AI has become a transformative technology touching nearly every field of human endeavor. Yet the origins and development of these capabilities often go unexamined. This resource aims to:
          </p>
          <ul>
            <li>Trace the intellectual history of generative AI from Shannon's information theory to GPT-3</li>
            <li>Highlight key research papers and breakthroughs that enabled modern AI</li>
            <li>Profile the major organizations developing generative AI technologies</li>
            <li>Provide context for understanding current and future AI capabilities</li>
          </ul>
        </div>

        <div className="card">
          <h2>📚 Structure</h2>
          <p>
            The timeline is organized into six major eras, each representing a fundamental shift in how generative models work:
          </p>
          <ol style={{ marginLeft: '1.5rem' }}>
            <li><strong>Early Foundations (1940s-1950s):</strong> Information theory and the birth of AI as a discipline</li>
            <li><strong>Rule-Based Systems (1950s-1970s):</strong> ELIZA, expert systems, and symbolic AI</li>
            <li><strong>Model-Based Algorithms (1960s-1990s):</strong> Statistical models, neural networks, backpropagation</li>
            <li><strong>Deep Generative Models (2010s):</strong> GANs, VAEs, Transformers, BERT</li>
            <li><strong>Foundation Models (Late 2010s-2020s):</strong> GPT-3, diffusion models, ChatGPT</li>
            <li><strong>Major Suppliers:</strong> The current ecosystem of AI companies and platforms</li>
          </ol>
        </div>

        <div className="card">
          <h2>🔍 What You'll Learn</h2>
          <p>
            Each era page includes:
          </p>
          <ul>
            <li><strong>Key milestones</strong> - Major breakthroughs and publications</li>
            <li><strong>Contributors</strong> - The researchers and innovators driving progress</li>
            <li><strong>Technical innovations</strong> - How each generation improved upon the last</li>
            <li><strong>Real-world impact</strong> - How these developments changed society</li>
          </ul>
        </div>

        <div className="card">
          <h2>🚀 The Modern Era</h2>
          <p>
            The past few years have seen an explosion of generative AI capabilities and commercial applications. From OpenAI's ChatGPT attracting millions of users to open-source models from Meta and Hugging Face democratizing access, the landscape is evolving rapidly.
          </p>
          <p>
            <Link href="/suppliers" style={{ color: '#667eea', fontWeight: 'bold', textDecoration: 'underline' }}>
              View the major suppliers →
            </Link>
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/" className="btn">
            ← Back to Home
          </Link>
        </div>
      </main>
      <footer>
        <p>© 2026 Generative AI History. A comprehensive timeline of AI innovation.</p>
      </footer>
    </>
  );
}
