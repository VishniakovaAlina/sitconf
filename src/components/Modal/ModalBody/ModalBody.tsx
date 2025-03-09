import React, { PropsWithChildren } from 'react';

import styles from './ModalBody.module.scss';

interface IBodyProps {
  className?: string;
}

export const ModalBody = (props: PropsWithChildren<IBodyProps>) => {
  const { children, className } = props;

  return <div className={cn(styles.root, className)}>{children}</div>;
};
