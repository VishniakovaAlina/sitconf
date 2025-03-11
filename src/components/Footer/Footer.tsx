import TGIcon from '@public/img/tg.svg';
import VKIcon from '@public/img/vk.svg';
import YoutubeIcon from '@public/img/youtube.svg';

import { ContentContainer } from '@/components/ContentContainer/ContentContainer';
import { Logo } from '@/components/Logo';

import styles from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

export const YoutubeLink = 'https://www.youtube.com/@SamaraITCommunity';
export const VKLink = 'https://vk.com/samara_it_community';
export const TGLink = 'https://t.me/Samara_IT_Community';

export const Footer = ({ className }: IFooterProps) => {
  return (
    <section className={cn(styles.root, className)}>
      <ContentContainer className={styles.container}>
        <Logo className={styles.logo} />
        <div className={styles.links}>
          <a href={YoutubeLink}>
            <YoutubeIcon />
          </a>
          <a href={VKLink}>
            <VKIcon />
          </a>
          <a href={TGLink}>
            <TGIcon />
          </a>
        </div>
      </ContentContainer>
    </section>
  );
};
