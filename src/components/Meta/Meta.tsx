import Head from 'next/head';
import { useRouter } from 'next/router';

import { IMetaData } from '@/types/meta';

export interface IMetaProps extends IMetaData {}

const data: IMetaProps = {
  title: 'SitCONF',
  description: 'SitCONF',
};

export const Meta = ({ title = data.title, description = data.description }: IMetaProps) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name={title} property="og:title" key="og:title" />
      <meta name="description" content={description} />
      <meta name={description} property="og:description" key="og:description" />
      <link rel="canonical" href={process.env.APP_URL + router.asPath} key="canonical" />
    </Head>
  );
};
