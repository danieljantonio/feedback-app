import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Product - Review</title>
      </Head>
      <main className="app" style={{ width: '100%' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
