import '../styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.png" type="image/png" sizes="16x16" />
        <title>Desafio Cromai | Pitágoras</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
