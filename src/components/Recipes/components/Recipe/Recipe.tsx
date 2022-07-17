import { FC } from 'react';
import { TSRecipe } from 'src/common-types';
import { Ingredients } from './components/Ingredients/Ingredients';
import style from './recipe.module.scss';

interface RecipeProps {
  recipe: TSRecipe;
}
export const Recipe: FC<RecipeProps> = ({ recipe }) => {
  console.log();
  return (
    <>
      <li className={style.recipe}>
        <header className={style['recipe__header']}>
          <div className={style['recipe__img-wrap']}>
            <img
              src={recipe.image_url}
              alt=""
              className={style['recipe__img']}
            />
          </div>
        </header>
        <div className={style['recipe__body']}>
          <div className={style['recipe__head']}>
            <h2 className={style['recipe__title']}>{recipe.name}</h2>
            <div className={style['recipe__description']}>
              {recipe.description}
            </div>
          </div>
          <Ingredients ingredients={recipe.ingredients} />
        </div>
      </li>
    </>
  );
};
