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
        intro="Customer problems, technical decisions, stakeholder alignment, and production outcomes from payment, authentication, and distributed-system work."
      >
        <div className="grid">
          <CaseStudyCard
            title="SafeToken Project"
            description="Supporting banks, fintechs, card issuers, and gateways integrating token enrolment and OTP authentication flows."
            href="/case-studies/safetoken-3ds"
          />
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
