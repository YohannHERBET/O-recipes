import { useSelector, useDispatch } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import logo from 'src/assets/logo.png';

import { updateLoginField, logIn } from '../../actions/user';

import './style.scss';

/* Objectif : récupérer les recettes préférées de l'utilisateur
x créer un emplacement dans le state pour stocker les recettes préférées
- quand l'utilisateur s'est authentifié avec succès, faire une requête sur
localhost:3001/favorites en transmettant
le token JWT stocké dans le state (dans un header Authorization, avec 'Bearer' en préfixe)
- quand on a la réponse, stocker les recettes dans le state
(- se servir des recettes préférées : par exemple nouvelle page)
*/

/*

Pour mettre en place un champ contrôlé :
- avoir dans le state un emplacement pour stocker la valeur du champ
- contrôle en lecture (valeur du state affichée dans le champ)
- contrôle en écriture (quand on saisit un caractère dans le champ, le state est
  modifié)
*/

const AppHeader = () => {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={emailValue}
        password={passwordValue}
        changeField={(newValue, identifier) => {
          // console.log(`appel à changeField, newValue=${newValue}, identifier=${identifier}`);

          // modifier la valeur dans le state => dispatch une action
          const action = updateLoginField(newValue, identifier);
          dispatch(action);
        }}
        handleLogin={() => {
          // console.log('appel à handleLogin');

          // on veut envoyer une requête à l'API => on dispatch une action qui sera
          // interceptée par un middleware
          dispatch(logIn());
        }}
        handleLogout={() => {
          console.log('appel à handleLogout');
        }}
        isLogged={isLogged}
      />
    </header>
  );
};

export default AppHeader;
