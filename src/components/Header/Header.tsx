import { ContentContainer } from '@/components/ContentContainer/ContentContainer';
import { Logo } from '@/components/Logo';

import styles from './Header.module.scss';

interface IHeaderProps {
  className?: string;
}

const links = [
  {
    path: '/',
    title: 'спикеры',
  },
];

export const Header = ({ className }: IHeaderProps) => {
  return (
    <section className={cn(styles.root, className)}>
      <ContentContainer className={styles.container}>
        <Logo className={styles.logo} />

        <div className={styles.links}>
          {links.map(({ path, title }) => (
            <a href={path}>{title}</a>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};
