import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile, changeName } from 'src/store/profile/action';
import { Input } from 'src/elements/Input/Input';
import { Button } from 'src/elements/Button/Button';
import { selectName, selectVisible } from 'src/store/profile/selectors';

export const ProfilePage: FC = () => {
  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);
  const [text, setText] = useState(name);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Profile page</h2>
      <p>{name}</p>
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())}>chahge visible</button>
      <hr />

      <Input classnames={['']} value={text} change={setText} />
      <Button label="Изменить" click={() => dispatch(changeName(text))} />
    </>
  );
};
