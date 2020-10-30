import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import siteConfig from '../configs/site-config';
import FontFace from '../components/font-face';
import { theme } from '../theme';
import '../global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <DefaultSeo { ...siteConfig.seo } />
      <ThemeProvider theme={ theme }>
        <CSSReset />
        <Component { ...pageProps } />
      </ThemeProvider>
      <FontFace />
    </>
  );
}

export default MyApp;
