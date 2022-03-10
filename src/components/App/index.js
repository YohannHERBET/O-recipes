import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import { fetchRecipes } from '../../actions/recipes';

import './style.scss';

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.recipes.loading);
  const error = useSelector((state) => state.recipes.error);

  // le hook useLocation fourni react-router-dom rend mon composant dépendant le l'url
  // chaque fois que l'url change le composant est recalculé / rerendu
  const location = useLocation();
  // pour chaque rendu ou l'url a changé
  useEffect(() => {
    // on ramène en haut de page
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text="Erreur lors de la récupération des recettes, revenez plus tard." />;
  }
  // Avec des Route on conditionne le rendu de nos composants en fonction de l'adresse actuelle
  // on configure chaque route avec une prop path et une prop element
  // pour déclencher le rendu de l'élement quand l'adresse actuelle correspond au path
  // en mettant *, peu importe l'adresse actuelle, l'élement sera rendue,
  // MAIS comme on a mis nos routes dans un Routes, une seule route pourra s'activer à la fois,
  // la plus précise
  // dans une route on peut mettre une partie changeante, on fait une route paramétrée
  // on le fait avec :, ex /recipe/:slug sera activée quand on est sur /recipe/nimportequoi

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
