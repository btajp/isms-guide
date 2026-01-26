import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  description: string
  tags: string[]
  author: string
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/posts/*.md', {
  transform(raw): Post[] {
    return raw
      .filter(({ frontmatter }) => frontmatter.published !== false)
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || 'Untitled',
        url,
        date: formatDate(frontmatter.date),
        description: frontmatter.description || '',
        tags: frontmatter.tags || [],
        author: frontmatter.author || 'ISMS Guide Team'
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
