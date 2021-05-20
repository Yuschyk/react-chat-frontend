import React from 'react';

import { Register } from '../pages/Register';
import { useSelector } from 'react-redux';
import { Redirect, Route, } from 'react-router';
import { Login } from '../pages/Login';
import { Chat } from '../pages/Chat';

import { Toast } from '../components/Toast';

const App = () => {
  const isAuth = useSelector(state => state.app.isAuth);
  return (
    <>
      <Route exact path='/login'
             render={() => (!isAuth ? <Login/> : <Redirect to="/"/>)}
      />
      <Route exact path='/register'
             render={() => (!isAuth ? <Register/> : <Redirect to="/"/>)}
      />
      <Route exact path='/'
             render={() => (isAuth ? <Chat/> : <Redirect to="/register"/>)}
      />
      <Toast/>
    </>
  );
};

export {
  App
};
