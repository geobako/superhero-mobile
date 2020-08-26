import {createSelector} from 'reselect';

export const selectHeros = state => state.user.heros;

export const selectSearch = state => state.user.search;
export const selectSearchLoading = state => state.user.searchLoading;

export const selectProfile = state => state.user.profile;

export const selectFavorites = state => state.user.favorites;

export const selectIsInFavorites = id =>
  createSelector(
    selectFavorites,
    favorites => favorites.find(f => f.id === id),
  );
