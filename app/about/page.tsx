import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Background, principles, and focus areas for backend engineer Wisdom Ifeanyi.',
  path: '/about'
})

export default function AboutPage() {
  return (
    <div className="container page">
      <Section
        title="I study how systems fail, then build against it."
        intro="My background is in backend engineering across payment, authentication, and distributed systems. Over time, that pushed me toward a deeper question: not just how systems work, but how they break under real conditions."
      >
        <p>
          That changed the way I build. I think in terms of operational
          pressure, bottlenecks, hidden coupling, recovery paths, and
          visibility.
        </p>
        <p>
          Today, my work sits at the intersection of software delivery,
          resilience, and technical judgment — building systems that are
          practical, stable, and ready for scale.
        </p>
        <p>
          I am especially drawn to systems with real consequences: payment
          flows, authentication layers, queue-heavy workflows, and the kind of
          infrastructure where ambiguity becomes expensive quickly.
        </p>
        <div className="grid two">
          <div className="card">
            <h3>Principles</h3>
            <ul className="list">
              <li>Design for failure, not just function</li>
              <li>Prefer observability over guesswork</li>
              <li>Treat scale as a systems problem</li>
              <li>Build with clarity, not noise</li>
            </ul>
          </div>
          <div className="card">
            <h3>Focus Areas</h3>
            <ul className="list">
              <li>Backend systems</li>
              <li>Payments and authentication</li>
              <li>Distributed workflows</li>
              <li>Reliability and failure analysis</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
