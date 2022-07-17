import { FC } from 'react';
import { TSIngredients } from 'src/common-types';
import style from './ingredients.module.scss';

interface IngredientsProps {
  ingredients: TSIngredients;
}
export const Ingredients: FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <>
      <div className={style['ingredients']}>
        <p>Дрожжи: {ingredients.yeast}</p>
        <p>
          Солод:{' '}
          {ingredients.malt.map((ingredient) => ingredient.name).join(', ')}
        </p>

        <p>
          Хмель:{' '}
          {ingredients.hops.map((ingredient) => ingredient.name).join(', ')}
        </p>
      </div>
    </>
  );
};
