/*
 * @LastEditors: Necfol
 * @Date: 2024-03-19 18:49:40
 * @LastEditTime: 2024-03-19 23:14:20
 * @FilePath: /portfolio-pro/components/footer.js
 */
import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        Powered by{" "}
        <a
          href="https://vercel.com"
          rel="noopener"
          target="_blank">
          Vercel
        </a>
      </div>
      <div className="flex items-center justify-center mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
