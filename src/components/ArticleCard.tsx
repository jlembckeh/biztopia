import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import type { Article } from '../lib/types'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="rounded-2xl border p-4 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
      <Link to={`/article/${article.slug}`}>
        <h3 className="text-lg font-semibold">{article.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{article.excerpt}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>{article.topic} • {article.readMins} min</span>
          <time dateTime={article.date}>{dayjs(article.date).format('DD MMM YYYY')}</time>
        </div>
      </Link>
    </article>
  )
}
