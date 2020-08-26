import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import types from '../types';
import {
  getFavoritesFromStorage,
  toggleFavoriteToStorage,
} from '../../services/favoriteService';

//workers
function* setFavorites(action) {
  try {
    const favorites = yield call(getFavoritesFromStorage);
    yield put({type: types.SET_FAVORITES_SUCCESS, payload: favorites});
  } catch (e) {
    yield put({type: types.SET_FAVORITES_ERROR});
  }
}

function* toggleFavoriteSaga(action) {
  try {
    yield call(toggleFavoriteToStorage, action.payload);
    yield put({type: types.TOGGLE_FAVORITE_SUCCESS, payload: action.payload});
  } catch (e) {
    yield put({type: types.TOGGLE_FAVORITE_ERROR});
  }
}

//watchers

export function* getFavorites() {
  yield takeLatest(types.SET_FAVORITES, setFavorites);
}

export function* addFavorite() {
  yield takeLatest(types.TOGGLE_FAVORITE, toggleFavoriteSaga);
}

//root
function* favoriteSaga() {
  yield all([fork(getFavorites), fork(addFavorite)]);
}
export default favoriteSaga;
