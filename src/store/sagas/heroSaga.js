import {call, put, delay, takeLatest} from 'redux-saga/effects';
import types from '../types';
import {requestHeros} from '../../services/searchService';

function* getHeros(action) {
  try {
    yield put({type: types.SET_INPUT, payload: action.payload});
    yield delay(300);
    const heros = yield call(requestHeros, action.payload);
    yield put({type: types.GET_HEROS_SUCCESS, payload: heros});
  } catch (e) {
    yield put({type: types.GET_HEROS_ERROR});
  }
}

function* heroSaga() {
  yield takeLatest(types.GET_HEROS, getHeros);
}

export default heroSaga;
