import * as actions from './actions';

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const {email, password} = credentials;
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      () => dispatch({
        type: actions.LOGIN_SUCCESS
      })
    ).catch(
      (err) => dispatch({
        type: actions.LOGIN_ERROR,
        payload: {
          err,
        },
      })
    );
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() =>
      dispatch({
        type: actions.SIGNOUT_SUCCESS,
      })
    );
  };
};

export const signUp = ({email, password, firstName, lastName}) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log(email, password, firstName, lastName);
    firebase.auth().createUserWithEmailAndPassword(
      email,
      password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName,
        lastName,
      });
    }).then(()=>{
      dispatch({
        type: actions.SIGNUP_SUCCESS,
      });
    }).catch(err => {
      dispatch({
        type: actions.SIGNUP_ERROR,
        payload: {
          err,
        }
      })
    });
  };
};