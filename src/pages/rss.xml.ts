import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../utils/site';

export const GET = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: `${SITE.title} — Blog`,
    description: SITE.description,
    site: SITE.url,
    stylesheet: undefined,
    items: posts
      .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.tldr ?? post.data.description,
        link: `/blog/${post.slug}`,
        pubDate: post.data.publishedAt,
        categories: post.data.tags,
        customData: post.data.updatedAt
          ? `<updated>${post.data.updatedAt.toISOString()}</updated>`
          : undefined,
      })),
  });
};
