import { useSSR } from '@nextui-org/react';
import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css'

import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  const { isBrowser } = useSSR()
  return (
    isBrowser && (
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    )
  )
}

export default App