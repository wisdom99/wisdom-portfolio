import Link from 'next/link'

type CaseStudy = {
  title: string
  intro: string
  role: string
  problem: string
  approach: string[]
  reliability: string[]
  outcome: string
  technology: string
}

export function EngineeringCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <article className="container page blog-body">
      <Link className="text-link" href="/case-studies">← All case studies</Link>
      <header className="blog-header">
        <p className="eyebrow">Engineering case study · Interswitch Group</p>
        <h1>{study.title}</h1>
        <p className="lead">{study.intro}</p>
      </header>
      <section className="section"><h2>My role</h2><p>{study.role}</p></section>
      <section className="section"><h2>The problem</h2><p>{study.problem}</p></section>
      <section className="section"><h2>Engineering approach</h2><ul className="list">{study.approach.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className="section"><h2>Integrity and recovery</h2><ul className="list">{study.reliability.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className="section"><h2>Result and scope</h2><p>{study.outcome}</p></section>
      <section className="section"><h2>Technologies</h2><p>{study.technology}</p></section>
      <p className="blog-callout">This account describes architectural responsibilities at a public level. Internal implementation details and production data are omitted.</p>
    </article>
  )
}
