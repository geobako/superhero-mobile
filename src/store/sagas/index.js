import heroSaga from './heroSaga';
import favoriteSaga from './FavoriteSaga';
import {all, fork} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(heroSaga), fork(favoriteSaga)]);
}
