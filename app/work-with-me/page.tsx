import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = createPageMetadata({
  title: 'Work With Me',
  description:
    'Work with Wisdom Ifeanyi on backend architecture, payments, distributed systems, reliability and applied AI engineering.',
  path: '/work-with-me'
})

export default function WorkWithMePage() {
  return (
    <div className="container page">
      <Section
        headingLevel="h1"
        title="Work With Me"
        intro="I work best on systems where backend quality, product judgment and operational reliability matter — including payment infrastructure and AI-enabled products moving from experiment to production."
      >
        <div className="grid two">
          <div className="card">
            <h3>What I help with</h3>
            <ul className="list">
              <li>Backend architecture and API design</li>
              <li>Distributed workflow and reliability design</li>
              <li>Performance and throughput improvement</li>
              <li>Payments and high-trust system engineering</li>
              <li>AI-assisted engineering workflow design</li>
              <li>LLM evaluation and production-readiness thinking</li>
            </ul>
          </div>
          <div className="card">
            <h3>Best fit</h3>
            <ul className="list">
              <li>Payment and fintech products</li>
              <li>AI-enabled product teams</li>
              <li>Security-sensitive systems</li>
              <li>High-throughput backend services</li>
              <li>Queue and event-driven workflows</li>
              <li>Teams adopting agentic development practices</li>
            </ul>
          </div>
        </div>

        <div className="grid two">
          <div className="card">
            <h3>Ways to work together</h3>
            <ul className="list">
              <li>Senior backend engineering roles</li>
              <li>Zero-to-one product engineering</li>
              <li>Architecture and reliability review</li>
              <li>Technical advisory engagements</li>
            </ul>
          </div>
          <div className="card">
            <h3>Proof links</h3>
            <p>
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </p>
            <p>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                View LinkedIn
              </a>
            </p>
            <p>
              <a href={siteConfig.resumeMailto}>Request Resume</a>
            </p>
          </div>
        </div>

        <div className="card">
          <h3>Contact</h3>
          <p>
            If you&apos;re working on a system that needs to hold up in
            production, reach out at{' '}
            <a href={'mailto:' + siteConfig.email}>{siteConfig.email}</a>.
          </p>
        </div>
      </Section>
    </div>
  )
}
