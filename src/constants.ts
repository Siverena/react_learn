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
  {
    id: 4,
    name: 'SignIn',
    to: '/signin',
  },
  {
    id: 5,
    name: 'SignUp',
    to: '/signup',
  },
];

export const ANSWERS = {
  '/почесать': 'ММррррр!! Смотри, что я умею: /факт',
  '/факт': '',
};
// https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html
export const FACTS_API = 'https://cat-fact.herokuapp.com/facts/random';
export const RECIPES_API = 'https://api.punkapi.com/v2/beers';
