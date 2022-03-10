export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

export const updateLoginField = (newValue, identifier) => ({
  type: UPDATE_LOGIN_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const LOG_IN = 'LOG_IN';

export const logIn = () => ({
  type: LOG_IN,
});

export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = (isLogged, nickname, token) => ({
  type: SAVE_USER_DATA,
  isLogged: isLogged,
  nickname: nickname,
  token: token,
});
