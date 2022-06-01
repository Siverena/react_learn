import { useState } from 'react';
import style from './message.module.css';

const getClassNames = (style, classNames) => {
  let styles = '';
  classNames.forEach((c) => {
    styles += ' ' + style[c];
  });
  return styles;
};

export const Message = (props) => {
  const [msg, setMsg] = useState('msg');
  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  return (
    <>
      <p className={style['message']}>{msg}</p>
      <p className={style['message--green'] + ' ' + style['message']}>
        {props.msg}
      </p>

      <p className={getClassNames(style, ['message--green', 'message'])}>
        {props.msg} 465465456
      </p>

      <p className={style['message__text']}>{props.msg3}</p>

      <p className={`${style}`}>{props.msg3}</p>
      <input type="text" onChange={handleChange} value={msg} />
    </>
  );
};
