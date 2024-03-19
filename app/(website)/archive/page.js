/*
 * @LastEditors: Necfol
 * @Date: 2024-03-19 18:49:40
 * @LastEditTime: 2024-03-19 20:07:23
 * @FilePath: /portfolio-pro/app/(website)/archive/page.js
 */
import Archive from "./archive";
import { Suspense } from 'react';

import { getPaginatedPosts } from "@/lib/sanity/client";

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return <Suspense><Archive posts={posts} /></Suspense>;
}

// export const revalidate = 60;
