import '../styles/globals.css'
import '../styles/main.css'
import '../styles/responsive.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import { Kumbh_Sans } from '@next/font/google'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const myfont = Kumbh_Sans({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
     function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
  }

  if (isRunningStandalone()) {
    /* This code will be executed if app is running standalone */
  }
  }, [])

 

  return <>
    <main className={myfont.className}>
      <NextNProgress color="#ffeb3b" stopDelayMs={0} height={5} showOnShallow={true} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </main>
  </>
}
