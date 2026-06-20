import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Bulk Paycode',
  description:
    'Case study on improving throughput and resilience in a transaction-heavy payout workflow using Kafka and batch processing patterns.',
  path: '/case-studies/bulk-paycode'
})

export default function BulkPaycodeCaseStudyPage() {
  return (
    <div className="container page">
      <Section
        title="Bulk Paycode"
        intro="Improving throughput and resilience in a transaction-heavy workflow using Kafka and batch processing patterns."
      >
        <div className="stack">
          <div>
            <h3>Problem</h3>
            <p>
              The workflow had to handle large payout batches without turning
              traffic spikes into processing instability, operational confusion,
              or long recovery cycles.
            </p>
          </div>

          <div>
            <h3>Constraints</h3>
            <ul className="list">
              <li>High-volume transaction creation windows</li>
              <li>Queue backpressure risk during burst periods</li>
              <li>Need for predictable batch behavior and recovery</li>
              <li>Operational visibility across asynchronous steps</li>
            </ul>
          </div>

          <div>
            <h3>Approach</h3>
            <ul className="list">
              <li>Used Kafka-driven processing to decouple intake from execution pressure</li>
              <li>Improved batch flow design around retries, sequencing, and failure handling</li>
              <li>Focused on visibility into where jobs slowed, stalled, or retried excessively</li>
            </ul>
          </div>

          <div>
            <h3>Outcome</h3>
            <ul className="list">
              <li>Better throughput behavior under bursty load</li>
              <li>Cleaner isolation of failed work from healthy batches</li>
              <li>More predictable recovery and operational debugging</li>
            </ul>
          </div>

          <div>
            <h3>What I learned</h3>
            <p>
              Throughput problems are rarely solved by speed alone. They are
              usually solved by designing the workflow so pressure is absorbed
              gracefully and failure does not spread across the whole system.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
