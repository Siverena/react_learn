import { FC } from 'react';
import { Recipes } from 'src/components/Recipes/Recipes';

export const MainPage: FC = () => {
  return (
    <>
      <h2>Main page</h2>
      <Recipes></Recipes>
    </>
  );
};
