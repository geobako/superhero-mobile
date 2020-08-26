import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import {createLogger} from 'redux-logger';

const logger = createLogger({});

const rootReducer = combineReducers({
  user: reducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middleware));
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
