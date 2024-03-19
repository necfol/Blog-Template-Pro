/*
 * @LastEditors: Necfol
 * @Date: 2024-03-19 18:49:40
 * @LastEditTime: 2024-03-20 00:09:13
 * @FilePath: /portfolio-pro/app/(website)/author/[author]/page.js
 */
import Author from "./author";

import { getAllAuthorsSlugs, getAuthorPostsBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllAuthorsSlugs();
}

async function getAuthor(slug) {
  const posts = await getAuthorPostsBySlug(slug);
  return posts?.[0]?.author || {};
}

export async function generateMetadata({ params }) {
  const author = await getAuthor(params.author);
  return { title: author.title };
}

export default async function AuthorPage({ params }) {
  const posts = await getAuthorPostsBySlug(params.author);
  const author = await getAuthor(params.author);
  return <Author posts={posts} author={author} />;
}

export const revalidate = 60;
