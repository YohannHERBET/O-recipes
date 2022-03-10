import axios from 'axios';

import {
  FETCH_RECIPES,
  saveRecipes,
  displayError,
  FETCH_FAVORITES,
  fetchFavorites,
  saveFavorites,
} from '../actions/recipes';
import {
  LOG_IN,
  saveUserData,
} from '../actions/user';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      // on appelle l'api pour récupérer les recettes
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // une fois récupérées
          const recipes = response.data;
          // on dispatch une action véhiculant ces recettes pour les emmener au reducer
          // et les mettre dans le state
          store.dispatch(saveRecipes(recipes));
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(displayError());
        });

      break;

    case LOG_IN:
      axios.post(
        'http://localhost:3001/login',
        // on transmet un objet qui contient les données
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          console.log(response);

          // console.log(response.data.pseudo);

          // on veut enregistrer les informations de la réponse dans le state
          const newAction = saveUserData(
            response.data.logged,
            response.data.pseudo,
            response.data.token,
          );
          store.dispatch(newAction);

          // on déclenche la récupération des recettes préférées
          store.dispatch(fetchFavorites());

          // => l'action fetch_favorites va arriver en entrée du store, elle va
          // passer par les middlewares puis par les reducers.
          // Intérêt de séparer le traitement dans une nouvelle action : on pourra
          // facilement déclencher ce traitement depuis un nouveau bouton par exemple
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case FETCH_FAVORITES:
      axios.get(
        // URL
        'http://localhost:3001/favorites',
        // options, notamment les headers => ici on envoie le token JWT qui nous
        // a été fourni par le serveur au moment de l'authentification
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(saveFavorites(response.data.favorites));
        })
        .catch((error) => {
          // TODO afficher un message d'erreur
          console.warn(error);
        });

      break;

    default:
  }

  next(action);
};

export default middleware;

/*
if (laVariable === 1) {
  console.log('A');
} else if (laVariable === 2) {
  console.log('B');
} else {
  console.log('C');
}

switch : aiguillage entre des traitements par rapport à la valeur d'une variable
switch(laVariable) {
  case 1 : console.log('A');
  case 2 : console.log('B');
  default: console.log('C');
}

si valeur 1 : affiche A B C
si valeur 2 : affiche B C

si on veut que le traitement se limite au cas précis : on ajoute "break", qui a
pour effet de terminer le traitement du switch

switch(laVariable) {
  case 1 : console.log('A'); break;
  case 2 : console.log('B'); break;
  default: console.log('C');
}

si valeur 1 : affiche A
si valeur 2 : affiche B
*/
