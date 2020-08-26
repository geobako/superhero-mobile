import types from './types';

export const getHeroes = search => ({
  type: types.GET_HEROS,
  payload: search,
});

export const getHeroesSuccess = data => ({
  type: types.GET_HEROS_SUCCESS,
  payload: data,
});

export const getHeroesError = () => ({
  type: types.GET_HEROS_ERROR,
});

export const setFavorites = () => ({
  type: types.SET_FAVORITES,
});

export const toggleFavorite = favorite => ({
  type: types.TOGGLE_FAVORITE,
  payload: favorite,
});

export const toggleFavoriteSuccess = favorite => ({
  type: types.TOGGLE_FAVORITE_SUCCESS,
  payload: favorite,
});
