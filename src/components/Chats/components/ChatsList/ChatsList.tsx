import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './chats-list.module.scss';
import { remove } from 'firebase/database';
import { getChatByID } from 'src/services/firebase';
import { TSChat } from 'src/common-types';

interface ChatsListProps {
  chats: TSChat[];
}
export const ChatsList: FC<ChatsListProps> = ({ chats }) => {
  const deleteChat = (chatId: string) => {
    remove(getChatByID(chatId));
  };
  return (
    <section className={style['chats']}>
      <List className={style['chatlist']}>
        {chats.map((chat, key) => (
          <ListItem disablePadding key={key}>
            <NavLink to={`/chats/${chat.name}`}>
              <ListItemButton>
                <ListItemText primary={chat.name} id={chat.id} />
              </ListItemButton>

              {chat.name !== 'Ботик-котик' && (
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    deleteChat(chat.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
