import { StoreState } from '../index';

export const selectRecipes = (state: StoreState) => state.recipes.recipes;
export const selectPage = (state: StoreState) => state.recipes.page;
