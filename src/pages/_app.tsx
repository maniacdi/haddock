import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../../styles/scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Magaldi</title>
        <meta name='description' content='Test page' />
      </Head>

      <div className='body'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
