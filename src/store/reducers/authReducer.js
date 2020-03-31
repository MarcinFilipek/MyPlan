import produce from "immer";
import * as actions from '../actions/actions';

const initState = {
  authError: null
};

/* eslint-disable default-case */
const authReducer = (state = initState, {type, payload}) =>
  produce(state, draft => {
    switch (type) {
      case actions.LOGIN_SUCCESS:
        draft.authError = null;
        break;
      case actions.LOGIN_ERROR:
        draft.authError = payload.err.message;
        break;
      case actions.SIGNOUT_SUCCESS:
        break;
      case actions.SIGNUP_SUCCESS:
        draft.authError = null;
        break;
      case actions.SIGNUP_ERROR:
        draft.authError = payload.err.message;
        break;
    }
  });

export default authReducer;