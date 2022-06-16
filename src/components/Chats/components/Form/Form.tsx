import { FC, useState } from 'react';
import { Button } from '../../../../elements/Button/Button';
import { Input } from '../../../../elements/Input/Input';
import style from './form.module.scss';

interface FormProps {
  addChat: (name: string) => void;
}
export const Form: FC<FormProps> = ({ addChat }) => {
  const [name, setName] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim().length) {
      addChat(name.trim());
      setName('');
    }
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input classnames={['input']} value={name} change={setName} />
      <Button label="Добавить" />
    </form>
  );
};
