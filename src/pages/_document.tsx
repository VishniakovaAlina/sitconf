import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

import { DocumentMeta } from '@/components/DocumentMeta/DocumentMeta';

interface IDocumentProps {}

class Document extends NextDocument<IDocumentProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <DocumentMeta />
        </Head>
        <body>
          <div className="nextContentWrapper">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
