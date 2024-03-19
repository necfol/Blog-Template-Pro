/*
 * @LastEditors: Necfol
 * @Date: 2024-03-19 18:49:40
 * @LastEditTime: 2024-03-19 20:05:56
 * @FilePath: /portfolio-pro/app/(website)/search/page.js
 */
import Search from "./search";
import { Suspense } from 'react';

export default async function SearchPage() {
  return <Suspense><Search /></Suspense>;
}

// export const revalidate = 60;
