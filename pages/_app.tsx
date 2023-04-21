import '@/styles/globals.css'
// import { NextUIProvider } from '@nextui-org/react';
import { useSSR } from '@nextui-org/react'
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import React from 'react';
// import Layout from '@/components/Layout';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['cyrillic'] })

const Layout = dynamic(() => import('@/components/Layout'))

export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR()
  return (
    isBrowser && (

      <>
        <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
        {/* // <NextUIProvider>: */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* // </NextUIProvider> */}

      </>
    )
  )
}