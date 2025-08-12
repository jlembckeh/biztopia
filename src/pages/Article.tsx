import { useParams, Link } from 'react-router-dom'
import { articles } from '../lib/data'

export default function ArticlePage(){
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find(a => a.slug === slug)
  if (!article) return <p>No se encontró el artículo.</p>

  return (
    <article className="prose max-w-none">
      <Link className="no-underline text-sm" to="..">← Volver</Link>
      <h1>{article.title}</h1>
      {article.content.map((p, i) => <p key={i}>{p}</p>)}
      <h2>¿Por qué importa?</h2>
      <ul>{article.whyItMatters.map((x,i)=><li key={i}>{x}</li>)}</ul>
      <h2>¿Qué puedo hacer?</h2>
      <ul>{article.actions.map((x,i)=><li key={i}>{x}</li>)}</ul>
    </article>
  )
}
