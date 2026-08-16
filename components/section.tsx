type SectionProps = {
  title: string
  intro?: string
  children?: React.ReactNode
  headingLevel?: 'h1' | 'h2'
}

export function Section({
  title,
  intro,
  children,
  headingLevel = 'h2'
}: SectionProps) {
  const Heading = headingLevel

  return (
    <section className="section">
      <Heading>{title}</Heading>
      {intro ? <p className="section-intro">{intro}</p> : null}
      {children}
    </section>
  )
}
