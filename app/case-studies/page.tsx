import { Section } from '@/components/section'
import { CaseStudyCard } from '@/components/case-study-card'

export default function CaseStudiesPage() {
  return (
    <div className="container page">
      <Section
        title="Case Studies"
        intro="A selection of systems, problems, and decisions from my work. The focus here is not just what was built, but what had to be solved under real constraints."
      >
        <div className="grid">
          <CaseStudyCard
            title="SafeToken / 3DS Upgrade"
            description="A high-volume authentication system operating in a security-sensitive payment environment."
            href="/case-studies/safetoken-3ds"
          />
          <CaseStudyCard
            title="Bulk Paycode"
            description="Improving throughput and resilience in a transaction-heavy workflow using Kafka and batch processing."
            href="/case-studies"
          />
          <CaseStudyCard
            title="LLM Failure Analysis"
            description="A study of systematic reasoning failures and robustness gaps in AI systems."
            href="/case-studies"
          />
        </div>
      </Section>
    </div>
  )
}
