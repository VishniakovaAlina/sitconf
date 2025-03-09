import React, { PropsWithChildren } from 'react';

import styles from './ModalHeader.module.scss';

interface IModalHeaderProps {
  className?: string;
}

export const ModalHeader = (props: PropsWithChildren<IModalHeaderProps>) => {
  const { children, className } = props;

  return <h2 className={cn(styles.root, className)}>{children}</h2>;
};
