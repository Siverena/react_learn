import React from 'react';
import USERS from '../../../../constants';
import { Message } from './Message';

export default {
  title: 'Message',
  component: Message,
};

const Template = (args) => (
  <Message {...{ message: { author: args.author, text: args.text } }} />
);

export const MyMessage = Template.bind({});
MyMessage.args = {
  author: USERS.user,
  text: 'Мое сообщение',
};

export const BotMessage = Template.bind({});
BotMessage.args = {
  author: USERS.bot,
  text: 'Добрый день! Я ботик котик. Почешите мне животик',
};
