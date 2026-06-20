import { siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Wisdom Ifeanyi. Built for clarity, reliability, and scale.</p>
        <p>
          Contact:{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {' | '}
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {' | '}
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {' | '}
          <a href={siteConfig.resumeMailto}>Request Resume</a>
        </p>
      </div>
    </footer>
  )
}
