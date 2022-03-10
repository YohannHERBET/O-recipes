import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = () => {
  const recipes = useSelector((state) => state.recipes.list);

  // je prépare une fonction qui reçoit un paramètre et détermine une string
  // en fonction de ce paramètre, il s'agit d'un objet contenant une propriété isActive
  const checkIsActive = ({ isActive }) => {
    if (isActive) {
      return 'menu-link menu-link--active';
    }
    return 'menu-link';
  };
  // avec Link ou NavLink on crée des liens pour lesquels le comportement est modifié
  // au clic on n'actualise pas la page mais on modifie bien l'adresse
  // et on ajoute une entrée dans l'historique
  // comme on a configuré des routes pour conditionner
  // l'affichage de composants en fonction de l'adresse
  // quand l'adresse change, ce qui est affiché dans l'appli change
  // NavLink est comme Link sauf qu'on peut gérer une classe qui s'appliquera
  // quand l'url correspond à la prop to
  return (
    <nav className="menu">
      <NavLink
        // on passe la fonction qui determine la classe en fonction de l'état actif ou non
        // c'est propre aux NavLink de react-router-dom
        className={checkIsActive}
        to="/"
      >
        Accueil
      </NavLink>
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={checkIsActive}
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
