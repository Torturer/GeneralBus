import { AppProps } from 'next/app';
import '@/styles/globals.css'

import Layout from '../components/Layout';
import { NextUIProvider } from '@nextui-org/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <NextUIProvider >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    )
}

export default App