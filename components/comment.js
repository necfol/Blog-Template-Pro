/*
 * @LastEditors: Necfol
 * @Date: 2024-03-20 20:11:26
 * @LastEditTime: 2024-03-23 17:41:50
 * @FilePath: /portfolio-pro/components/comment.js
 */
"use client";
import { useEffect } from 'react';
import { init } from '@waline/client';

import '@waline/client/waline.css';
// import '@waline/client/dist/waline.css';
// import '@waline/client/dist/waline.css';

const WalineComment = () => {
  useEffect(() => {
    init({
      el: '#waline',
      serverURL: 'https://comment.terpampas.com',
      lang: 'en',
    });
  }, []);

  return <div id="waline" />;
};

export default WalineComment;
