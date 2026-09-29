import { EngineeringCaseStudy } from '@/components/engineering-case-study'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Verve Push Service',
  description: 'Distributed service orchestration for crediting Verve cardholders across remittances, refunds, P2P and disbursements.',
  path: '/case-studies/verve-push'
})

export default function Page() {
  return <EngineeringCaseStudy study={{
    title: 'Verve Push Service',
    intro: 'Crediting Verve cardholders across remittances, refunds, peer-to-peer transfers and disbursements.',
    role: 'I built the service and integrated the distributed operations needed to execute card credits.',
    problem: 'A credit request depends on more than a single payment call. The flow needs to resolve cardholder details and coordinate supporting services before a credit can complete.',
    approach: [
      'Orchestrated cash deposit, transaction lookup and name inquiry across service boundaries.',
      'Integrated alias-to-PAN mapping and generation so supported flows can use an alias in place of a card number.',
      'Kept the use cases consistent across remittance, refund, P2P and disbursement initiation.'
    ],
    reliability: [
      'Made cross-service failure handling and transaction tracing explicit in the orchestration design.',
      'Used correlation and structured logs to investigate requests across service boundaries.'
    ],
    outcome: 'A shared card-credit capability supports several payment use cases. The CV does not provide public throughput or availability metrics, so none are claimed here.',
    technology: 'Java, Spring Boot, REST APIs, distributed services, relational data and transaction tracing.'
  }} />
}
