import React from 'react';
import { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import style from './chats-list.module.scss';
import { TSChat } from '../../../../common-types';

interface ChatsListProps {
  chats: TSChat[];
}

export const ChatsList: FC<ChatsListProps> = ({ chats }) => (
  <section className={style['chats']}>
    <List>
      {chats.map((chat, key) => (
        <ListItem disablePadding key={key}>
          <ListItemButton>
            <ListItemText primary={chat.name} id={chat.id} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </section>
);
