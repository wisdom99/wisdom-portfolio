import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'LLM Failure Analysis',
  description:
    'Case study on studying reasoning failures in AI systems with emphasis on robustness, error patterns, and evaluation quality.',
  path: '/case-studies/llm-failure-analysis'
})

export default function LlmFailureAnalysisCaseStudyPage() {
  return (
    <div className="container page">
      <Section
        title="LLM Failure Analysis"
        intro="A study of systematic reasoning failures and robustness gaps in AI systems."
      >
        <div className="stack">
          <div>
            <h3>Problem</h3>
            <p>
              Model outputs can look convincing while hiding brittle reasoning,
              shallow pattern matching, or compounding errors that only appear
              under close evaluation.
            </p>
          </div>

          <div>
            <h3>Constraints</h3>
            <ul className="list">
              <li>Failure modes are often subtle rather than obvious</li>
              <li>Good surface fluency can hide poor internal reasoning quality</li>
              <li>Evaluation needs structure, not just intuition</li>
              <li>Patterns must be useful enough to inform future system design</li>
            </ul>
          </div>

          <div>
            <h3>Approach</h3>
            <ul className="list">
              <li>Reviewed outputs for recurring reasoning and robustness patterns</li>
              <li>Focused on how errors propagated across multi-step responses</li>
              <li>Used failure analysis to separate persuasive language from reliable thinking</li>
            </ul>
          </div>

          <div>
            <h3>Outcome</h3>
            <ul className="list">
              <li>Clearer taxonomy of recurring model failure modes</li>
              <li>Better instincts for evaluation design and prompt robustness</li>
              <li>Stronger understanding of where AI systems appear stable but are not</li>
            </ul>
          </div>

          <div>
            <h3>What I learned</h3>
            <p>
              AI reliability is not just about whether a response is plausible.
              It is about whether the reasoning process stays coherent when the
              task becomes messy, multi-step, or resistant to shortcuts.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
