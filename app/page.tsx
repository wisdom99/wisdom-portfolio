import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/section'
import { CTA } from '@/components/cta'
import { CaseStudyCard } from '@/components/case-study-card'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site'
import { PortfolioTerminal } from '@/components/portfolio-terminal'

export const metadata: Metadata = createPageMetadata({
  title: 'Senior Software Engineer | Payments and Distributed Systems',
  description:
    'Wisdom Ifeanyi builds Java services for digital payments, transaction authentication, credit disbursement and reliable distributed systems.',
  path: '/'
})

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <p className="eyebrow">Senior Software Engineer • Java • Digital Payments</p>
        <h1>Payment systems built for the real world.</h1>
        <p className="lead">
          I&apos;m Wisdom Ifeanyi. I build Java services for card payments,
          transaction authentication and credit disbursement, with a focus on
          transaction integrity, security and failure recovery.
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
            <span className="proof-label">Customer proximity</span>
            <strong>Banks, fintechs, and gateways</strong>
            <p>Direct technical integration support across critical payment flows.</p>
          </article>
          <article className="proof-card">
            <span className="proof-label">Measured outcome</span>
            <strong>10,000 records in under 60 seconds</strong>
            <p>A redesigned Kafka-based bulk token-enrolment workflow.</p>
          </article>
          <article className="proof-card">
            <span className="proof-label">Ownership</span>
            <strong>Problem through implementation</strong>
            <p>Investigation, architecture, stakeholder alignment, and delivery.</p>
          </article>
          <article className="proof-card">
            <span className="proof-label">Engineering focus</span>
            <strong>Reliable systems under pressure</strong>
            <p>Architecture shaped by customer impact and production constraints.</p>
          </article>
        </div>
      </section>

      <Section
        title="From customer problem to production outcome"
        intro="My work combines customer-facing technical discovery, backend engineering, and delivery. I translate integration and operational problems into technical decisions, align the people involved, and implement systems that hold up under real production pressure."
      />

      <Section
        title="Selected work"
        intro="A few examples of systems, constraints, and outcomes from my work."
      >
        <div className="grid">
          <CaseStudyCard
            title="SafeToken"
            description="Leading multi-tenant transaction authentication, OTP provider integration and issuer-facing improvements."
            href="/case-studies/safetoken-3ds"
          />
          <CaseStudyCard
            title="Verve Payment Service"
            description="Gateway to card-processing translation, with retries and idempotency for transaction integrity."
            href="/case-studies/verve-payments"
          />
          <CaseStudyCard
            title="Verve Push & Bulk Disbursement"
            description="Distributed card-credit orchestration and an approval-driven Kafka execution workflow."
            href="/case-studies/verve-push"
          />
        </div>
      </Section>

      <Section
        title="Agentic engineering workflow"
        intro="I use coding agents to shorten feedback loops across discovery, implementation, testing, review, and documentation. The agent accelerates the work; I remain accountable for the technical decisions and production outcome."
      >
        <div className="grid agent-workflow">
          <article className="card workflow-step">
            <span className="workflow-number">01</span>
            <h3>Frame the outcome</h3>
            <p>Start with the user problem, success criteria, constraints, and risks.</p>
          </article>
          <article className="card workflow-step">
            <span className="workflow-number">02</span>
            <h3>Provide context</h3>
            <p>Ground the agent in the codebase, architecture, conventions, and operating environment.</p>
          </article>
          <article className="card workflow-step">
            <span className="workflow-number">03</span>
            <h3>Delegate focused work</h3>
            <p>Use bounded tasks for investigation, implementation, testing, and documentation.</p>
          </article>
          <article className="card workflow-step">
            <span className="workflow-number">04</span>
            <h3>Review the reasoning</h3>
            <p>Inspect assumptions, trade-offs, code changes, security, and failure behavior.</p>
          </article>
          <article className="card workflow-step">
            <span className="workflow-number">05</span>
            <h3>Verify independently</h3>
            <p>Run relevant checks and confirm the system behaves correctly before shipping.</p>
          </article>
        </div>
      </Section>

      <Section title="Tech stack">
        <div className="stack-groups">
          {[
            { label: 'Languages', items: ['Java', 'SQL'] },
            { label: 'Frameworks', items: ['Spring Boot', 'Spring', 'Spring MVC', 'Hibernate'] },
            { label: 'Messaging', items: ['Apache Kafka', 'RabbitMQ', 'gRPC', 'REST'] },
            { label: 'Databases', items: ['MySQL', 'MSSQL', 'MongoDB', 'PostgreSQL', 'Redis'] },
            { label: 'Cloud & Storage', items: ['AWS', 'Azure', 'AWS S3', 'AWS Redshift'] },
            { label: 'DevOps & CI/CD', items: ['Docker', 'Kubernetes', 'Jenkins', 'Bitbucket', 'Spinnaker'] },
            { label: 'Security', items: ['Spring Security', 'OAuth2', 'JWT', 'Encryption'] },
            { label: 'Big Data', items: ['Apache Spark', 'Apache Hadoop', 'Apache Hue', 'Airflow'] },
            {
              label: 'AI & Agentic',
              items: [
                'Codex',
                'AI-Assisted Development',
                'Agentic Workflows',
                'Context Engineering',
                'Prompt Engineering',
                'LLM Evaluation',
                'Vector Databases'
              ]
            },
            { label: 'Testing', items: ['JUnit', 'Postman', 'Swagger'] },
            { label: 'Architecture', items: ['Microservices', 'Event-Driven'] },
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
        title="Side projects"
        intro="Things I build outside of work."
      >
        <div className="grid">
          <CaseStudyCard
            title="Level Up 2026"
            description="15 core skills that separate the people who talk about growth from the ones who actually do it."
            href="/level-up-2026.html"
          />
        </div>
      </Section>

      <Section
        title="Thoughts"
        intro="A few ideas that shape how I think about growth, responsibility, and the pressure that comes with real work."
      >
        <div className="grid">
          <article className="card">
            <p className="thought-kicker">Thought 01</p>
            <h3>Figuring life out often looks like ownership</h3>
            <p>
              Sometimes the shift is simple: a deployment is running, and you
              stay awake because the outcome now belongs to you too.
            </p>
          </article>
          <article className="card">
            <p className="thought-kicker">Thought 02</p>
            <h3>AI assistance raises the bar for engineering judgment</h3>
            <p>
              Faster code generation makes context, verification, security, and
              ownership more important — not less.
            </p>
          </article>
          <article className="card">
            <p className="thought-kicker">Thought 03</p>
            <h3>Speaking up is usually less costly than silence</h3>
            <p>
              Growth often comes from saying the necessary thing, learning that
              the world does not end, and adjusting if needed.
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
        title="Have a complex customer or systems problem?"
        text="I work with teams that need customer-facing technical judgment, strong backend engineering, and delivery that holds up in production."
        href="/work-with-me"
        label="Start a Conversation"
      />
    </div>
  )
}
