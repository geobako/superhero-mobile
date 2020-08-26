import types from './types';
import {showMessage} from 'react-native-flash-message';

const initialState = {
  heros: [],
  favorites: [],
  profile: {},
  search: '',
  searchLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INPUT:
      return {
        ...state,
        search: action.payload,
        searchLoading: true,
      };
    case types.GET_HEROS_SUCCESS:
      return {
        ...state,
        heros: action.payload ? action.payload : [],
        searchLoading: false,
      };
    case types.GET_HEROS_ERROR:
      return {
        ...state,
        heros: [],
        searchLoading: false,
      };
    case types.SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case types.SET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload,
      };

    case types.TOGGLE_FAVORITE_SUCCESS:
      let favorites = [...state.favorites];
      if (favorites.find(el => el.id === action.payload.id)) {
        favorites = favorites.filter(f => f.id !== action.payload.id);
        showMessage({
          message: `${action.payload.name} removed`,
          type: 'info',
        });
      } else {
        favorites.push(action.payload);
        showMessage({
          message: `${action.payload.name} added`,
          type: 'success',
        });
      }
      return {
        ...state,
        favorites: favorites,
      };
    default:
      return state;
  }
};

export default rootReducer;
