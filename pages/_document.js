import { Html, Head, Main, NextScript } from 'next/document'
import React, {useEffect, useRef, useState} from 'react';



export default function Document() {

  return (
      <Html className='bg-zinc-900 scroll-smooth'  lang="en">
      
      <Head />
      <body className='scroll-smooth' >
       
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
