import { Section } from '@/components/section'

export default function SafeTokenCaseStudyPage() {
  return (
    <div className="container page">
      <Section
        title="SafeToken / 3DS Upgrade"
        intro="A high-volume authentication system operating in a security-sensitive payment environment."
      >
        <div className="stack">
          <div>
            <h3>Problem</h3>
            <p>
              The platform needed stronger standards alignment, better
              resilience across authentication flows, and clearer visibility
              into production failure points.
            </p>
          </div>

          <div>
            <h3>Constraints</h3>
            <ul className="list">
              <li>Security-critical domain</li>
              <li>Live transaction pressure</li>
              <li>External gateway integration</li>
              <li>Need for reliable failure tracing</li>
            </ul>
          </div>

          <div>
            <h3>Approach</h3>
            <ul className="list">
              <li>Improved backend flows around authentication and validation paths</li>
              <li>Focused on structured logging and stronger operational visibility</li>
              <li>Worked through failure patterns affecting transaction reliability and diagnosis</li>
            </ul>
          </div>

          <div>
            <h3>Outcome</h3>
            <ul className="list">
              <li>Improved production visibility</li>
              <li>Stronger standards alignment</li>
              <li>Better isolation and resolution of failure conditions</li>
            </ul>
          </div>

          <div>
            <h3>What I learned</h3>
            <p>
              In payment systems, reliability is not only about uptime. It is
              also about traceability, confidence, and the speed at which
              failures can be understood.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
