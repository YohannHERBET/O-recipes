/* eslint-disable arrow-body-style */
// == Import : npm
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// un selector c'est simplement une fonction à qui on passe le state pour en déduire une valeur
import { findRecipe } from 'src/selectors/recipes';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe() {
  // via le hook useParams de react-router-dom je peux récupérer la partie changeante
  // d'une route paramétré (avec des :)
  // en plus ce qui est génial, c'est que mon composant devient dépendant de l'adresse
  // chaque fois qu'elle change, le composant est rendu à nouveau
  const parameters = useParams();
  const currentSlug = parameters.slug;
  // ici on utilise useSelector pour récuperé la recette actuelle en fonction de la liste
  // des recettes présentes dans le state
  const recipe = useSelector((state) => findRecipe(state.recipes.list, currentSlug));

  // si aucune recette n'a été trouvée on redirige vers une erreur
  if (!recipe) {
    return <Navigate to="/error" replace />;
  }
  // autrement si tout va bien on appelle des composants à qui on passe les infos de la recette
  // pour les afficher de manière sympa
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

// == Export
export default Recipe;
