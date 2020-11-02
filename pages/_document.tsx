import React from 'react';
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import GAScript from '../src/components/ga-script';

class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preload' href='/fonts/inter.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        </Head>
        <body>
        <Main />
        <NextScript />
        <GAScript />
        </body>
      </Html>
    );
  }
}

export default Document;
