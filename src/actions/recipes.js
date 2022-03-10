export const FETCH_RECIPES = 'FETCH_RECIPES';

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const SAVE_RECIPES = 'SAVE_RECIPES';

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes: recipes,
});

export const DISPLAY_ERROR = 'DISPLAY_ERROR';

export const displayError = () => ({
  type: DISPLAY_ERROR,
});

export const FETCH_FAVORITES = 'FETCH_FAVORITES';

export const fetchFavorites = () => ({
  type: FETCH_FAVORITES,
});

export const SAVE_FAVORITES = 'SAVE_FAVORITES';

export const saveFavorites = (favorites) => ({
  type: SAVE_FAVORITES,
  favorites: favorites,
});
