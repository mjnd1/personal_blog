import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
  // 自定义 title 和 description 属性，如果需要，可以在 customData 中指定不同的语言：
  return rss({
    title: 'Astro Learner | Blog',
    description: '我学习Astro的旅程',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  })
}
