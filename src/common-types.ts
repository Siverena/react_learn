export enum Users {
  USER = 'USER',
  BOT = 'БОТИК КОТИК',
  USER2 = 'Другой пользователь',
}

export interface TSMessage {
  author: Users;
  text: string;
}
export interface TSRecipe {
  abv?: number;
  brewers_tips?: string;
  contributed_by?: string;
  description: string;
  food_pairing: [string];
  id: number;
  image_url: string;
  ingredients: TSIngredients;
  name: string;
}
export interface TSIngredients {
  malt: [{ name: string; amount: { unit: string; value: number } }];
  hops: [
    {
      name: string;
      add: string;
      attribute: string;
      amount: { unit: string; value: number };
    }
  ];
  yeast: string;
}
