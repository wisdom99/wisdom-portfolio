export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Wisdom Ifeanyi. Built for clarity, reliability, and scale.</p>
        <p>
          Contact:{' '}
          <a href="mailto:ifeanyiwisdom388@gmail.com">ifeanyiwisdom388@gmail.com</a>
          {' | '}
          <a href="https://www.linkedin.com/in/wisdom-i-9a840a166/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}
