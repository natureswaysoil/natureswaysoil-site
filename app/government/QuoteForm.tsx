'use client';

import { useState } from 'react';

export default function QuoteForm({ initialSource }: { initialSource?: string }) {
  const [form, setForm] = useState({
    name: '',
    agency: '',
    email: '',
    phone: '',
    projectType: '',
    areaSize: '',
    timeline: '',
    message: '',
    source: initialSource || 'direct',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [quoteId, setQuoteId] = useState<string | null>(null);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/government-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      setQuoteId(data.quoteId);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #d1d5db',
    fontSize: 14,
  };

  if (status === 'success') {
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            border: '1px solid #bbf7d0',
            background: '#ecfdf5',
          }}
        >
          <strong>Request submitted successfully.</strong>
          <p style={{ margin: '6px 0 0 0' }}>
            Your quote ID: <strong>{quoteId}</strong>
          </p>
        </div>
        <p style={{ margin: 0 }}>
          You can follow up directly at{' '}
          <a href="mailto:sales@natureswaysoil.com">sales@natureswaysoil.com</a> or
          call <a href="tel:2525607390">252-560-7390</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <input
          style={inputStyle}
          placeholder="Full name"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          required
        />
        <input
          style={inputStyle}
          placeholder="Agency / organization"
          value={form.agency}
          onChange={(e) => update('agency', e.target.value)}
          required
        />
      </div>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          required
        />
        <input
          style={inputStyle}
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
        />
      </div>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <input
          style={inputStyle}
          placeholder="Project type (housing, airfield, park…)"
          value={form.projectType}
          onChange={(e) => update('projectType', e.target.value)}
        />
        <input
          style={inputStyle}
          placeholder="Estimated area (sq ft / acres)"
          value={form.areaSize}
          onChange={(e) => update('areaSize', e.target.value)}
        />
      </div>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <input
          style={inputStyle}
          placeholder="Timeline (ASAP, 30 days, etc.)"
          value={form.timeline}
          onChange={(e) => update('timeline', e.target.value)}
        />
        <input
          style={inputStyle}
          placeholder="Source (auto)"
          value={form.source}
          onChange={(e) => update('source', e.target.value)}
        />
      </div>
      <textarea
        style={{ ...inputStyle, minHeight: 100 }}
        placeholder="Project details / notes"
        value={form.message}
        onChange={(e) => update('message', e.target.value)}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          padding: '14px 18px',
          borderRadius: 10,
          border: 'none',
          background: '#14532d',
          color: '#fff',
          fontWeight: 800,
          cursor: 'pointer',
        }}
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
      </button>
      {status === 'error' && (
        <p style={{ color: '#b91c1c', margin: 0 }}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
