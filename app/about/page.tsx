import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Background, engineering principles and focus areas for senior backend engineer Wisdom Ifeanyi.',
  path: '/about'
})

export default function AboutPage() {
  return (
    <div className="container page">
      <Section
        headingLevel="h1"
        title="I build where reliability, product judgment and backend systems meet."
        intro="My background is in high-trust backend engineering across payments, authentication and distributed systems. I am increasingly applying the same production mindset to AI-enabled products and agentic engineering workflows."
      >
        <p>
          I build and operate systems where correctness, security and failure
          recovery matter. My work spans payment infrastructure, transaction
          authentication, partner integrations, asynchronous workflows and
          production incident response.
        </p>
        <p>
          I am comfortable working from incomplete requirements. I investigate
          the problem, make the architectural trade-offs visible, align the
          people involved and carry the implementation through verification and
          production support.
        </p>
        <p>
          My current AI work focuses on model evaluation, agentic software
          delivery and the engineering questions that appear when a useful
          experiment needs to become a dependable product. I am particularly
          interested in observability, evaluation quality, failure modes,
          security and clear human accountability around automated systems.
        </p>
        <div className="grid two">
          <div className="card">
            <h3>Engineering principles</h3>
            <ul className="list">
              <li>Design for failure, not just function</li>
              <li>Own the outcome, not just the implementation</li>
              <li>Prefer evidence and observability over guesswork</li>
              <li>Keep experimental decisions separate from long-term architecture</li>
              <li>Use AI to accelerate work without outsourcing engineering judgment</li>
            </ul>
          </div>
          <div className="card">
            <h3>Focus areas</h3>
            <ul className="list">
              <li>Backend and distributed systems</li>
              <li>Payments, authentication and high-trust infrastructure</li>
              <li>System reliability and production operations</li>
              <li>LLM evaluation and AI workflow engineering</li>
              <li>Agentic software delivery</li>
              <li>Zero-to-one technical product development</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
