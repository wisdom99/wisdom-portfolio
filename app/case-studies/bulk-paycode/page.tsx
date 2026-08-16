import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Bulk Token Enrollment',
  description:
    'How a Kafka-based processing redesign resolved stuck bulk token uploads and processed 10,000 records in under one minute.',
  path: '/case-studies/bulk-paycode'
})

export default function BulkPaycodeCaseStudyPage() {
  return (
    <div className="container page">
      <Section
        headingLevel="h1"
        title="Scaling Bulk Token Enrollment"
        intro="Resolving stuck card-token uploads and redesigning the workflow to process 10,000 records in under one minute."
      >
        <div className="stack">
          <div className="outcome-highlight">
            <strong className="outcome-value">10,000</strong>
            <span className="outcome-label">token records per upload processed in under 60 seconds</span>
          </div>

          <div>
            <h2>Customer context</h2>
            <p>
              Banks and card-issuing partners used bulk file uploads to enrol
              large volumes of card tokens on the SafeToken authentication
              platform.
            </p>
          </div>

          <div>
            <h2>The problem</h2>
            <p>
              Under heavier workloads, some uploaded files became stuck during
              processing. This delayed token enrolment, made completion difficult
              to predict, and limited the progress information available to
              product owners and customers.
            </p>
          </div>

          <div>
            <h2>My role</h2>
            <p>
              I investigated the processing bottleneck, redesigned the bulk-upload
              architecture, aligned the proposed solution with technical teams and
              product owners, and implemented the improvements.
            </p>
            <p>
              Product owners managed customer communication while I provided
              technical findings, implementation updates, risks, and progress
              reports throughout the work.
            </p>
          </div>

          <div>
            <h2>Technical redesign</h2>
            <ul className="list">
              <li>Divided large uploaded files into smaller processing batches</li>
              <li>Published batches through Kafka to decouple file intake from execution</li>
              <li>Introduced controlled parallelism so independent batches could run concurrently</li>
              <li>Isolated failed work so a single batch could not block an entire file</li>
              <li>Improved progress tracking, retry behavior, and operational visibility</li>
            </ul>
          </div>

          <div>
            <h2>Outcome</h2>
            <ul className="list">
              <li>Resolved the stuck-file processing problem</li>
              <li>Processed 10,000 token records per upload in under one minute</li>
              <li>Created a more scalable and resilient enrolment workflow</li>
              <li>Provided clearer progress information for technical teams, product owners, and customers</li>
            </ul>
          </div>

          <div>
            <h2>What this demonstrates</h2>
            <p>
              The work combined customer-impact investigation, distributed-system
              design, stakeholder alignment, implementation ownership, and
              progress management. It solved the immediate customer problem while
              addressing the architectural limitation that caused it.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
