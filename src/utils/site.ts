export const SITE = {
  url: 'https://yashodhan.dev',
  title: 'Yashodhan',
  description: 'Product-minded engineer building calm, dependable experiences for product-led teams.',
  author: {
    name: 'Yashodhan Deshmukh',
    email: 'hello@yashodhan.dev',
    url: 'https://www.linkedin.com/in/yashodhan',
  },
  defaultImage: '/images/about-journey.svg',
};

export const absoluteUrl = (path: string) =>
  path.startsWith('http') ? path : new URL(path, SITE.url).toString();

export const createWebsiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.title,
  url: SITE.url,
  description: SITE.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const createPersonJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.author.name,
  email: SITE.author.email,
  url: SITE.url,
  sameAs: [SITE.author.url, 'https://github.com/yashodhanxyz'],
  jobTitle: 'Product-minded Engineer',
  worksFor: {
    '@type': 'Organization',
    name: SITE.title,
    url: SITE.url,
  },
});

export const createArticleJsonLd = (params: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
  dateModified?: Date;
  keywords?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: params.title,
  description: params.description,
  url: params.url,
  image: params.image,
  datePublished: params.datePublished.toISOString(),
  dateModified: (params.dateModified ?? params.datePublished).toISOString(),
  author: {
    '@type': 'Person',
    name: SITE.author.name,
    url: SITE.url,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.title,
    url: SITE.url,
  },
  keywords: params.keywords,
});

export const createCreativeWorkJsonLd = (params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  dateCreated?: string;
  dateModified?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: params.title,
  description: params.description,
  url: params.url,
  image: params.image,
  dateCreated: params.dateCreated,
  dateModified: params.dateModified,
  creator: {
    '@type': 'Person',
    name: SITE.author.name,
    url: SITE.url,
  },
});
