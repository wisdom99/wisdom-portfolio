import { EngineeringCaseStudy } from '@/components/engineering-case-study'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Verve Payment Service',
  description: 'Gateway-to-card-processing integration with Postilion FS message translation, retry and idempotency design.',
  path: '/case-studies/verve-payments'
})

export default function Page() {
  return <EngineeringCaseStudy study={{
    title: 'Verve Payment Service',
    intro: 'Connecting payment gateway requests to Verve card processing while protecting transaction integrity.',
    role: 'I led and architected the service development, from the integration contract through failure behavior.',
    problem: 'Gateway-facing payment requests and the downstream card-processing interface use different message models. Translating them safely requires attention to retries and duplicate requests.',
    approach: [
      'Mapped incoming payment requests into the Postilion FS message format used in card processing.',
      'Defined service boundaries around request translation and downstream integration.',
      'Worked across gateway and processing concerns to make transaction behavior understandable to integrating teams.'
    ],
    reliability: [
      'Designed retry behavior for transient failures without treating every replay as a new transaction.',
      'Applied idempotency principles to protect against duplicate financial effects.',
      'Used traceable request context to support investigation and recovery.'
    ],
    outcome: 'The service provides a dedicated integration path between gateway requests and Verve card processing. Production volumes and business impact are not stated publicly.',
    technology: 'Java, Spring Boot, REST APIs, Postilion FS messaging, retry and idempotency design.'
  }} />
}
