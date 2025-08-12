import type { Article } from './types'

export const articles: Article[] = [
  {
    slug: 'primer-articulo',
    title: 'Primer art\u00edculo',
    excerpt: 'Descripci\u00f3n breve de primer art\u00edculo.',
    date: '2025-08-10',
    topic: 'Negocios',
    readMins: 4,
    content: [
      'Contenido del primer art\u00edculo.',
      'M\u00e1s contenido del primer art\u00edculo.'
    ],
    whyItMatters: [
      'Importancia 1.',
      'Importancia 2.'
    ],
    actions: [
      'Acci\u00f3n 1.',
      'Acci\u00f3n 2.'
    ]
  },
  {
    slug: 'segundo-articulo',
    title: 'Segundo art\u00edculo',
    excerpt: 'Descripci\u00f3n breve de segundo art\u00edculo.',
    date: '2025-08-11',
    topic: 'Tecnolog\u00eda',
    readMins: 5,
    content: [
      'Contenido del segundo art\u00edculo.',
      'M\u00e1s contenido del segundo art\u00edculo.'
    ],
    whyItMatters: [
      'Importancia A.',
      'Importancia B.'
    ],
    actions: [
      'Acci\u00f3n A.',
      'Acci\u00f3n B.'
    ]
  }
]
