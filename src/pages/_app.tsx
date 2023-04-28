import { AppProps } from 'next/app';
import '@/styles/globals.css'

import Layout from '../components/Layout';
import { NextUIProvider, useSSR } from '@nextui-org/react';

const App = ({ Component, pageProps }: AppProps) => {
  const { isBrowser } = useSSR()
  return (
    isBrowser && (
      <NextUIProvider >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    )
  )
}

export default App