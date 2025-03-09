import React, { PropsWithChildren, useEffect } from 'react';
import ReactModal from 'react-modal';

import { isBrowser } from '@/utils/isBrowser';

import styles from './Modal.module.scss';

interface IModalProps {
  onClose: () => void;
  contentClassName?: string;
  closeButtonTabIndex?: number;
}

const getModalContent = (props: React.ComponentPropsWithRef<'div'>, children: React.ReactNode) => {
  return (
    <div className={styles.rootContent}>
      <div {...props}>{children}</div>
    </div>
  );
};

export const Modal = (props: PropsWithChildren<IModalProps>) => {
  const { children, contentClassName, onClose, closeButtonTabIndex = 0 } = props;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isBrowser) {
      window.document.body.classList.add('isOpenedModal');
      return () => {
        window.document.body.classList.remove('isOpenedModal');
      };
    }
  }, []);

  return (
    <ReactModal
      isOpen
      shouldCloseOnEsc
      overlayClassName={styles.overlay}
      portalClassName={styles.portal}
      className={cn(styles.content, contentClassName)}
      contentElement={getModalContent}
      onRequestClose={onClose}
    >
      <button type="button" tabIndex={closeButtonTabIndex} className={styles.closeButton} onClick={onClose} />
      {children}
    </ReactModal>
  );
};
