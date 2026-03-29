import Link from 'next/link'
import { Section } from '@/components/section'
import { CTA } from '@/components/cta'
import { CaseStudyCard } from '@/components/case-study-card'

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <p className="eyebrow">Backend Systems • Reliability • Scale</p>
        <h1>I build systems that cannot afford to fail.</h1>
        <p className="lead">
          I design and improve backend platforms across payments, authentication,
          and high-throughput workflows — with a focus on reliability,
          observability, and real-world failure.
        </p>

        <div className="actions">
          <Link className="button primary" href="/case-studies">
            View Case Studies
          </Link>
          <Link className="button" href="/work-with-me">
            Work With Me
          </Link>
        </div>
      </section>

      <Section
        title="The work behind stable systems"
        intro="I work on systems where small failures become expensive quickly. My focus is not just shipping features. It is making sure systems behave well when traffic spikes, dependencies slow down, and assumptions break."
      />

      <Section
        title="Selected work"
        intro="A few examples of systems, constraints, and outcomes from my work."
      >
        <div className="grid">
          <CaseStudyCard
            title="SafeToken / 3DS Upgrade"
            description="Worked on a security-critical authentication platform, improving resilience, standards alignment, and production visibility."
            href="/case-studies/safetoken-3ds"
          />
          <CaseStudyCard
            title="Bulk Paycode"
            description="Improved throughput and system behavior under load using Kafka and batch processing patterns."
            href="/case-studies"
          />
          <CaseStudyCard
            title="LLM Failure Analysis"
            description="Studied reasoning failure patterns in AI systems, with emphasis on robustness and systematic error propagation."
            href="/case-studies"
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
        title="How I think"
        intro="Most outages are visible in hindsight. The real work is designing systems so they are visible in time."
      >
        <ul className="list">
          <li>I care about failure modes, not just happy paths.</li>
          <li>I treat observability as part of architecture, not an afterthought.</li>
          <li>I optimize for real-world system behavior, not demo conditions.</li>
        </ul>
      </Section>

      <CTA
        title="Building something where reliability matters?"
        text="I work with teams that need strong backend thinking, careful system design, and delivery that holds up in production."
        href="/work-with-me"
        label="Start a Conversation"
      />
    </div>
  )
}
