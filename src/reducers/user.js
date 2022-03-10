import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA } from 'src/actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        logged: action.isLogged,
        nickname: action.nickname,
        token: action.token,
        // sécurité : on en profite pour effacer les identifiants dans le state
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
