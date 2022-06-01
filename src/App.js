import { useState } from 'react';
import { Message } from './components/classes/Message';
import { Message as MessageFunc } from './components/func/Message';
//import style from './index.module.css';

const mess = 'fjrjkgdfjkgfgjk';

export const App = () => {
  const [arr] = useState([1, 2, 3, 4]);
  return (
    <>
      <Message msg={'to class'} />
      <hr />
      <MessageFunc msg={'to func'} msg3={mess} />
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
