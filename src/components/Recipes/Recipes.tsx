import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'src/elements/Loader/Loader';
import { Pagination } from 'src/elements/Pagination/Pagination';
import { StoreState } from 'src/store';
import { changePage, fetchRecipes } from 'src/store/recipes/slice';
import { Recipe } from './components/Recipe/Recipe';
import style from './recipes.module.scss';

export const Recipes: FC = () => {
  // const [recipes, setRecipes] = useState([]);
  // const [page] = useState('1');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  // const getFetchRecipes = async () => {
  //   setLoading(true);
  //   setError('');
  //   fetch(`${RECIPES_API}/?page=${page}&per_page=10`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecipes(data);
  //     })
  //     .catch((err: Error) => {
  //       setError(err.message);
  //     })
  //     .finally(() => setLoading(false));
  // };

  const dispatch = useDispatch() as any;
  const recipes = useSelector((store: StoreState) => store.recipes.recipes);
  const error = useSelector((store: StoreState) => store.recipes.error);
  const loading = useSelector((store: StoreState) => store.recipes.loading);
  const [searchParams, setSearchParams] = useSearchParams();
  let page = Number(searchParams.get('page'));
  if (!page || page < 1) {
    page = 1;
    // setSearchParams('page=1');
  }
  useEffect(() => {
    setSearchParams(`page=${page}`);
    dispatch(changePage(page));
    dispatch(fetchRecipes(page));
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
