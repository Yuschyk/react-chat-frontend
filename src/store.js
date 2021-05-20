import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { appReducer } from './App/appReducer';
import { chatReducer } from './pages/Chat/chatReducer';
import { registerReducer } from './pages/Register/registerReducer';
import { loginReducer } from './pages/Login/loginReducer';

const rootReducer = combineReducers({
  app: appReducer,
  chat: chatReducer,
  register: registerReducer,
  login: loginReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

export {
  store
};
