import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'The Agentic SDLC: From Writing Code to Guiding Software Delivery',
  description: 'A practical agentic software development life cycle: clear requirements, bounded tasks, independent verification, and accountable delivery.',
  path: '/thoughts/agentic-sdlc'
})

const sections = [
  {
    "title": "What makes the process agentic?",
    "paragraphs": [
      "A typical AI coding interaction starts with a prompt and ends with a suggestion. An agentic workflow can continue through several steps: Understand → Plan → Act → Check → Adjust.",
      "For example, an agent asked to fix a broken form might inspect the component, trace its validation logic, reproduce the issue, make a change, and run the relevant tests.",
      "Its ability to take these steps depends on the tools, permissions, and context it receives. Autonomy therefore needs a defined scope and a clear stopping point."
    ]
  },
  {
    "title": "A practical agentic SDLC process",
    "paragraphs": [
      "The familiar stages of software development still matter. What changes is how work moves between the developer and the agent."
    ]
  },
  {
    "title": "1. Define the problem and success criteria",
    "paragraphs": [
      "Start with the user’s need, the expected behavior, and the constraints.",
      "“Build a contact form” leaves too much open to interpretation. A stronger brief defines the fields, validation rules, submission behavior, accessibility requirements, and failure states.",
      "An agent can help surface missing requirements and draft acceptance criteria. A person still needs to decide whether those criteria describe the right product.",
      "Output: A focused brief with observable success conditions."
    ]
  },
  {
    "title": "2. Explore the system and plan the change",
    "paragraphs": [
      "Before implementation, the agent should examine the existing project: its structure, conventions, dependencies, and relevant documentation.",
      "It can then propose the files to change, the approach to take, and the checks needed to verify the result. This gives the developer a chance to catch unnecessary complexity or an incorrect assumption before it spreads through the implementation.",
      "For a small fix, the plan may be a few sentences. A change involving authentication or data storage deserves more scrutiny.",
      "Output: A scoped plan with assumptions and tradeoffs made visible."
    ]
  },
  {
    "title": "3. Implement in small, reviewable steps",
    "paragraphs": [
      "With a clear plan, the agent can edit code, update related documentation, and add meaningful tests.",
      "Small changes make the feedback loop easier to manage. If something fails, there are fewer possible causes. They also make human review more effective.",
      "The developer’s role is to guide decisions that require product context, architectural judgment, or an understanding of long-term maintenance.",
      "Output: A working change that can be inspected and explained."
    ]
  },
  {
    "title": "4. Validate behavior against the requirements",
    "paragraphs": [
      "A successful build is only one piece of evidence.",
      "Validation should match the change. A user interface may need keyboard checks and visual inspection. An API change may need integration tests and failure-case coverage. A data migration may need a recovery check.",
      "Agents can run checks and investigate failures, but their tests can repeat the same assumptions as their implementation. Review should return to the original acceptance criteria and independently consider missing cases.",
      "Output: Evidence showing what works, what was checked, and what remains uncertain."
    ]
  },
  {
    "title": "5. Review and release",
    "paragraphs": [
      "Before release, the developer should be able to explain whether the change solves the intended problem, fits the existing system, handles failure states, has sufficient validation evidence, and can be reversed if necessary.",
      "An agent can prepare a change summary, release notes, and deployment instructions. Release authority should be explicit, with approval requirements matched to the impact of the action.",
      "Output: A reviewed change with a clear release and recovery path."
    ]
  },
  {
    "title": "6. Observe and improve",
    "paragraphs": [
      "Delivery continues after deployment.",
      "Agents can help summarize logs, investigate reported issues, and suggest follow-up fixes. People assess whether those findings reflect a meaningful user problem and decide what should happen next.",
      "Useful lessons should feed back into project documentation, tests, and future task briefs.",
      "Output: Better software and better instructions for the next development cycle."
    ]
  },
  {
    "title": "Example: A portfolio contact form",
    "paragraphs": [
      "Consider a hypothetical task: adding a contact form to a portfolio website.",
      "The developer defines the desired experience: visitors can submit a name, email address, and message; invalid inputs receive clear feedback; failed submissions preserve the message so it can be retried.",
      "The agent inspects the site, identifies existing components, proposes an implementation, and builds the form. It then checks validation, successful submissions, and failure behavior.",
      "The developer reviews the visual design, accessibility, and handling of visitor information before approving release. After deployment, submission failures and visitor feedback inform the next improvement.",
      "This illustrates the collaboration: the agent handles a sequence of implementation steps, while the developer remains accountable for the experience and the release."
    ]
  }
]

export default function AgenticSDLCPage() {
  return (
    <article className="container page blog-article">
      <div className="blog-header">
        <p className="eyebrow">Engineering notes • Agentic development • Software delivery</p>
        <h1>The Agentic SDLC: From Writing Code to Guiding Software Delivery</h1>
        <p className="lead">AI agents are expanding what developers can delegate. Beyond suggesting code, they can inspect a repository, plan a change, edit files, run tests, and revise their work based on the results.</p>
        <p className="blog-meta">Wisdom Ifeanyi · <time dateTime="2026-11-02">2 November 2026</time></p>
        <div className="actions"><Link className="button" href="/thoughts">All thoughts</Link></div>
      </div>
      <div className="blog-body">
        <section className="section">
          <p>This creates a different way to approach the <strong>software development life cycle (SDLC)</strong>. People define the outcome and engineering boundaries; agents carry out scoped work and return evidence for review.</p>
          <p>I see the agentic SDLC as a shift in where developers spend their attention: defining problems clearly, making architectural decisions, and verifying that the software delivers what users need.</p>
          <div className="blog-callout"><strong>Faster implementation is useful when it leads to software we can understand, maintain, and trust.</strong></div>
        </section>
        {sections.map(({ title, paragraphs }) => (
          <section className="section" key={title}>
            <h2>{title}</h2>
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <section className="section">
          <h2>What I would measure</h2>
          <p>Code volume is a weak measure of success. I would evaluate an agentic workflow using:</p>
          <ul className="list blog-checklist">
            <li><strong>Delivery time:</strong> How long does an approved task take to reach a verified result?</li>
            <li><strong>Review effort:</strong> How much correction does the generated work require?</li>
            <li><strong>Reliability:</strong> How often do released changes introduce defects?</li>
            <li><strong>Maintainability:</strong> Can another developer understand and extend the result?</li>
            <li><strong>User outcomes:</strong> Does the change make the product more useful?</li>
          </ul>
          <p>These measures help reveal whether automation improves delivery or simply moves effort from implementation into review.</p>
          <p>The engineering practice I want to build around agentic development is straightforward: clear requirements, bounded tasks, visible evidence, and accountable decisions. As agents take on more implementation work, those habits become even more valuable.</p>
        </section>
        <section className="section blog-source">
          <h2>Further reading</h2>
          <p>OpenAI’s account of its own agent-driven engineering work highlights clear instructions, accessible repository knowledge, and feedback loops that help agents produce reliable changes. <a href="https://openai.com/index/harness-engineering/">Read the engineering account</a>.</p>
          <p>For the security side of the workflow, read <Link href="/thoughts/secure-coding-with-ai">Secure coding with AI: where the trust boundaries move</Link>.</p>
        </section>
      </div>
    </article>
  )
}
