import { useEffect, FC, useCallback } from "react";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
import { TSMessage, TSMessages } from "../../common-types";
import { USERS } from "../../constants";
import { useParams, Navigate } from "react-router-dom";
import style from "./messages.module.scss";

interface MessagesWindowProps {
  messages: TSMessages;
  addMessage: (id: string, message: TSMessage) => void;
}
export const MessagesWindow: FC<MessagesWindowProps> = ({
  messages,
  addMessage,
}) => {
  const { chatId } = useParams();
  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length &&
      messages[chatId][messages[chatId].length - 1].author === USERS.user
    ) {
      const timeout = setTimeout(() => {
        addMessage(chatId, {
          author: USERS.bot,
          text: "Добрый день! Я ботик котик. Почешите мне животик",
        });
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages]);
  const handleAddMessage = useCallback(
    (message: TSMessage) => {
      if (chatId) {
        addMessage(chatId, message);
      }
    },
    [chatId]
  );

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  if (chatId) {
    return (
      <>
        <section className={style["message-window"]}>
          <MessageList messages={chatId ? messages[chatId] : []} />
          <Form addMessage={handleAddMessage} />
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
