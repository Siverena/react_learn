import React from 'react';
import { USERS } from 'src/constants';
import { Message } from './Message';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
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
