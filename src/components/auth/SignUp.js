import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { signUp } from '../../store/actions/authActions';

const SignUp = ({ uid, signUp, authError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChangeEmail = ({target}) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({target}) => {
    setPassword(target.value);
  };

  const handleChangeFirstName = ({target}) => {
    setFirstName(target.value);
  };

  const handleChangeLastName = ({target}) => {
    setLastName(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({
      email,
      password,
      firstName,
      lastName,
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
          <label htmlFor={"firstName"}>First name</label>
          <input type={"text"} id={"firstName"} onChange={handleChangeFirstName}/>
        </div>
        <div className={"input-field"}>
          <label htmlFor={"lastName"}>Last name</label>
          <input type={"text"} id={"lastName"} onChange={handleChangeLastName}/>
        </div>
        <div className={"input-field"}>
          <button className={"btn pink lighten-1 z-depth-0"}>Sign up</button>
          <div className={"red-text center"}>
            {authError && authError}
          </div>
        </div>
      </form>
    </div>);
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

