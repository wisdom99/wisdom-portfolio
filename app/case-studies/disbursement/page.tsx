import { EngineeringCaseStudy } from '@/components/engineering-case-study'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Bulk Credit Disbursement',
  description: 'Approval-driven bulk credit workflow with CSV validation, Kafka execution, retries and record-level reconciliation.',
  path: '/case-studies/disbursement'
})

export default function Page() {
  return <EngineeringCaseStudy study={{
    title: 'Bulk Credit Disbursement',
    intro: 'An approval-driven workflow that turns uploaded credit instructions into traceable record-level outcomes.',
    role: 'I designed the workflow for batch intake, maker-checker approval, validation and asynchronous credit execution.',
    problem: 'Bulk credits need separation of duties, input validation, controlled execution and a way to account for individual successes and failures.',
    approach: [
      'Modelled the maker-checker approval lifecycle before processing a batch.',
      'Validated CSV rows and persisted eligible records for execution.',
      'Published records through Kafka for downstream credit processing via Verve Push.',
      'Tracked batch and record status for operational review.'
    ],
    reliability: [
      'Designed retries for incomplete processing and reconciliation for record-level outcomes.',
      'Preserved an audit trail across approval, validation and execution stages.'
    ],
    outcome: 'The architecture supports auditable bulk credit execution. This describes designed and implemented workflow responsibilities without claiming an unverified production volume.',
    technology: 'Java, Spring Boot, SQL Server, Kafka, CSV processing, OAuth2/JWT and encryption.'
  }} />
}
