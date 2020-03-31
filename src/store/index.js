import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import { firebase } from '../config/fbConfig';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
    thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase)
  ));
  return store;
};