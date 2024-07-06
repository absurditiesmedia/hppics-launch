import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import { SITE } from "@config";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const albums = await getCollection("albums");
  const sortedAlbums = getSortedPosts(albums);

  const postItems = sortedPosts.map(({ data, slug }) => ({
    link: `posts/${slug}/`,
    title: data.title,
    description: data.description,
    pubDate: new Date(data.modDatetime ?? data.pubDatetime),
  }));
  const albumItems = sortedAlbums.map(({ data, slug }) => ({
    link: `albums/${data.slug}/`,
    title: data.title,
    description: data.description,
    pubDate: new Date(data.modDatetime ?? data.pubDatetime),
  }));

  const itemsTemp = postItems.concat(albumItems);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: itemsTemp,
  });
}
