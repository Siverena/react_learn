import { FC } from 'react';
import { NAVIGATE } from '../../constants';
import { NavLink, Outlet } from 'react-router-dom';
import style from './header.module.scss';

export const Header: FC = () => {
  return (
    <>
      <header className={style['main-header']}>
        <ul>
          {NAVIGATE.map((link) => {
            if (link) {
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
          })}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
