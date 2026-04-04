import Link from 'next/link'

type CaseStudyCardProps = {
  title: string
  description: string
  href: string
}

export function CaseStudyCard({ title, description, href }: CaseStudyCardProps) {
  const isExternal = href.startsWith('http')
  return (
    <article className="card">
      <Link
        className="card-link"
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </article>
  )
}
