import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { TSRecipe } from 'src/common-types';
import { RECIPES_API } from 'src/constants';

export interface RecipeState {
  recipes: TSRecipe[];
  page: number;
  loading: boolean;
  error: string;
}

const initialState: RecipeState = {
  recipes: [],
  page: 3,
  loading: false,
  error: '',
};
const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipes(state, action: PayloadAction<TSRecipe[]>) {
      state.recipes = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        fetchRecipes.fulfilled,
        (state, action: PayloadAction<TSRecipe[]>) => {
          state.recipes = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchRecipes.rejected, (state, action: AnyAction) => {
        state.error = action.payload;
      });
  },
});
export const fetchRecipes: any = createAsyncThunk(
  'recipes/fetchRecipes',
  async (page) => {
    const response = await fetch(`${RECIPES_API}?page=${page}&per_page=12`);
    return await response.json();
  }
);

export const { addRecipes, changePage } = recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
