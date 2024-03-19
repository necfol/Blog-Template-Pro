/*
 * @LastEditors: Necfol
 * @Date: 2024-03-19 18:49:40
 * @LastEditTime: 2024-03-19 23:39:39
 * @FilePath: /portfolio-pro/next-sitemap.config.js
 */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://www.terpampas.com",
  generateRobotsTxt: true // (optional)
  // ...other options
};
