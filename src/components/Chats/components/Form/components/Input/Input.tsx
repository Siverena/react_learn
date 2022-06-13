import style from './input.module.scss';
import { FC } from 'react';
import React from 'react';

interface InputProps {
  value: string;
  change: (value: string) => void;
}

export const Input: FC<InputProps> = ({ value, change }) => (
  <input
    className={style['input']}
    type="text"
    placeholder="Введите сообщение"
    value={value}
    autoFocus={true}
    onChange={(e) => {
      change(e.target.value);
    }}
  />
);
