import Head from 'next/head';

export const Favicon = () => {
  return (
    <Head>
      <link rel="icon" sizes="16x16" type="image/png" href="/img/icons/favicons/favicon16.png" />
      <link rel="icon" sizes="32x32" type="image/png" href="/img/icons/favicons/favicon32.png" />
      <link rel="icon" sizes="96x96" type="image/png" href="/img/icons/favicons/favicon96.png" />
      <link rel="apple-touch-icon" sizes="120x120" type="image/png" href="/img/icons/favicons/favicon120.png" />
    </Head>
  );
};
