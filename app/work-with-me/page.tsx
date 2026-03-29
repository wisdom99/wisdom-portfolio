import { Section } from '@/components/section'

export default function WorkWithMePage() {
  return (
    <div className="container page">
      <Section
        title="Work With Me"
        intro="I work with teams building systems where backend quality matters — especially around reliability, scale, operational clarity, and delivery under constraints."
      >
        <div className="grid two">
          <div className="card">
            <h3>What I help with</h3>
            <ul className="list">
              <li>Backend architecture review</li>
              <li>Reliability and failure-mode assessment</li>
              <li>Performance and throughput improvement</li>
              <li>System design for queue-driven workflows</li>
              <li>Technical advisory for product teams building critical services</li>
            </ul>
          </div>
          <div className="card">
            <h3>Best fit</h3>
            <ul className="list">
              <li>Payment flows</li>
              <li>Internal platforms</li>
              <li>Infrastructure-heavy products</li>
              <li>Security-sensitive systems</li>
              <li>High-throughput services</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h3>Not a fit</h3>
          <p>
            Low-complexity brochure apps, rushed builds with no quality
            baseline, and projects with no appetite for engineering
            discipline.
          </p>
        </div>

        <div className="card">
          <h3>Contact</h3>
          <p>
            If you're working on a system that needs to hold up in
            production, reach out at{' '}
            <a href="mailto:ifeanyiwisdom388@gmail.com">
              ifeanyiwisdom388@gmail.com
            </a>
            .
          </p>
        </div>
      </Section>
    </div>
  )
}
