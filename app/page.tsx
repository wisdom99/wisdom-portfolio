import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/section'
import { CTA } from '@/components/cta'
import { CaseStudyCard } from '@/components/case-study-card'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = createPageMetadata({
  title: 'Forward-Deployed Backend Engineer',
  description:
    'Customer-facing backend engineering across payments, authentication, technical integrations, and high-throughput systems by Wisdom Ifeanyi.',
  path: '/'
})

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <p className="eyebrow">Forward-Deployed Engineering • Payments • Reliability</p>
        <h1>I turn complex customer problems into production systems.</h1>
        <p className="lead">
          I work with banks, fintechs, card issuers, payment gateways, and internal
          teams to solve integration and operational problems across payment,
          authentication, and high-throughput backend platforms.
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
            title="SafeToken Project"
            description="Interswitch authentication service for issuing, delivering, and validating OTPs across payment and identity-verification flows."
            href="/case-studies/safetoken-3ds"
          />
          <CaseStudyCard
            title="Bulk Token Enrollment"
            description="Resolved stuck uploads and redesigned the workflow to process 10,000 token records in under one minute."
            href="/case-studies/bulk-paycode"
          />
          <CaseStudyCard
            title="LLM Failure Analysis"
            description="Studied reasoning failure patterns in AI systems, with emphasis on robustness and systematic error propagation."
            href="/case-studies/llm-failure-analysis"
          />
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
            { label: 'AI & ML', items: ['LLM Evaluation', 'Prompt Engineering', 'Vector Databases'] },
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
            <h3>People are not watching as closely as we think</h3>
            <p>
              A lot of self-consciousness fades once you realize most people
              are busy solving their own problems and protecting their own
              image.
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
