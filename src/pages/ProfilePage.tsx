import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileState } from 'src/store/profile/reducer';
import { toggleProfile, changeName } from 'src/store/profile/action';
import { Input } from 'src/elements/Input/Input';
import { Button } from 'src/elements/Button/Button';

export const ProfilePage: FC = () => {
  const visible = useSelector((state: ProfileState) => state.visible);
  const name = useSelector((state: ProfileState) => state.name);
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
