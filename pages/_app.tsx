import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { useSSR } from '@nextui-org/react'
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import React from 'react';

const Layout = dynamic(() => import('@/components/Layout'))

export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR()
  return (
    isBrowser && (
      <NextUIProvider>:
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    )
  )
}