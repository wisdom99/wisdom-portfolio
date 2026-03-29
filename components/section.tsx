type SectionProps = {
  title: string
  intro?: string
  children?: React.ReactNode
}

export function Section({ title, intro, children }: SectionProps) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
      {children}
    </section>
  )
}
