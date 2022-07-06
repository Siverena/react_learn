import { FC } from 'react';
import style from './pagination.module.scss';

export const Pagination: FC = () => {
  return (
    <>
      <div className={style['pagination']}>
        <a
          href="#"
          className={
            style['pagination__item'] + ' ' + style['pagination__item--prew']
          }
        >
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z"
              fill="black"
            ></path>
          </svg>
        </a>
        <div className={style['pagination__wrap']}>
          <a
            href="#"
            className={
              style['pagination__item'] +
              ' ' +
              style['pagination__item--active']
            }
          >
            1{' '}
          </a>
          <a href="#" className={style['pagination__item']}>
            2{' '}
          </a>
          <a href="#" className={style['pagination__item']}>
            3{' '}
          </a>
          <a href="#" className={style['pagination__item']}>
            4{' '}
          </a>
          <a href="#" className={style['pagination__item']}>
            5{' '}
          </a>
          <a
            href="#"
            className={
              style['pagination__item'] +
              ' ' +
              style[' pagination__item--no-mr']
            }
          >
            6{' '}
          </a>
        </div>
        <a
          href="#"
          className={
            style['pagination__item'] + ' ' + style[' pagination__item--next']
          }
        >
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
              fill="black"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
};
