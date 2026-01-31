import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Era1() {
  return (
    <>
      <Head>
        <title>Era 1: Early Foundations (1940s-1950s) - Generative AI History</title>
        <meta name="description" content="Early foundations of generative AI: information theory, Turing test, and early neural networks" />
      </Head>
      <Header title="Generative AI History" />
      <main>
        <h1>1️⃣ Early Foundations (1940s–1950s)</h1>
        <p>
          The earliest seeds of generative AI were planted in information theory and the conceptualization of machine intelligence.
          These decades established the theoretical and computational foundations that would drive all future AI development.
        </p>

        <div className="card">
          <h2>📊 Information Theory (1948)</h2>
          <h3 style={{ color: '#667eea', marginTop: '1rem' }}>Claude Shannon – "A Mathematical Theory of Communication"</h3>
          <p>
            <strong>Significance:</strong> Laid the foundation for probabilistic modeling and language prediction (n-grams). Shannon asked how likely a next letter is in a sequence, which influenced later statistical language models.
          </p>
          <p>
            This groundbreaking work established the mathematical framework for understanding information, entropy, and communication channels—concepts that remain central to modern language models and generative AI today.
          </p>
        </div>

        <div className="card">
          <h2>🧠 The Turing Test (1950)</h2>
          <h3 style={{ color: '#667eea', marginTop: '1rem' }}>Alan Turing – "Computing Machinery and Intelligence"</h3>
          <p>
            <strong>Significance:</strong> Proposed a test for machine intelligence, paving the way for conversational agents and later chatbots.
          </p>
          <p>
            Turing's pivotal question—"Can machines think?"—was answered through his imitation game, where a machine that could fool a human into thinking it was human would be considered intelligent. This philosophical framework directly inspired the development of conversational AI systems like ELIZA and, decades later, ChatGPT.
          </p>
        </div>

        <div className="card">
          <h2>🔬 Early Neural Models & Machine Learning (1952–1957)</h2>
          <p>
            Three major developments emerged during this period, each contributing essential concepts:
          </p>
          <ul>
            <li>
              <strong>Arthur Samuel (1952):</strong> Developed one of the first machine-learning programs (checkers) that could learn from experience, demonstrating that systems could improve through data rather than hand-coded rules.
            </li>
            <li>
              <strong>Frank Rosenblatt (1957):</strong> Created the Perceptron, an early trainable neural network. The Perceptron showed that artificial neurons could learn weights and biases, laying the groundwork for modern deep learning.
            </li>
            <li>
              <strong>Hodgkin & Huxley (1952):</strong> Modeled neuron firing mathematically, inspiring computational neuroscience and showing how biological neurons could be simulated computationally.
            </li>
          </ul>
          <p>
            <strong>Significance:</strong> These developments provided core ideas—learning from data and neural computation—that later enabled generative modeling. They shifted AI from symbolic rule-based systems toward data-driven learning.
          </p>
        </div>

        <div className="card">
          <h2>🎓 Birth of AI Research (1956)</h2>
          <h3 style={{ color: '#667eea', marginTop: '1rem' }}>Dartmouth Summer Research Project on AI</h3>
          <p>
            The Dartmouth Summer Research Project on AI convened leading scientists including John McCarthy, Marvin Minsky, Claude Shannon, and others to formalize the field of artificial intelligence. This conference established AI as a discipline, set research agendas, and created a community of researchers dedicated to solving the AI problem.
          </p>
          <p>
            The Dartmouth conference's optimism and broad vision shaped the entire trajectory of AI research for decades to come.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn">
            ← Home
          </Link>
          <Link href="/timeline/era-2" className="btn">
            Era 2: Rule-Based Systems →
          </Link>
        </div>
      </main>
      <footer>
        <p>© 2026 Generative AI History. A comprehensive timeline of AI innovation.</p>
      </footer>
    </>
  );
}
