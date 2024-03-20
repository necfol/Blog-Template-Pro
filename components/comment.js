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
    });
  }, []);

  return <div id="waline" />;
};

export default WalineComment;
