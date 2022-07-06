import { FC, useEffect, useState } from 'react';
import { RECIPES_API } from 'src/constants';
import { Loader } from 'src/elements/Loader/Loader';
import { Pagination } from 'src/elements/Pagination/Pagination';
import { Recipe } from './components/Recipe/Recipe';
import style from './recipes.module.scss';

export const Recipes: FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [page] = useState('1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setLoading(true);
    setError('');
    fetch(`${RECIPES_API}/?${page}=&per_page=10`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [page]);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <ul className={style['recipes']}>
            {recipes?.map((recipe, id) => (
              <Recipe recipe={recipe} key={id} />
            ))}
          </ul>
          <Pagination />
        </>
      )}
      {error && <p>{error}</p>}
    </>
  );
};
