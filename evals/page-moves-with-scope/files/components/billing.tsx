'use client'

import { useState } from 'react'

export function Billing() {
  const [plan, setPlan] = useState<'free' | 'pro'>('free')
  const [busy, setBusy] = useState(false)

  const upgrade = async () => {
    setBusy(true)
    await fetch('/api/upgrade', { method: 'POST' })
    setPlan('pro')
    setBusy(false)
  }

  return (
    <section>
      <h1>Billing</h1>
      <p>You are on the {plan === 'pro' ? 'Pro' : 'Free'} plan.</p>
      {plan === 'pro' && <span>Active</span>}
      {plan === 'free' && (
        <button onClick={upgrade} disabled={busy}>
          {busy ? 'Upgrading' : 'Upgrade to Pro'}
        </button>
      )}
    </section>
  )
}
