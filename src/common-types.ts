export enum Users {
  USER = 'USER',
  BOT = 'БОТИК КОТИК',
  USER2 = 'Другой пользователь',
}

export interface TSMessage {
  author: Users;
  text: string;
}
