import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginReducer from '../reducers/loginReducer';
import { userWatcherSaga } from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(loginReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userWatcherSaga);
export default store;
