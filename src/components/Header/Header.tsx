import { FC } from 'react';
import { NAVIGATE } from '../../constants';
import { NavLink, Outlet } from 'react-router-dom';
import style from './header.module.scss';
import { useSelector } from 'react-redux';
import { selectAuth } from 'src/store/profile/selectors';
import { logOut } from 'src/services/firebase';

export const Header: FC = () => {
  const isAuth = useSelector(selectAuth);
  const handleLogout = async () => {
    await logOut();
  };
  return (
    <>
      <header className={style['main-header']}>
        <ul>
          {NAVIGATE.map((link) => {
            if (link) {
              if (!(isAuth && (link.id === 4 || link.id === 5))) {
                return (
                  <li key={link.id}>
                    <NavLink
                      to={link.to}
                      style={({ isActive }) => ({
                        color: isActive ? '#f16d7f' : '#ffffff',
                      })}
                      className={({ isActive }) =>
                        isActive ? style['active'] : ''
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              }
            }
          })}
          {isAuth && (
            <li>
              <a
                style={{ color: '#ffffff', cursor: 'pointer' }}
                onClick={handleLogout}
              >
                Выход
              </a>
            </li>
          )}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
