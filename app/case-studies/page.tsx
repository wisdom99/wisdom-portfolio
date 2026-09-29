import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { CaseStudyCard } from '@/components/case-study-card'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Case Studies',
  description:
    'Customer-facing backend engineering case studies covering payment authentication, partner integrations, throughput, and reliability.',
  path: '/case-studies'
})

export default function CaseStudiesPage() {
  return (
    <div className="container page">
      <Section
        headingLevel="h1"
        title="Case Studies"
        intro="Selected architecture and delivery work across card payments, transaction authentication and distributed credit workflows."
      >
        <div className="grid">
          <CaseStudyCard
            title="SafeToken"
            description="Leading multi-tenant transaction authentication, 3D Secure improvements and issuer integrations."
            href="/case-studies/safetoken-3ds"
          />
          <CaseStudyCard title="Verve Payment Service" description="Translating gateway requests into Postilion FS messages with retry and idempotency handling." href="/case-studies/verve-payments" />
          <CaseStudyCard title="Verve Push Service" description="Orchestrating card credits across remittance, refund, P2P and disbursement use cases." href="/case-studies/verve-push" />
          <CaseStudyCard title="Bulk Credit Disbursement" description="Maker-checker approval, CSV validation, Kafka execution and reconciliation." href="/case-studies/disbursement" />
          <CaseStudyCard
            title="Bulk Token Enrollment"
            description="A Kafka-based redesign that resolved stuck uploads and processed 10,000 token records in under one minute."
            href="/case-studies/bulk-paycode"
          />
          <CaseStudyCard
            title="LLM Failure Analysis"
            description="A study of systematic reasoning failures and robustness gaps in AI systems."
            href="/case-studies/llm-failure-analysis"
          />
        </div>
      </Section>
    </div>
  )
}
