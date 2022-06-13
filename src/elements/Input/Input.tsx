import style from './input.module.scss';
import { FC } from 'react';
import getClassNames from '../../utils';

interface InputProps {
  classnames: string[];
  value?: string;
  change?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export const Input: FC<InputProps> = ({
  classnames,
  value,
  change,
  placeholder,
  autoFocus,
}) => {
  return (
    <input
      className={getClassNames(style, classnames)}
      type="text"
      placeholder={placeholder}
      value={value}
      autoFocus={autoFocus}
      onChange={(e) => {
        change ? change(e.target.value) : null;
      }}
    />
  );
};
