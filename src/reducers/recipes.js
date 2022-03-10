// import data from 'src/data';

import { SAVE_RECIPES, DISPLAY_ERROR, SAVE_FAVORITES } from '../actions/recipes';
import { LOG_IN, SAVE_USER_DATA } from '../actions/user';

export const initialState = {
  list: [],
  loading: true,
  error: false,
  // recettes préférées de l'utilisateur
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      // on détermine un nouveau state contenant la liste des recettes
      // le state est la source de vérité, il détient les infos qu'on va pouvoir
      // lire et afficher dans l'application
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    case DISPLAY_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case LOG_IN:
      // on veut que le loader s'affiche quand on a envoyé la requête d'authentification
      return {
        ...state,
        loading: true,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        loading: false,
      };
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    default:
      return state;
  }
};

export default reducer;
