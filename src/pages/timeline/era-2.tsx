import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Era2() {
  return (
    <>
      <Head>
        <title>Era 2: Rule-Based Systems (1950s-1970s) - Generative AI History</title>
        <meta name="description" content="Rule-based generative systems: ELIZA, expert systems, and early symbolic AI" />
      </Head>
      <Header title="Generative AI History" />
      <main>
        <h1>2️⃣ Rule-Based Generative Systems (1950s–1970s)</h1>
        <p>
          Early generative approaches relied on expert-defined rules and symbol manipulation. These systems were interpretable because human experts explicitly defined the rules that generated outputs.
        </p>

        <div className="card">
          <h2>💬 ELIZA (1966)</h2>
          <h3 style={{ color: '#667eea', marginTop: '1rem' }}>Joseph Weizenbaum – First Generative AI Program</h3>
          <p>
            <strong>What it was:</strong> ELIZA simulated a Rogerian psychotherapist using pattern matching and pre-written templates. Despite its simplicity, ELIZA demonstrated that simple natural-language rules could mimic conversation convincingly.
          </p>
          <p>
            <strong>Significance:</strong> Often cited as the first generative AI program. ELIZA was shocking to many users—they would have deep conversations with the program, sometimes forgetting it was a machine. This experiment revealed that people readily anthropomorphize systems that respond to natural language, a phenomenon that persists today with ChatGPT.
          </p>
          <p>
            <strong>Key insight:</strong> You don't need understanding for conversation; pattern matching and reflection can create the illusion of comprehension.
          </p>
        </div>

        <div className="card">
          <h2>🗣️ Rule-Based Machine Translation & Speech Synthesis</h2>
          <p>
            Systems like <strong>SYSTRAN (1968)</strong> pioneered automated language translation using hand-coded grammatical rules. Similarly, linguistic rule-based speech synthesizers modeled translation and speech using explicit phonetic and grammatical rules.
          </p>
          <p>
            These systems could translate between languages and synthesize speech by following predefined linguistic rules—representing a major advancement in making machines generate human-like content.
          </p>
        </div>

        <div className="card">
          <h2>🎯 Expert Systems (1950s–1990s)</h2>
          <p>
            Expert systems applied rules created by domain experts to generate conclusions. If-then rules captured expert knowledge: "If the patient has symptom X and test Y shows result Z, then diagnose condition W."
          </p>
          <p>
            <strong>Applications:</strong>
          </p>
          <ul>
            <li><strong>Medical diagnosis:</strong> Systems like MYCIN diagnosed bacterial infections using expert rules</li>
            <li><strong>Financial analysis:</strong> Systems generated investment recommendations</li>
            <li><strong>Manufacturing:</strong> Systems diagnosed equipment failures</li>
            <li><strong>Chatbots & dialogue systems:</strong> Generated conversational responses using templates</li>
          </ul>
          <p>
            <strong>Advantage:</strong> Interpretability—you could always trace why the system generated a particular output by examining the rules it fired.
          </p>
        </div>

        <div className="card">
          <h2>⚠️ Limitations That Drove Change</h2>
          <p>
            As tasks grew more complex, fixed rules could not cover all situations. Expert systems required painstaking manual programming of thousands or millions of rules. Key limitations included:
          </p>
          <ul>
            <li><strong>Brittleness:</strong> Systems failed when encountering situations not covered by existing rules</li>
            <li><strong>Knowledge bottleneck:</strong> Encoding expert knowledge was labor-intensive and error-prone</li>
            <li><strong>Lack of learning:</strong> Systems couldn't improve from experience or adapt to new domains</li>
            <li><strong>Combinatorial explosion:</strong> Handling all edge cases required exponentially more rules</li>
          </ul>
          <p>
            These limitations motivated researchers to move away from hand-crafted rules toward <strong>data-driven approaches</strong> that could learn patterns from examples.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/timeline/era-1" className="btn">
            ← Era 1: Foundations
          </Link>
          <Link href="/timeline/era-3" className="btn">
            Era 3: Model-Based Algorithms →
          </Link>
        </div>
      </main>
      <footer>
        <p>© 2026 Generative AI History. A comprehensive timeline of AI innovation.</p>
      </footer>
    </>
  );
}
