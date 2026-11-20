export const siteConfig = {
  name: 'Wisdom Ifeanyi',
  title: 'Backend Engineering, Payments & Applied AI',
  description:
    'Senior backend engineering across payments, authentication and distributed systems, with a growing focus on LLM evaluation and agentic software engineering.',
  origin: 'https://wisdom99.github.io',
  siteUrl: 'https://wisdom99.github.io/wisdom-portfolio',
  email: 'ifeanyiwisdom388@gmail.com',
  github: 'https://github.com/wisdom99',
  linkedin: 'https://www.linkedin.com/in/wisdom-i-9a840a166/',
  resumeMailto:
    'mailto:ifeanyiwisdom388@gmail.com?subject=Resume%20request%20from%20portfolio'
} as const

export function absoluteUrl(path = '') {
  return siteConfig.siteUrl + path
}
