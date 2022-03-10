import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './style.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  /** valeur dans le champ "e-mail" */
  email: PropTypes.string.isRequired,
  /** valeur dans le champ "password" */
  password: PropTypes.string.isRequired,
  /** appelé quand un caractère est saisi dans l'un des champs */
  changeField: PropTypes.func.isRequired,
  /** appelé quand on soumet le formulaire */
  handleLogin: PropTypes.func.isRequired,
  /** appelé quand on est en mode connecté et qu'on clique sur le bouton "Déconnexion" */
  handleLogout: PropTypes.func.isRequired,
  /** Choix entre le mode connecté (affichage d'un message) et le mode pas connecté
   * (affichage d'un formulaire)
   */
  isLogged: PropTypes.bool,
  /** Message affiché en mode connecté */
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
