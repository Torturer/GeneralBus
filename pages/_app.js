import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { useSSR } from '@nextui-org/react'

export default function App({ Component, pageProps }) {
  const { isBrowser } = useSSR()
  return(
    isBrowser && (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  )
}