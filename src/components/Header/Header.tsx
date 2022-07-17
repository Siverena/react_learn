import { FC } from 'react';
import { NAVIGATE } from '../../constants';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import style from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'src/store/profile/selectors';
import { auth } from 'src/store/profile/slice';

export const Header: FC = () => {
  const isAuth = useSelector(selectAuth);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    nav('/signin', { replace: true });
  };
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
        <div>
          {isAuth && (
            <button onClick={() => dispatch(auth(false))}>logout</button>
          )}
        </div>
        <div>{!isAuth && <button onClick={handleLogin}>login</button>}</div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
