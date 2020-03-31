import auth from './authReducer';
import project from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth,
  project,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;