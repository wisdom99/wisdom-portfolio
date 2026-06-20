export const siteConfig = {
  name: 'Wisdom Ifeanyi',
  title: 'Backend systems, reliability, and software delivery',
  description:
    'Backend systems, reliability, scale, and software delivery across payments, authentication, and high-throughput workflows.',
  origin: 'https://wisdom99.github.io',
  siteUrl: 'https://wisdom99.github.io/wisdom-portfolio',
  email: 'ifeanyiwisdom388@gmail.com',
  github: 'https://github.com/wisdom99',
  linkedin: 'https://www.linkedin.com/in/wisdom-i-9a840a166/',
  resumeMailto:
    'mailto:ifeanyiwisdom388@gmail.com?subject=Resume%20request%20from%20portfolio'
} as const

export function absoluteUrl(path = '') {
  return `${siteConfig.siteUrl}${path}`
}
