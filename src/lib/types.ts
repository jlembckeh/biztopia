export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string
  topic: 'Negocios' | 'Tecnología' | 'Marketing' | 'Retail'
  readMins: number
  content: string[]
  whyItMatters: string[]
  actions: string[]
}
