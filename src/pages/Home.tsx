import ArticleCard from '../components/ArticleCard'
import SearchBar from '../components/SearchBar'
import { articles as data } from '../lib/data'
import { useState } from 'react'

export default function HomePage(){
  const [results, setResults] = useState(data)
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl font-bold">Biztopia: negocios, tecnología, marketing y retail — en 3–5 min</h1>
      </div>
      <SearchBar data={data} onResults={setResults} />
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map(a => <ArticleCard key={a.slug} article={a} />)}
      </section>
    </div>
  )
}
