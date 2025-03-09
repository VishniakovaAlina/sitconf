import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

export enum ButtonView {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonSize {
  Small = 'small',
  Middle = 'middle',
  Large = 'large',
}

interface IButtonProps {
  view?: ButtonView;
  size?: ButtonSize;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { children, view = ButtonView, size = ButtonSize.Middle, className, onClick, type = 'button', disabled = false } = props;

  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(
        styles.root,
        {
          [styles.primary]: view === ButtonView.Primary,
          [styles.secondary]: view === ButtonView.Secondary,
          [styles.small]: size === ButtonSize.Small,
          [styles.large]: size === ButtonSize.Large,
          [styles.disabled]: disabled,
        },
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
