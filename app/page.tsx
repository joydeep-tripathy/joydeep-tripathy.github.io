const Arrow = () => <span aria-hidden="true">↗</span>;

import SocialMenu from "./social-menu";

const proof = [
  { value: "5×", label: "faster evaluation" },
  { value: "~100%", label: "AI availability" },
  { value: "~0%", label: "transaction failures" },
  { value: "GSoC ’25", label: "Python Software Foundation" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <SocialMenu />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="mailto:joydeeptripathy3@gmail.com">
          Let’s talk <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit-dot" />
          <span className="orbit-label orbit-label-one">systems</span>
          <span className="orbit-label orbit-label-two">models</span>
          <span className="orbit-label orbit-label-three">research</span>
        </div>
        <div className="eyebrow-row">
          <span className="status-dot" />
          <span>Backend engineer · ML researcher</span>
          <span className="eyebrow-rule" />
          <span>India · Open to opportunities</span>
        </div>
        <h1>
          I build systems
          <br />
          that <em>don’t flinch.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I turn fragile pipelines into fast, fault-tolerant production systems—and
            theory-heavy ML ideas into experiments that actually run.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See the proof <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-ghost"
              href="https://github.com/joydeep049"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        {proof.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">01 / Selected impact</p>
          <h2>Production is where the interesting problems start.</h2>
        </div>

        <article className="feature-card">
          <div className="feature-copy">
            <div className="feature-meta">
              <span>HackerRank</span>
              <span>NextGen · 2026</span>
            </div>
            <h3>Re-architecting an AI evaluation pipeline under real traffic.</h3>
            <p>
              Led the decoupling and parallelization of evaluation workflows,
              cutting attempt evaluation time to roughly 20% of the original while
              making failures dramatically less interesting.
            </p>
            <ul className="impact-list">
              <li>
                <span>01</span>
                Migrated AI infrastructure from Portkey to an internal platform and
                designed fallbacks that pushed availability toward 100%.
              </li>
              <li>
                <span>02</span>
                Redesigned database transaction boundaries to take production push
                failures effectively to zero.
              </li>
              <li>
                <span>03</span>
                Refactored the service around SOLID boundaries so the faster system
                was also the easier one to change.
              </li>
            </ul>
          </div>
          <div className="architecture" aria-label="Evaluation architecture illustration">
            <div className="architecture-head">
              <span>evaluation / v2</span>
              <span className="live-indicator">live</span>
            </div>
            <div className="pipeline">
              <div className="pipeline-node node-input">
                <small>event</small>
                <strong>Attempt</strong>
              </div>
              <span className="connector connector-a" />
              <div className="pipeline-node node-orchestrator">
                <small>async</small>
                <strong>Orchestrator</strong>
              </div>
              <span className="connector connector-b" />
              <div className="pipeline-branches">
                <div className="pipeline-node"><strong>AI score</strong><small>fallback ready</small></div>
                <div className="pipeline-node"><strong>Code score</strong><small>isolated worker</small></div>
                <div className="pipeline-node"><strong>Signals</strong><small>parallel task</small></div>
              </div>
              <span className="connector connector-c" />
              <div className="pipeline-node node-output">
                <small>atomic</small>
                <strong>Result</strong>
              </div>
            </div>
            <div className="architecture-foot">
              <span><i /> healthy</span>
              <span>latency ↓ 80%</span>
            </div>
          </div>
        </article>
      </section>

      <section className="section open-source-section">
        <div className="section-heading light-heading">
          <p className="section-kicker violet-kicker">02 / Open source</p>
          <h2>Infrastructure should keep working when the easy assumptions disappear.</h2>
        </div>

        <article className="oss-card">
          <div className="oss-main">
            <div className="oss-badge">Google Summer of Code ’25 · Python Software Foundation</div>
            <h3>No-Scan Mode for CVE Binary Tool</h3>
            <p>
              Decoupled SBOM generation from vulnerability scanning so security teams
              can inventory software in air-gapped and bandwidth-constrained systems—
              without downloading a roughly 2.5 GB vulnerability database.
            </p>
            <div className="oss-links">
              <a
                className="button button-primary"
                href="https://gist.github.com/joydeep049/c2252e72d2c1bed005128d85136e1288"
                target="_blank"
                rel="noreferrer"
              >
                Read final report <Arrow />
              </a>
              <a
                className="text-link"
                href="https://github.com/ossf/cve-bin-tool"
                target="_blank"
                rel="noreferrer"
              >
                View project <Arrow />
              </a>
            </div>
          </div>
          <div className="oss-proof">
            <div className="terminal-bar">
              <span /><span /><span />
              <small>cve-bin-tool</small>
            </div>
            <div className="terminal-copy">
              <p><span>$</span> cve-bin-tool --no-scan ./artifact</p>
              <p className="terminal-muted">→ extracting component identities</p>
              <p className="terminal-muted">→ resolving CPE + PURL metadata</p>
              <p className="terminal-muted">→ exporting SPDX / CycloneDX</p>
              <p className="terminal-success">✓ SBOM ready. Network not required.</p>
            </div>
            <div className="oss-stats">
              <div><strong>2.5 GB</strong><span>database dependency removed</span></div>
              <div><strong>40+</strong><span>Pull Requests</span></div>
            </div>
          </div>
        </article>

        <div className="additional-oss" aria-labelledby="additional-oss-title">
          <div className="additional-oss-heading">
            <p className="section-kicker" id="additional-oss-title">Also contributed to</p>
            <span>Across security, developer tooling, and open hardware</span>
          </div>
          <div className="additional-oss-grid">
            <article>
              <span>01</span>
              <h3>Veraison</h3>
              <p>Confidential Computing Consortium</p>
            </article>
            <article>
              <span>02</span>
              <h3>Sailing Downstream</h3>
              <p>RISC-V</p>
            </article>
            <article>
              <span>03</span>
              <h3>GitIngest</h3>
              <p>Open-source developer tooling</p>
            </article>
          </div>
        </div>

        <div className="experience-grid">
          <article className="experience-card experience-purple">
            <div className="experience-topline"><span>NyunAI</span><span>ML Engineering</span></div>
            <h3>Making large models smaller without losing what makes them useful.</h3>
            <p>Worked across quantization and distillation workflows, including AWQ, AWLQ, GGUF conversion, and dataset distillation.</p>
            <div className="tag-row"><span>PyTorch</span><span>Quantization</span><span>LLMs</span></div>
          </article>
          <article className="experience-card experience-paper">
            <div className="experience-topline"><span>Summit Horizon Holdings</span><span>Founding Intern</span></div>
            <h3>From auth to payments to infrastructure—the whole product path.</h3>
            <p>Built Recon Social across Flask, React, Stripe, OAuth, JWT, feed pagination, containerized deployment, and webhook-driven flows.</p>
            <div className="tag-row"><span>Flask</span><span>React</span><span>AWS</span><span>Stripe</span></div>
          </article>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="research-heading">
          <p className="section-kicker">03 / Research notebook</p>
          <h2>I like the equations <em>before</em> the API.</h2>
          <p>
            My current work sits where probabilistic modeling, representation
            learning, and sequential decision-making overlap.
          </p>
        </div>

        <div className="research-grid">
          <article className="research-card research-featured">
            <div className="research-number">R / 01</div>
            <div className="latent-map" aria-hidden="true">
              <span className="latent-point p1" /><span className="latent-point p2" />
              <span className="latent-point p3" /><span className="latent-point p4" />
              <span className="latent-point p5" /><span className="latent-point p6" />
              <span className="latent-path" />
            </div>
            <div className="research-copy">
              <p className="research-type">Generative modeling</p>
              <h3>EmoSynth</h3>
              <p>A β-VAE laboratory for exploring emoji manifolds through latent interpolation, nearest-neighbor search, and controllable synthesis.</p>
              <div className="tag-row"><span>β-VAE</span><span>SLERP</span><span>PyTorch</span></div>
            </div>
          </article>

          <article className="research-card research-world">
            <div className="research-number">R / 02</div>
            <div className="equation" aria-label="Latent context equation">
              c ~ p(c | o₁:ₖ, a₁:ₖ)
              <small>infer the world, then plan</small>
            </div>
            <div className="research-copy">
              <p className="research-type">World models</p>
              <h3>Learning the laws of unseen worlds</h3>
              <p>Few-shot system identification: infer hidden physics from a short interaction history, then plan in latent space.</p>
              <div className="tag-row"><span>Sequential VAE</span><span>SSM</span><span>Planning</span></div>
            </div>
          </article>

          <article className="research-card research-protein">
            <div className="research-number">R / 03</div>
            <div className="protein-viz" aria-hidden="true">
              <span /><span /><span /><span /><span /><span /><span />
            </div>
            <div className="research-copy">
              <p className="research-type">Score-based models</p>
              <h3>Protein sequence generation</h3>
              <p>Studying diffusion through energy-based models, score matching, Langevin dynamics, and empirical generation quality.</p>
              <div className="tag-row"><span>Diffusion</span><span>MCMC</span><span>EBM</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section principles-section">
        <div className="principles-intro">
          <p className="section-kicker violet-kicker">04 / How I work</p>
          <h2>Engineer first. Researcher always.</h2>
        </div>
        <div className="principles-list">
          <article>
            <span>01</span>
            <h3>Find the failure boundary.</h3>
            <p>Good architecture starts with knowing what can fail, what must remain atomic, and what should degrade gracefully.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Understand the mechanism.</h3>
            <p>I would rather derive the objective than cargo-cult the library call. The “why” makes the implementation better.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Leave a cleaner system.</h3>
            <p>Performance wins matter more when the next engineer can reason about, test, and safely extend the result.</p>
          </article>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-aside">
          <span className="about-mark">JT</span>
          <p>Gwalior → Bengaluru → wherever the next difficult problem lives.</p>
        </div>
        <div className="about-copy">
          <p className="section-kicker">05 / A little context</p>
          <h2>I’m Joydeep—a backend engineer who fell very far down the neural-network rabbit hole.</h2>
          <div className="about-columns">
            <p>
              I studied Computer Science at ABV-IIITM Gwalior, contributed to
              production systems at HackerRank, and became a GSoC contributor and
              maintainer in the Python open-source ecosystem.
            </p>
            <p>
            When I’m not profiling code or reading a paper, I’m usually playing guitar, drinking coffee,
            or explaining why an equation exists in the first place.
            </p>
          </div>
          <div className="stack-list" aria-label="Technical skills">
            {[
              "Python", "TypeScript", "C++", "Go", "PyTorch", "FastAPI",
              "Flask", "PostgreSQL", "Docker", "AWS", "GitHub Actions"
            ].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-label"><span className="status-dot" /> Available for the right role</div>
        <h2>If the problem is hard enough to be interesting, <em>I’m in.</em></h2>
        <a className="contact-email" href="mailto:joydeeptripathy3@gmail.com">
          joydeeptripathy3@gmail.com <Arrow />
        </a>
        <div className="social-row">
          <a href="https://github.com/joydeep049" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="https://www.linkedin.com/in/joydeep-tripathy-b766371ab" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://gist.github.com/joydeep049/c2252e72d2c1bed005128d85136e1288" target="_blank" rel="noreferrer">GSoC report <Arrow /></a>
        </div>
      </section>

      <footer>
        <span>© 2026 Joydeep Tripathy</span>
        <span>Built with systems thinking and unreasonable curiosity.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
