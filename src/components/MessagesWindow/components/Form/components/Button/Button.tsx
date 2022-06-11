import style from './button.module.scss';
import React from 'react';
import { FC } from 'react';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  click?: () => void;
}

export const Button: FC<ButtonProps> = ({ label, disabled = false, click }) => (
  <button
    disabled={disabled}
    data-testid="submitbutton"
    className={style['button']}
    onClick={click}
  >
    {label}
  </button>
);
