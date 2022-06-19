import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './chats-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat } from 'src/store/messages/slice';
import { selectChats } from 'src/store/messages/selectors';

export const ChatsList: FC = () => {
  const dispatch = useDispatch();
  const chats = useSelector(
    selectChats,
    (prev, next) => prev.length === next.length
  );

  return (
    <section className={style['chats']}>
      <List className={style['chatlist']}>
        {chats.map((chat, key) => (
          <ListItem disablePadding key={key}>
            <NavLink to={`/chats/${chat.name}`}>
              <ListItemButton>
                <ListItemText primary={chat.name} id={chat.id} />
              </ListItemButton>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  dispatch(deleteChat(chat.name));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
