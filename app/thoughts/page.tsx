import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/section'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Thoughts',
  description:
    'Writing on growth, responsibility, engineering judgment, and the mindset behind reliable systems.',
  path: '/thoughts'
})

const thoughts = [
  {
    id: 'figuring-life-out',
    title: 'Figuring Life Out',
    summary:
      'A lot changes when you stop feeling like the junior person in the room and start realizing outcomes have your name attached to them.',
    body: [
      'That shift shows up in simple moments. A deployment is running and you stay awake because if something breaks, you cannot pretend it belongs to someone else. You start seeing responsibility not as status, but as presence.',
      'A lot of growing up feels like crossing invisible lines. One day you are waiting for direction. Another day you are expected to make calls, own tradeoffs, and carry things without applause.'
    ]
  },
  {
    id: 'people-are-not-watching',
    title: 'People are not thinking about you as much as you think',
    summary:
      'A surprising amount of anxiety comes from imaginary audiences that do not exist in real life.',
    body: [
      'Most people are busy trying to validate their own ideas, protect their own image, and solve their own problems. They are rarely studying your every move the way your mind suggests.',
      'That is why perception can be so misleading. You may feel exposed while someone else has already invented a completely different story about your life. The gap between what we fear and what other people notice is often huge.'
    ]
  },
  {
    id: 'say-it-and-adjust',
    title: 'Speak, then adjust',
    summary:
      'A lot of confidence is built by discovering that saying the necessary thing does not usually destroy the relationship.',
    body: [
      'Silence often looks safer than honesty, especially when you are still learning your place. But in work and in life, useful growth often comes from speaking clearly, taking the small risk, and correcting course if needed.',
      'Over time, what people tend to remember is simpler than we expect: competence, reliability, kindness, and whether you showed up when something important was happening.'
    ]
  }
]

export default function ThoughtsPage() {
  return (
    <div className="container page">
      <Section
        title="Thoughts"
        intro="A running collection of thoughts on responsibility, growth, engineering, and the mental shifts that happen when life stops feeling theoretical."
      >
        <div className="thoughts-list">
          {thoughts.map((thought) => (
            <article key={thought.id} id={thought.id} className="card thought-entry">
              <p className="thought-kicker">Note</p>
              <h3>{thought.title}</h3>
              <p className="thought-summary">{thought.summary}</p>
              {thought.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <div className="card thought-cta">
          <h3>Want the longer version?</h3>
          <p>
            This section can keep growing into short essays, field notes, and
            reflections that connect life, judgment, and the way I build
            software.
          </p>
          <Link className="button primary" href="/work-with-me">
            Start a Conversation
          </Link>
        </div>
      </Section>
    </div>
  )
}
