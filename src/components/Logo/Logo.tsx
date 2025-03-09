import Link from 'next/link';

import LogoIcon from '@public/img/logo.svg';

import { Routes } from '@/Routes';

import styles from './Logo.module.scss';

interface ILogoProps {
  className?: string;
}

export const Logo = ({ className }: ILogoProps) => {
  return (
    <Link href={Routes.home}>
      <LogoIcon className={cn(styles.root, className)} />
    </Link>
  );
};
