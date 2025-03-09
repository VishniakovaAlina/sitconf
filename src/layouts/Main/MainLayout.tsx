import React, { PropsWithChildren } from 'react';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import { IMetaProps, Meta } from '../../components/Meta/Meta';

import styles from './MainLayout.module.scss';

interface ILayoutProps extends IMetaProps {
  className?: string;
  title: string;
  description: string;
}

export const MainLayout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children, title, description, className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <Meta title={title} description={description} />
      <Header className={styles.header} />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
