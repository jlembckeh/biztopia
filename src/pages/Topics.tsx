import { articles } from '../lib/data'
const groups = ['Negocios','Tecnología','Marketing','Retail'] as const
export default function TopicsPage(){
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Temas</h1>
      {groups.map(g => (
        <section key={g} className="space-y-2">
          <h2 className="text-xl font-semibold">{g}</h2>
          <ul className="list-disc pl-6">
            {articles.filter(a => a.topic === g).map(a => (
              <li key={a.slug}><a className="underline" href={`/article/${a.slug}`}>{a.title}</a></li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
