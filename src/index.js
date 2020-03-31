import React from 'react';
import './index.css';
import { render } from 'react-dom';
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom';
import {Provider, useSelector} from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import configureStore from './store';
import { firebase } from './config/fbConfig';
import { createFirestoreInstance } from "redux-firestore";

const store = configureStore();

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth)){
    return(<div>Loading...</div>);
  }
  return children;
};

render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <AuthIsLoaded>
          <App/>
        </AuthIsLoaded>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
