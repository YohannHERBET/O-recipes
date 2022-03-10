import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import recipeApiMiddleware from 'src/middlewares/recipeApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipeApiMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
