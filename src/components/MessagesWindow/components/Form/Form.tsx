import { FC, memo, useState } from "react";
import { Button } from "../../../../elements/Button/Button";
import { Input } from "../../../../elements/Input/Input";
import style from "./form.module.scss";
import { useDispatch } from "react-redux";
import { addMessage } from "src/store/messages/action";
import { useParams } from "react-router-dom";

export const Form: FC = memo(() => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { chatName } = useParams();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatName && text.trim().length) {
      dispatch(addMessage(chatName, text));
      setText("");
    }
  };
  const handleClickButton = () => {
    console.log("button click");
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        classnames={["input", "input--green", "input__asdfas"]}
        value={text}
        placeholder="Введите сообщение"
        change={setText}
      />
      <Button label="Отправить" click={handleClickButton} />
    </form>
  );
});
