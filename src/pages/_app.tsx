import { roboto } from '@/fonts'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
