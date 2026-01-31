import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Suppliers() {
  return (
    <>
      <Head>
        <title>Major Suppliers - Generative AI Ecosystem</title>
        <meta name="description" content="Overview of major companies developing and delivering generative AI" />
      </Head>
      <Header title="Generative AI Ecosystem" />
      <main>
        <h1>6️⃣ Major Suppliers & the Generative AI Ecosystem</h1>
        <p>
          The rapid adoption of generative AI has fostered a diverse ecosystem of suppliers, from foundation model developers to hardware providers and professional-services firms. Here's an overview of the key players shaping the industry.
        </p>

        <h2 style={{ marginTop: '2.5rem', color: '#667eea' }}>🤖 Foundation Model Developers</h2>

        <div className="card">
          <h3>OpenAI</h3>
          <p>
            <strong>Key Models:</strong> GPT series, DALL-E, Codex
          </p>
          <p>
            A leading developer of large language and multimodal models. OpenAI provides APIs, consumer apps (ChatGPT), and enterprise solutions. The company's nonprofit-governed, public-benefit structure is designed to align AI development with long-term societal benefit.
          </p>
        </div>

        <div className="card">
          <h3>Anthropic</h3>
          <p>
            <strong>Key Models:</strong> Claude (Opus, Sonnet, Haiku)
          </p>
          <p>
            Creator of the Claude family of models, emphasizing safety, interpretability, and "Constitutional AI." Anthropic offers instruction-following models and integrates with AWS and Google Cloud. The company stresses public-benefit governance and alignment.
          </p>
        </div>

        <div className="card">
          <h3>Google / Alphabet</h3>
          <p>
            <strong>Key Models:</strong> Gemini family (text, code, image, audio, video)
          </p>
          <p>
            Develops the Gemini family of multimodal models and integrates them into products like Search, Workspace, and Android. Google's R&D capabilities combined with massive infrastructure enable state-of-the-art reasoning and multimodal generation.
          </p>
        </div>

        <div className="card">
          <h3>Meta</h3>
          <p>
            <strong>Key Models:</strong> LLaMA (open-source)
          </p>
          <p>
            Offers the Llama open-source family of large language models, emphasizing accessibility and community-driven development. Meta focuses on openness and flexibility across cloud, edge, and consumer devices.
          </p>
        </div>

        <div className="card">
          <h3>Mistral AI</h3>
          <p>
            <strong>Key Models:</strong> Mistral 7B, Mixtral 8×7B
          </p>
          <p>
            Paris-based start-up producing efficient, open-weight models with long contexts and multilingual support. Emphasizes European data sovereignty and accessibility of advanced AI.
          </p>
        </div>

        <div className="card">
          <h3>Cohere</h3>
          <p>
            <strong>Key Models:</strong> Command series
          </p>
          <p>
            Canadian company providing enterprise-ready large language models with emphasis on privacy, security, and cloud-agnostic deployment. Also offers open-source projects like Aya Expanse.
          </p>
        </div>

        <div className="card">
          <h3>Hugging Face</h3>
          <p>
            <strong>Key Assets:</strong> Model hub, Inference APIs, AutoTrain
          </p>
          <p>
            Hosts a vast open-source model hub, offering inference APIs and AutoTrain tools for training and deploying models. Hugging Face fosters transparency and community collaboration in AI development.
          </p>
        </div>

        <h2 style={{ marginTop: '2.5rem', color: '#667eea' }}>☁️ Infrastructure & Service Providers</h2>

        <div className="card">
          <h3>Microsoft</h3>
          <p>
            <strong>Market Share:</strong> ~39% of generative AI market
          </p>
          <p>
            Holds the largest share of the generative AI market. Invests in its own models, partners with OpenAI, and provides Azure OpenAI Service. Integrates generative AI into Microsoft Copilot and GitHub Copilot, and is developing in-house AI chips and model clusters.
          </p>
        </div>

        <div className="card">
          <h3>Amazon Web Services (AWS)</h3>
          <p>
            <strong>Market Share:</strong> ~19%
          </p>
          <p>
            Focuses on enterprise deployment. Offers Amazon Bedrock for accessing foundation models, SageMaker for training and hosting, and CodeWhisperer for code generation. Invests heavily in generative AI infrastructure.
          </p>
        </div>

        <div className="card">
          <h3>NVIDIA</h3>
          <p>
            <strong>GPU Market Share:</strong> ~92% (2024)
          </p>
          <p>
            Dominant supplier of data-center GPUs. Provides AI hardware (H100, GB200), DGX Cloud infrastructure, and the CUDA-based software stack to accelerate training and inference. NVIDIA's GPU ecosystem is critical for training and deploying large generative models.
          </p>
        </div>

        <h2 style={{ marginTop: '2.5rem', color: '#667eea' }}>🎯 Professional Services & Others</h2>

        <div className="card">
          <h3>Accenture & Deloitte</h3>
          <p>
            Professional-services firms helping enterprises design, test, and deploy generative AI solutions. Accenture's AI Refinery platform offers tools for safe deployment and identifies industry-specific use cases. Deloitte provides readiness assessments and compliance frameworks.
          </p>
        </div>

        <div className="card">
          <h3>Other Notable Players</h3>
          <ul>
            <li><strong>Apple:</strong> Integrated on-device LLMs emphasizing privacy (Apple Intelligence)</li>
            <li><strong>IBM / Salesforce:</strong> Enterprise AI solutions (watsonx.ai, Einstein GPT)</li>
            <li><strong>Stability AI / Midjourney / Runway:</strong> Generative imagery and video</li>
            <li><strong>Pika / Suno AI / Udio:</strong> Text-to-music generation</li>
            <li><strong>Baidu / Alibaba:</strong> Regional foundation models (China)</li>
          </ul>
        </div>

        <div className="card">
          <h2>🔮 The Future</h2>
          <p>
            The generative AI landscape continues to evolve rapidly. Key trends include:
          </p>
          <ul>
            <li><strong>Open-source models:</strong> More powerful open models from Meta, Hugging Face, and startups</li>
            <li><strong>Specialized models:</strong> Domain-specific models for healthcare, finance, science</li>
            <li><strong>Multimodal integration:</strong> Better fusion of text, vision, audio, and video</li>
            <li><strong>Efficiency improvements:</strong> Smaller, faster models with comparable performance</li>
            <li><strong>Safety & alignment:</strong> Focus on reducing bias, hallucinations, and ensuring responsible deployment</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn">
            ← Home
          </Link>
          <Link href="/about" className="btn">
            About →
          </Link>
        </div>
      </main>
      <footer>
        <p>© 2026 Generative AI History. A comprehensive timeline of AI innovation.</p>
      </footer>
    </>
  );
}
