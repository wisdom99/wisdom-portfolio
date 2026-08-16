import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Background, principles, and focus areas for software/product engineer Wisdom Ifeanyi.',
  path: '/about'
})

export default function AboutPage() {
  return (
    <div className="container page">
      <Section
        headingLevel="h1"
        title="I work where customer reality meets backend systems."
        intro="My background is in customer-facing backend engineering across payments, authentication, and distributed systems. I help turn integration problems and operational constraints into production-ready technical solutions."
      >
        <p>
          I have supported banks, fintechs, card issuers, and payment gateways
          integrating with security-sensitive authentication platforms. The work
          requires understanding what a partner is experiencing, tracing that
          problem across several systems, and coordinating the right people to
          reach a reliable resolution.
        </p>
        <p>
          My role sits across integration support, product judgment, and backend
          delivery. I investigate failures, communicate technical findings and
          progress, align proposed changes with product owners and engineering
          stakeholders, and implement improvements when the underlying system
          needs to change.
        </p>
        <p>
          I am especially drawn to high-value, ambiguous problems: payment flows,
          authentication layers, partner integrations, queue-heavy workflows, and
          infrastructure where failures quickly become customer problems.
        </p>
        <div className="grid two">
          <div className="card">
            <h3>Principles</h3>
            <ul className="list">
              <li>Design for failure, not just function</li>
              <li>Own the outcome, not just the ticket</li>
              <li>Prefer observability over guesswork</li>
              <li>Communicate clearly across technical boundaries</li>
            </ul>
          </div>
          <div className="card">
            <h3>Focus Areas</h3>
            <ul className="list">
              <li>Backend systems</li>
              <li>Payments and authentication</li>
              <li>Technical integrations and partner delivery</li>
              <li>Distributed workflows and reliability</li>
              <li>AI-assisted and agentic engineering workflows</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
