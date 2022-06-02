export const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, id) => (
        <li key={id}>
          {message.author}: {message.text}
        </li>
      ))}
    </ul>
  );
};
