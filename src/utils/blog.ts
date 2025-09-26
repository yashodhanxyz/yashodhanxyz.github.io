import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

const WORDS_PER_MINUTE = 200;

const normalize = (value: string) => value.toLowerCase();

const toWords = (body: string) =>
  body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

export const getReadTimeMinutes = (body: string) => {
  const words = toWords(body).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

export const getPublishedPosts = async (): Promise<BlogEntry[]> => {
  const entries = await getCollection<'blog'>('blog');
  const showDrafts = import.meta.env.PUBLIC_PREVIEW_DRAFTS === 'true';
  return entries
    .filter((entry) => (showDrafts ? true : !entry.data.draft))
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
};

export const buildPostIndex = async () => {
  const posts = await getPublishedPosts();
  return posts.map((entry, index) => {
    const readTime = getReadTimeMinutes(entry.body);
    const previous = posts[index - 1];
    const next = posts[index + 1];

    return {
      entry,
      readTime,
      previous,
      next,
    } as const;
  });
};

export const collectAllTags = (posts: BlogEntry[]) => {
  const tagCounts = new Map<string, number>();
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(tagCounts.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([tag, count]) => ({ tag, count }));
};

export const filterPosts = (posts: BlogEntry[], params: { search?: string; tag?: string }) => {
  const query = params.search ? normalize(params.search) : '';
  const tag = params.tag ? params.tag.trim() : '';

  return posts.filter((post) => {
    const matchesTag = tag ? post.data.tags.map(normalize).includes(normalize(tag)) : true;

    const matchesSearch = query
      ? [post.data.title, post.data.description, post.body]
          .join(' ')
          .toLowerCase()
          .includes(query)
      : true;

    return matchesTag && matchesSearch;
  });
};

export const findRelatedPosts = (current: BlogEntry, posts: BlogEntry[], limit = 3) => {
  const currentSlug = current.slug;
  const currentTags = new Set(current.data.tags.map(normalize));
  return posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.data.tags.filter((tag) => currentTags.has(normalize(tag)));
      return { post, score: sharedTags.length };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.publishedAt.getTime() - a.post.data.publishedAt.getTime())
    .slice(0, limit)
    .map(({ post }) => post);
};
