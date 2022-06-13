import { Users } from './common-types';

export const USERS = {
  user: Users.USER,
  bot: Users.BOT,
  another: Users.USER2,
};

export const NAVIGATE = [
  {
    id: 1,
    name: 'Main',
    to: '/',
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile',
  },
  {
    id: 3,
    name: 'Chats',
    to: '/chats',
  },
];
