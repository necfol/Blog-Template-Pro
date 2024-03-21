/*
 * @LastEditors: Necfol
 * @Date: 2024-03-19 18:49:40
 * @LastEditTime: 2024-03-21 17:09:41
 * @FilePath: /Blog-Template-Pro/app/(website)/layout.tsx
 */
import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import GetNavbar from "@/components/getnavbar";
import { urlForImage } from "@/lib/sanity/image";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export async function sharedMetaData(params) {
  const settings = await getSettings();
  return {
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title || "",
      template: "%s | Neo Fang"
    },
    description:
      settings?.description ||
      "",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Neo Fang" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Stablo Template",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>
          <GetNavbar {...settings} />
          <div>{children}</div>
          <Footer {...settings} />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

export const revalidate = 60;
// export const revalidate = 86400;
