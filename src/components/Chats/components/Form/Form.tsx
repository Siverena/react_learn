import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addChat } from 'src/store/messages/action';
import { addChat } from 'src/store/messages/slice';
import { Button } from '../../../../elements/Button/Button';
import { Input } from '../../../../elements/Input/Input';
import style from './form.module.scss';

export const Form: FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim().length) {
      dispatch(addChat(name.trim()));
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
