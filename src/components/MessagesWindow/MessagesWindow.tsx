import { FC } from "react";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
// import { USERS } from "../../constants";
import { useParams, Navigate } from "react-router-dom";
import style from "./messages.module.scss";
import { useSelector } from "react-redux";
import { selectMessages } from "src/store/messages/selectors";

export const MessagesWindow: FC = () => {
  const { chatName } = useParams();

  const messages = useSelector(selectMessages);
  // useEffect(() => {
  //   if (
  //     chatId &&
  //     messages[chatId]?.length &&
  //     messages[chatId][messages[chatId].length - 1].author === USERS.user
  //   ) {
  //     const timeout = setTimeout(() => {
  //       addMessage(chatId, {
  //         author: USERS.bot,
  //         text: 'Добрый день! Я ботик котик. Почешите мне животик',
  //       });
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [chatId, messages]);

  if (chatName && !messages[chatName]) {
    return <Navigate to="/chats" replace />;
  }

  if (chatName) {
    return (
      <>
        <section className={style["message-window"]}>
          <MessageList messages={messages[chatName]} />
          <Form />
        </section>
      </>
    );
  } else {
    return (
      <>
        <div className={style["message-window--no-chat"]}>
          <p>Выберите чат</p>
        </div>
      </>
    );
  }
};
