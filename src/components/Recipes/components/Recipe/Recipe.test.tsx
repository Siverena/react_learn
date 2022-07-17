import { render } from '@testing-library/react';
import { Recipe } from './Recipe';

import '@testing-library/jest-dom';
import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/store';
import { Provider } from 'react-redux';
import { TSRecipe } from 'src/common-types';

describe('MessageList', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    const recipe: TSRecipe = {
      abv: 8,
      brewers_tips: 'string',
      contributed_by: 'string',
      description: 'string',
      food_pairing: ['string'],
      id: 5,
      image_url: 'string',
      ingredients: {
        malt: [{ name: 'string', amount: { unit: 'string', value: 5 } }],
        hops: [
          {
            name: 'string',
            add: 'string',
            attribute: 'string',
            amount: { unit: 'string', value: 5 },
          },
        ],
        yeast: 'string',
      },
      name: 'string',
    };
    render(
      <Provider store={store}>
        <Recipe recipe={recipe} />
      </Provider>
    );
  });
});
