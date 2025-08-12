import Fuse from 'fuse.js'
import { useMemo, useState } from 'react'
import type { Article } from '../lib/types'

export default function SearchBar({ data, onResults }: { data: Article[]; onResults: (r: Article[]) => void }) {
  const [q, setQ] = useState('')
  const fuse = useMemo(() => new Fuse(data, { keys: ['title', 'excerpt', 'topic', 'whyItMatters', 'actions'], threshold: 0.35 }), [data])
  const onChange = (val: string) => {
    setQ(val)
    if (!val) onResults(data)
    else onResults(fuse.search(val).map((r) => r.item))
  }
  return (
    <input
      value={q}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar: IA, retail, marketing…"
      className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red dark:bg-gray-900"
    />
  )
}
