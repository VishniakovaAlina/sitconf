import { PropsWithChildren } from 'react';

import styles from './ContentContainer.module.scss';

interface IContentContainerProps {
  className?: string;
  dataSection?: string;
  id?: string;
}

export const ContentContainer = (props: PropsWithChildren<IContentContainerProps>) => {
  const { className, children, dataSection, id } = props;

  return (
    <section className={cn(styles.root, className)} data-section={dataSection} id={id}>
      {children}
    </section>
  );
};
