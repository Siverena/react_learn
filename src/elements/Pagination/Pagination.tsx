import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreState } from 'src/store';
import { changePage } from 'src/store/recipes/slice';
import style from './pagination.module.scss';

export const Pagination: FC = () => {
  const numberOfPages = 10;
  const dispatch = useDispatch() as any;
  const currentPage = useSelector((store: StoreState) => store.recipes.page);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    let page = Number((e.target as HTMLElement).getAttribute('data-page'));
    if (!page) page = 1;
    dispatch(changePage(page));
  };
  const clickNext = () => {
    if (currentPage < numberOfPages) {
      dispatch(changePage(+currentPage + 1));
    }
  };
  const clickPrev = () => {
    if (currentPage > 1) {
      dispatch(changePage(+currentPage - 1));
    }
  };
  const arr = new Array(numberOfPages).fill(null);
  return (
    <>
      <div className={style['pagination']}>
        <Link
          to={`?page=${currentPage - 1}`}
          className={
            style['pagination__item'] +
            ' ' +
            style['pagination__item--prew'] +
            (currentPage <= 1 && ' ' + style['pagination__item--disabled'])
          }
          onClick={clickPrev}
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
        </Link>
        <div className={style['pagination__wrap']}>
          {arr.map((v, i) => (
            <Link
              to={`?page=${i + 1}`}
              className={
                style['pagination__item'] +
                (i + 1 == currentPage
                  ? ' ' + style['pagination__item--active']
                  : '') +
                (i + 1 == arr.length
                  ? ' ' + style['pagination__item--no-mr']
                  : '')
              }
              data-page={i + 1}
              onClick={handleClick}
              key={i + 1}
            >
              {i + 1}
            </Link>
          ))}
        </div>
        <Link
          to={`?page=${currentPage + 1}`}
          className={
            style['pagination__item'] +
            ' ' +
            style['pagination__item--next'] +
            (currentPage == numberOfPages
              ? ' ' + style['pagination__item--disabled']
              : '')
          }
          onClick={clickNext}
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
        </Link>
      </div>
    </>
  );
};
