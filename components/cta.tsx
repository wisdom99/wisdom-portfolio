import Link from 'next/link'

type CTAProps = {
  title: string
  text: string
  href: string
  label: string
}

export function CTA({ title, text, href, label }: CTAProps) {
  return (
    <section className="cta">
      <h2>{title}</h2>
      <p className="section-intro">{text}</p>
      <Link className="button primary" href={href}>
        {label}
      </Link>
    </section>
  )
}
