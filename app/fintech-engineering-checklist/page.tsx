import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Fintech Engineering Checklist',
  description: 'A practical review checklist for money movement, access control, reliable integrations, configuration, and recovery.',
  path: '/fintech-engineering-checklist'
})

const groups = [
  {
    id: 'money',
    title: 'Money and accounting',
    why: 'Make amounts unambiguous and every movement explainable.',
    checks: [
      'Represent an amount together with its currency; reject cross-currency arithmetic without an explicit conversion.',
      'Use minor units or decimal arithmetic with documented precision. Never use binary floating point for money.',
      'Define rounding per fee, rate, currency, and boundary; account for any remainder when splitting amounts.',
      'Record balanced postings or another auditable source of truth. Do not treat a mutable balance alone as the history.',
      'Record value, booking, and settlement times separately where they differ.',
      'Correct posted movements through linked reversals or adjustments, with the reporting period preserved.'
    ]
  },
  {
    id: 'flow',
    title: 'Transaction execution',
    why: 'A retry, concurrent request, or process crash must not move value twice.',
    checks: [
      'Write down invariants such as total debits equal total credits, no duplicate credit, and no unauthorized release.',
      'Make the idempotency key stable, scoped to the operation and caller, and enforced atomically under concurrency.',
      'Persist each workflow state and external reference so a new worker can resume after a crash.',
      'Make every step safe to replay; distinguish a confirmed failure from an unknown downstream outcome.',
      'Use a reservation or equivalent consistent check before spending available funds; resolve stranded reservations.',
      'Define forward recovery and compensation for each external side effect.'
    ]
  },
  {
    id: 'security',
    title: 'Security, roles, and permissions',
    why: 'Authority to initiate, approve, execute, and repair a payment must be explicit and reviewable.',
    checks: [
      'Define a permission matrix by action and resource: view, initiate, approve, execute, reverse, configure, and audit.',
      'Enforce authorization on the server for every endpoint, job, message consumer, and administrative operation.',
      'Separate requester and approver identities for sensitive changes; prevent self-approval and record both actors.',
      'Give service accounts and operators only the permissions they need. Review grants and revoke stale access.',
      'Protect privileged changes with strong authentication and an audited emergency access path.',
      'Keep immutable audit events for permission grants, approvals, configuration changes, and manual interventions.',
      'Classify and minimize sensitive data; redact logs and avoid storing credentials, PANs, or OTPs in diagnostic payloads.'
    ]
  },
  {
    id: 'integration',
    title: 'External systems and messaging',
    why: 'Network calls and provider signals can be delayed, duplicated, missing, or contradictory.',
    checks: [
      'Set connection and response timeouts, bounded retries, and backoff based on the operation’s safety.',
      'Validate critical provider response fields and preserve a correlation ID for investigation.',
      'Verify webhook signatures over raw bytes, store events durably, acknowledge promptly, and process idempotently.',
      'Assume callbacks can arrive out of order or never arrive; query authoritative status and reconcile independently.',
      'Commit business state and publication intent together with an outbox or equivalent durable mechanism.',
      'Deduplicate consumed events by a stable event ID; avoid claiming transport delivers exactly once.'
    ]
  },
  {
    id: 'configuration',
    title: 'Configuration and decoupling',
    why: 'Provider and policy changes should be controlled without tying business rules to one deployment or vendor.',
    checks: [
      'Keep provider endpoints, timeouts, routing, limits, fees, and feature flags outside hardcoded business logic.',
      'Validate typed configuration at startup or activation; fail closed for missing security controls.',
      'Store secrets in a dedicated secret manager and rotate them without exposing values in code, logs, or audit records.',
      'Version and audit policy changes with actor, reason, approval, effective time, and rollback path.',
      'Define precedence between defaults, environment settings, tenant policy, and per-request inputs; reject unsafe overrides.',
      'Wrap provider-specific schemas behind an adapter so business workflows use a stable internal contract.',
      'Roll out routing or policy changes gradually and monitor error rate, latency, and reconciliation breaks.'
    ]
  },
  {
    id: 'operations',
    title: 'Reliability, reconciliation, and proof',
    why: 'Detect gaps after deployment and give operators a safe way to recover.',
    checks: [
      'Reconcile internal records, processor results, and settlement files with stable references and timing windows.',
      'Queue discrepancies for investigation; fix them with explicit reprocessing or correction, never silent overwrites.',
      'Measure stuck workflows, retry age, outbox lag, duplicate attempts, provider errors, and unmatched records.',
      'Document ownership and runbooks for uncertain status, replay, rollback, and manual correction.',
      'Test concurrent duplicates, reordered callbacks, lost messages, and a crash between each workflow step.',
      'Test invariants after every generated operation and retain old payloads for compatibility checks.'
    ]
  }
] as const

export default function FintechEngineeringChecklistPage() {
  return (
    <div className="container page">
      <p className="eyebrow">Engineering reference • Payments • Security • Reliability</p>
      <h1>Fintech Engineering Checklist</h1>
      <p className="lead">
        A review guide for systems that authorize, move, or account for value. Use each item
        as a question: what enforces it, how is it tested, and what evidence remains when it fails?
      </p>
      <div className="actions">
        <a className="button primary" href="#checklist">Review the checklist</a>
        <Link className="button" href="/case-studies">See case studies</Link>
      </div>

      <section className="section" aria-labelledby="principles">
        <h2 id="principles">Three questions before release</h2>
        <div className="grid">
          <article className="card">
            <h3>Can value be created twice?</h3>
            <p>Trace duplicate requests, concurrent approvals, retries, and repeated events.</p>
          </article>
          <article className="card">
            <h3>Can a fact disappear?</h3>
            <p>Trace a crash, missed callback, failed publication, or stale configuration.</p>
          </article>
          <article className="card">
            <h3>Can the decision be explained?</h3>
            <p>Trace permissions, policy versions, provider evidence, and corrections.</p>
          </article>
        </div>
      </section>

      <div id="checklist">
        {groups.map((group) => (
          <section className="section" id={group.id} key={group.id}>
            <h2>{group.title}</h2>
            <p className="section-intro">{group.why}</p>
            <div className="card">
              <ul className="list">
                {group.checks.map((check) => <li key={check}>{check}</li>)}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="section">
        <h2>How I would use this on a disbursement flow</h2>
        <p>
          Start with the approval and credit state machine. Verify that the initiator cannot
          approve the same batch, that a record has a stable downstream reference, and that
          retrying after an unknown response cannot produce a second credit. Persist publication
          intent with the committed record, then reconcile processor outcomes against local
          records. Keep provider routing and retry policy versioned and auditable.
        </p>
        <p>
          This is a design review example, not a claim that every control is implemented in
          any particular production system.
        </p>
      </section>

      <section className="section">
        <h2>Further reading</h2>
        <p>
          Adapted into an actionable review guide from the{' '}
          <a href="https://w.pitula.me/fintech-engineering-handbook/" target="_blank" rel="noreferrer">
            Fintech Engineering Handbook by Voytek Pitula
          </a>.
          The security and configuration checks extend the themes of access control,
          segregation of duties, external integrations, and operational reliability.
        </p>
      </section>
    </div>
  )
}
