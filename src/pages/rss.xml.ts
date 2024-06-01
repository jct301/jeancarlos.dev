import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from '@consts'

type Context = {
  site: string
}

export async function GET(context: Context) {
  const posts = await getCollection('blog')
  const projects = await getCollection('projects')

  const postsComplete = posts.map(({body,id,collection,data,render,slug}) => ({
    id,
    body,collection,data,render,slug:`/blog/${slug}`
  }))

  const projectsComplete = projects.map(({body,id,collection,data,render,slug}) => ({
    id,
    body,collection,data,render,slug:`/projects/${slug}`
  }))

  const items = [...postsComplete, ...projectsComplete].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  )

  console.log(items)

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.slug
    })),
  })
}
