import Link from 'next/link'

type CaseStudyCardProps = {
  title: string
  description: string
  href: string
}

export function CaseStudyCard({ title, description, href }: CaseStudyCardProps) {
  return (
    <article className="card">
      <Link className="card-link" href={href}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </article>
  )
}
