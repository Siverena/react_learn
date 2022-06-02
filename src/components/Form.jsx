import { useState } from 'react';

export const Form = ({ addMessage }) => {
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addMessage({
      author: 'Вы',
      text,
    });
    setText('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Send</button>
    </form>
  );
};
