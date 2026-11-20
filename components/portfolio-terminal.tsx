'use client'

import Link from 'next/link'
import { FormEvent, KeyboardEvent, useRef, useState } from 'react'

type Entry = { command: string; lines: string[]; href?: string; label?: string }

const commands: Record<string, Omit<Entry, 'command'>> = {
  help: {
    lines: [
      'Explore: about, projects, ai, skills, experience, contact',
      'Case studies: safetoken, bulk-token, verve-payments, llm-evaluation',
      'Engineering: agentic-sdlc, architecture',
      'Use ↑ and ↓ for command history. Type clear to reset.'
    ]
  },
  about: {
    lines: [
      'Wisdom Ifeanyi — Senior Backend Engineer.',
      'I build high-trust backend systems across payments, authentication and distributed workflows, with a growing focus on applied AI engineering.'
    ],
    href: '/about', label: 'Read more about me'
  },
  projects: {
    lines: [
      'SafeToken — multi-tenant transaction authentication and issuer integrations.',
      'Bulk Token Enrollment — Kafka redesign processing 10,000 records in under one minute.',
      'LLM Failure Analysis — structured evaluation of reasoning and robustness failures.',
      'Verve Payment Service — gateway to card processing with retry and idempotency.'
    ],
    href: '/case-studies', label: 'Browse all case studies'
  },
  ai: {
    lines: [
      'Current focus: LLM evaluation, agentic software delivery and production-readiness for AI-enabled workflows.',
      'I approach AI systems with the same concerns as production backend systems: evidence, observability, security, failure modes and accountability.'
    ],
    href: '/case-studies/llm-failure-analysis', label: 'View AI engineering work'
  },
  'llm-evaluation': {
    lines: [
      'Structured analysis of model reasoning failures, robustness gaps and evaluation quality.',
      'The goal is to distinguish persuasive outputs from behavior that remains reliable under harder conditions.'
    ],
    href: '/case-studies/llm-failure-analysis', label: 'Read LLM Failure Analysis'
  },
  'agentic-sdlc': {
    lines: [
      'Story → specification → implementation → review → CI → verification → deploy.',
      'Agents accelerate bounded work; engineering judgment and release accountability remain explicit.'
    ],
    href: '/thoughts/agentic-sdlc', label: 'Read the Agentic SDLC'
  },
  architecture: {
    lines: [
      'Core concerns: distributed systems, event-driven workflows, reliability, retries, idempotency, observability and secure system boundaries.',
      'I prefer simple architecture until complexity is justified by the problem.'
    ]
  },
  safetoken: {
    lines: [
      'Multi-tenant transaction authentication, 3D Secure capabilities, OTP provider configuration, issuer integrations and production reliability.'
    ],
    href: '/case-studies/safetoken-3ds', label: 'Read SafeToken case study'
  },
  'bulk-token': {
    lines: [
      'Redesigned bulk token enrollment using Kafka-based processing, recovery and record-level outcomes.',
      'Measured result: 10,000 records processed in under one minute.'
    ],
    href: '/case-studies/bulk-paycode', label: 'Read bulk token case study'
  },
  'verve-payments': {
    lines: [
      'Led the service connecting gateway payment requests to Verve card processing, translating requests into Postilion FS messages and designing retry and idempotency handling.'
    ],
    href: '/case-studies/verve-payments', label: 'Read Verve Payment Service case study'
  },
  skills: {
    lines: [
      'Java 17/21 · Spring Boot · REST APIs · distributed systems · SQL Server · MySQL',
      'Kafka · Redis · asynchronous processing · idempotency · retries · reconciliation',
      'Docker · Kubernetes · Jenkins · Prometheus · Grafana · ELK · OpenTelemetry',
      'LLM evaluation · agentic workflows · context engineering · AI-assisted development'
    ]
  },
  experience: {
    lines: [
      'Interswitch Group · Senior Software Engineer · May 2022–present',
      'Calm Global Infotech · Software Engineer · Aug 2019–Apr 2022',
      'Technical Director, Digihive Network · 2022–present'
    ],
    href: '/about', label: 'Read background'
  },
  contact: {
    lines: ['Open to conversations about senior backend engineering, payments, distributed systems and applied AI products.'],
    href: '/work-with-me', label: 'Get in touch'
  }
}

const shortcuts = ['help', 'projects', 'ai', 'safetoken', 'llm-evaluation', 'agentic-sdlc']

export function PortfolioTerminal() {
  const [input, setInput] = useState('')
  const [entries, setEntries] = useState<Entry[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  function run(raw: string) {
    const command = raw.trim().toLowerCase()
    if (!command) return
    if (command === 'clear') {
      setEntries([])
    } else {
      const result = commands[command] ?? { lines: ['Unknown command: ' + command + '. Type help to see available commands.'] }
      setEntries(current => [...current, { command, ...result }])
    }
    setHistory(current => [...current, command])
    setHistoryIndex(-1)
    setInput('')
    inputRef.current?.focus()
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    run(input)
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return
    event.preventDefault()
    const next = event.key === 'ArrowUp'
      ? Math.min(historyIndex + 1, history.length - 1)
      : Math.max(historyIndex - 1, -1)
    setHistoryIndex(next)
    setInput(next === -1 ? '' : history[history.length - 1 - next])
  }

  return (
    <section className="terminal" aria-label="Interactive portfolio terminal">
      <div className="terminal-bar">
        <span className="terminal-lights" aria-hidden="true"><i /><i /><i /></span>
        <span>wisdom@portfolio: ~</span>
        <span className="terminal-status">interactive / v2</span>
      </div>
      <div className="terminal-body">
        <p className="terminal-welcome">Welcome. Explore my work by selecting a command or typing below.</p>
        <div className="terminal-shortcuts" aria-label="Suggested commands">
          {shortcuts.map(command => (
            <button key={command} type="button" onClick={() => run(command)}>{command}</button>
          ))}
        </div>
        <div className="terminal-output" role="log" aria-live="polite" aria-relevant="additions">
          {entries.map((entry, index) => (
            <div className="terminal-entry" key={index}>
              <p><span className="terminal-prompt">wisdom@portfolio:~$</span> {entry.command}</p>
              {entry.lines.map((line, lineIndex) => <p key={lineIndex}>{line}</p>)}
              {entry.href && <Link href={entry.href}>{entry.label} ↗</Link>}
            </div>
          ))}
        </div>
        <form onSubmit={submit} className="terminal-form">
          <label htmlFor="terminal-input" className="terminal-prompt">wisdom@portfolio:~$</label>
          <input id="terminal-input" ref={inputRef} value={input} onChange={event => setInput(event.target.value)} onKeyDown={onKeyDown} autoComplete="off" spellCheck={false} aria-label="Terminal command" placeholder="type help and press Enter" />
          <button type="submit" aria-label="Run command">↵</button>
        </form>
      </div>
    </section>
  )
}
