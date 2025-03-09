import { ContentContainer } from '@/components/ContentContainer/ContentContainer';

import styles from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

export const Footer = ({ className }: IFooterProps) => {
  return (
    <section className={cn(styles.root, className)}>
      <ContentContainer className={styles.container} />
    </section>
  );
};
