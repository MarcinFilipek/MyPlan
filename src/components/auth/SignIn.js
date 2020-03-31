import React, {useState} from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from "react-router-dom";

const SignIn = ({authError, signIn, uid}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = ({target}) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({target}) => {
    setPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({
      email: email,
      password: password
    });
  };

  if (uid) return <Redirect to={'/'}/>;

  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit} className={"white"}>
        <h5 className={"grey-text text-darken-3"}>Sign In</h5>
        <div className={"input-field"}>
          <label htmlFor={"email"}>Email</label>
          <input type={"email"} id={"email"} onChange={handleChangeEmail}/>
        </div>
        <div className={"input-field"}>
          <label htmlFor={"password"}>Password</label>
          <input type={"password"} id={"password"} onChange={handleChangePassword}/>
        </div>
        <div className={"input-field"}>
          <button className={"btn pink lighten-1 z-depth-0"}>Login</button>
          <div className={"red-text center"}>
            {authError && authError}
          </div>
        </div>
      </form>
    </div>);
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

