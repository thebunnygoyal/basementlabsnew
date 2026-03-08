export const PROJECTS_QUERY = `*[_type == "project"] | order(featured desc, _createdAt desc) {
  _id, title, slug, chain, status, description, logo, links, featured
}`;

export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(_createdAt desc)[0...3] {
  _id, title, slug, chain, status, description, logo, links
}`;

export const ARTICLES_QUERY = `*[_type == "article"] | order(publishedAt desc) {
  _id, title, slug, excerpt, category, publishedAt, featuredImage, author->{ name, avatar }
}`;

export const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0] {
  _id, title, slug, excerpt, body, category, publishedAt, featuredImage, author->{ name, avatar, bio }
}`;
