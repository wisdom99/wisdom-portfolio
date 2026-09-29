'use client'

import Link from 'next/link'
import { FormEvent, KeyboardEvent, useRef, useState } from 'react'

type Entry = { command: string; lines: string[]; href?: string; label?: string }

const commands: Record<string, Omit<Entry, 'command'>> = {
  help: {
    lines: ['Explore: about, projects, skills, experience, contact', 'Case studies: safetoken, verve-push, verve-payments, disbursement', 'Use ↑ and ↓ for command history. Type clear to reset.']
  },
  about: {
    lines: ['Wisdom Ifeanyi — Senior Software Engineer.', 'I build and operate Java services for payments, transaction authentication and credit disbursement.'],
    href: '/about', label: 'Read more about me'
  },
  projects: {
    lines: ['SafeToken — multi-tenant transaction authentication and issuer integrations.', 'Verve Push — card credits across remittance, refunds, P2P and disbursement.', 'Verve Payment Service — gateway to card processing with retry and idempotency.', 'Bulk Disbursement — maker-checker approval, CSV validation and Kafka execution.'],
    href: '/case-studies', label: 'Browse all case studies'
  },
  safetoken: {
    lines: ['Led improvements to a card-not-present authentication platform: 3D Secure capabilities, multi-tenant design, OTP provider configuration and bank issuer integrations.'],
    href: '/case-studies/safetoken-3ds', label: 'Read SafeToken case study'
  },
  'verve-push': {
    lines: ['Built a service for crediting Verve cardholders. It coordinates cash deposit, transaction lookup, name inquiry and alias mapping across distributed services.'],
    href: '/case-studies/verve-push', label: 'Read Verve Push case study'
  },
  'verve-payments': {
    lines: ['Led the service connecting gateway payment requests to Verve card processing, translating requests into Postilion FS messages and designing retry and idempotency handling.'],
    href: '/case-studies/verve-payments', label: 'Read Verve Payment Service case study'
  },
  disbursement: {
    lines: ['Designed a bulk credit workflow with maker-checker approval, CSV validation, Kafka execution, retries, reconciliation and record-level outcomes.'],
    href: '/case-studies/disbursement', label: 'Read disbursement case study'
  },
  skills: {
    lines: ['Java 17/21/25 · Spring Boot · Spring Security · REST · SQL Server · MySQL', 'Kafka · asynchronous processing · idempotency · retries · reconciliation', 'OAuth2/JWT · encryption · Docker · Kubernetes · Jenkins · CI/CD']
  },
  experience: {
    lines: ['Interswitch Group · Senior Software Engineer · May 2022–present', 'Calm Global Infotech · Software Engineer · Aug 2019–Apr 2022', 'Technical Director, Digihive Network · 2022–present'],
    href: '/about', label: 'Read background'
  },
  contact: {
    lines: ['Open to conversations about backend engineering, payments and reliable systems.'],
    href: '/work-with-me', label: 'Get in touch'
  }
}

const shortcuts = ['help', 'projects', 'safetoken', 'verve-push', 'verve-payments', 'disbursement']

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
      const result = commands[command] ?? { lines: [`Unknown command: ${command}. Type help to see available commands.`] }
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
        <span className="terminal-status">interactive / v1</span>
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
