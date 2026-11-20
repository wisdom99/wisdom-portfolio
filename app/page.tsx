import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/section'
import { CTA } from '@/components/cta'
import { CaseStudyCard } from '@/components/case-study-card'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site'
import { PortfolioTerminal } from '@/components/portfolio-terminal'

export const metadata: Metadata = createPageMetadata({
  title: 'Senior Backend Engineer | Payments, Distributed Systems & Applied AI',
  description:
    'Wisdom Ifeanyi builds reliable backend systems across payments, authentication and distributed workflows, with a growing focus on LLM evaluation and agentic software engineering.',
  path: '/'
})

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <p className="eyebrow">Senior Backend Engineer • Payments • Distributed Systems • Applied AI</p>
        <h1>Reliable systems. Practical AI. Built for production.</h1>
        <p className="lead">
          I&apos;m Wisdom Ifeanyi. I design and operate high-trust backend systems
          across payments, authentication and distributed workflows. I&apos;m also
          exploring how LLMs and software agents can move from useful experiments
          into dependable engineering and product workflows.
        </p>

        <div className="actions">
          <Link className="button primary" href="/case-studies">
            View Case Studies
          </Link>
          <a
            className="button"
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
          <a className="button" href={siteConfig.resumeMailto}>
            Request Resume
          </a>
          <Link className="button" href="/work-with-me">
            Work With Me
          </Link>
        </div>

        <PortfolioTerminal />

        <div className="proof-grid">
          <article className="proof-card">
            <span className="proof-label">Production scale</span>
            <strong>10M+ transactions daily</strong>
            <p>Backend engineering inside high-volume payment infrastructure.</p>
          </article>
          <article className="proof-card">
            <span className="proof-label">Platform scale</span>
            <strong>60M+ enrolled cards</strong>
            <p>Authentication and tokenization systems built for high-trust use cases.</p>
          </article>
          <article className="proof-card">
            <span className="proof-label">Measured outcome</span>
            <strong>10,000 records in under 60 seconds</strong>
            <p>A redesigned Kafka-based bulk token-enrolment workflow.</p>
          </article>
          <article className="proof-card">
            <span className="proof-label">Ownership</span>
            <strong>Design through production</strong>
            <p>Architecture, implementation, integration, verification and operational support.</p>
          </article>
        </div>
      </section>

      <Section
        title="From ambiguous problem to production system"
        intro="My work combines backend engineering, product judgment and operational ownership. I translate evolving requirements and integration constraints into technical decisions, then carry them through implementation, verification and production."
      />

      <Section
        title="Selected engineering work"
        intro="A mix of production payment systems, reliability work and applied AI evaluation."
      >
        <div className="grid">
          <CaseStudyCard
            title="SafeToken"
            description="Multi-tenant transaction authentication, OTP provider integration, issuer-facing improvements and production reliability."
            href="/case-studies/safetoken-3ds"
          />
          <CaseStudyCard
            title="Bulk Token Enrollment"
            description="A Kafka-based redesign that resolved stuck uploads and processed 10,000 token records in under one minute."
            href="/case-studies/bulk-paycode"
          />
          <CaseStudyCard
            title="LLM Failure Analysis"
            description="Structured evaluation of reasoning failures, robustness gaps and the difference between fluent answers and reliable model behavior."
            href="/case-studies/llm-failure-analysis"
          />
          <CaseStudyCard
            title="Verve Payment Service"
            description="Gateway-to-card-processing translation with retry and idempotency handling for transaction integrity."
            href="/case-studies/verve-payments"
          />
        </div>
      </Section>

      <Section
        title="Applied AI engineering"
        intro="I am interested in the engineering layer between a promising model demo and a product people can actually depend on."
      >
        <div className="grid">
          <article className="card">
            <h3>LLM evaluation</h3>
            <p>
              I study model failure modes using structured evaluation rather than
              relying on surface fluency or a single successful response.
            </p>
            <p><Link href="/case-studies/llm-failure-analysis">View the evaluation case study →</Link></p>
          </article>
          <article className="card">
            <h3>Agentic software delivery</h3>
            <p>
              I use agents for scoped implementation, investigation, testing and
              documentation while keeping architecture and release accountability explicit.
            </p>
            <p><Link href="/thoughts/agentic-sdlc">Read the Agentic SDLC process →</Link></p>
          </article>
          <article className="card">
            <h3>Experimentation to production</h3>
            <p>
              My production background shapes how I think about AI systems:
              observability, security, failure modes, measurable quality and clear
              boundaries matter as much as model capability.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="Engineering workflow"
        intro="I use coding agents to shorten feedback loops across discovery, implementation, testing, review and documentation. The agent accelerates execution; I remain accountable for the technical decisions and production outcome."
      >
        <div className="grid agent-workflow">
          <article className="card workflow-step">
            <span className="workflow-number">01</span>
            <h3>Frame the outcome</h3>
            <p>Start with the user problem, success criteria, constraints and risks.</p>
          </article>
          <article className="card workflow-step">
            <span className="workflow-number">02</span>
            <h3>Ground the context</h3>
            <p>Provide repository structure, architecture, conventions and operating constraints.</p>
          </article>
          <article className="card workflow-step">
            <span className="workflow-number">03</span>
            <h3>Delegate bounded work</h3>
            <p>Use focused tasks for investigation, implementation, testing and documentation.</p>
          </article>
          <article className="card workflow-step">
            <span className="workflow-number">04</span>
            <h3>Review the reasoning</h3>
            <p>Inspect assumptions, trade-offs, security, architecture and failure behavior.</p>
          </article>
          <article className="card workflow-step">
            <span className="workflow-number">05</span>
            <h3>Verify independently</h3>
            <p>Run relevant checks and confirm behavior against the original requirements.</p>
          </article>
        </div>
        <div className="actions">
          <Link className="button" href="/thoughts/agentic-sdlc">Read my agentic SDLC process</Link>
        </div>
      </Section>

      <Section title="Core technologies">
        <div className="stack-groups">
          {[
            { label: 'Backend', items: ['Java 17/21', 'Spring Boot', 'REST APIs', 'Distributed Systems'] },
            { label: 'Data & Messaging', items: ['MSSQL', 'MySQL', 'Redis', 'Apache Kafka'] },
            { label: 'Platform', items: ['Docker', 'Kubernetes', 'Jenkins', 'Azure CI/CD'] },
            { label: 'Reliability', items: ['Prometheus', 'Grafana', 'ELK', 'OpenTelemetry'] },
            { label: 'Security', items: ['Spring Security', 'OAuth2', 'JWT', 'Encryption'] },
            { label: 'AI Engineering', items: ['LLM Evaluation', 'Agentic Workflows', 'Context Engineering', 'AI-Assisted Development'] },
            { label: 'Architecture', items: ['Microservices', 'Event-Driven Systems', 'Retries', 'Idempotency'] },
          ].map(({ label, items }) => (
            <div key={label} className="stack-group">
              <span className="stack-label">{label}</span>
              <div className="stack-pills">
                {items.map((item) => (
                  <span key={item} className="stack-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Selected projects"
        intro="Independent work where I explore AI systems, fintech operations and product ideas."
      >
        <div className="grid">
          <CaseStudyCard
            title="AI Incident Response Agent"
            description="An exploration of using AI agents to support structured incident investigation and response workflows."
            href="https://github.com/wisdom99/ai-incident-response-agent"
          />
          <CaseStudyCard
            title="PayLens Ops AI"
            description="Exploring AI-assisted operational workflows for payment and fintech teams."
            href="https://github.com/wisdom99/paylens-ops-ai"
          />
          <CaseStudyCard
            title="CivicCheck NG"
            description="A verification-focused product concept for helping users assess information before trusting or sharing it."
            href="https://github.com/wisdom99/CivicCheck-NG-Verify-before-you-trust"
          />
        </div>
      </Section>

      <Section
        title="Thoughts"
        intro="Notes on engineering judgment, agentic development, reliability and building systems that have to work outside the demo."
      >
        <div className="grid">
          <article className="card">
            <p className="thought-kicker">Thought 01</p>
            <h3>AI assistance raises the bar for engineering judgment</h3>
            <p>
              Faster code generation makes context, verification, security and
              ownership more important — not less.
            </p>
          </article>
          <article className="card">
            <p className="thought-kicker">Thought 02</p>
            <h3>Reliability starts before production</h3>
            <p>
              Retries, observability, rollback paths and failure behavior are
              architecture decisions, not cleanup tasks after launch.
            </p>
          </article>
          <article className="card">
            <p className="thought-kicker">Thought 03</p>
            <h3>Output is not the same as engineering value</h3>
            <p>
              Generated code matters only when the result is understandable,
              verified and aligned with the actual system requirement.
            </p>
          </article>
        </div>
        <div className="actions">
          <Link className="button" href="/thoughts">
            Read My Thoughts
          </Link>
        </div>
      </Section>

      <CTA
        title="Building a high-trust backend or AI-enabled product?"
        text="I am interested in problems that require strong backend fundamentals, practical product judgment and engineering that holds up in production."
        href="/work-with-me"
        label="Start a Conversation"
      />
    </div>
  )
}
