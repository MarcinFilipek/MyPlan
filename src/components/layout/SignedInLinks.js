import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut, firstName, lastName}) => {
  return (<ul className={'right'}>
    <li><NavLink to={'/create'}>New Project</NavLink></li>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <li><a onClick={signOut} >Log Out</a></li>
    <li>
      <NavLink to={'/'} className={'btn btn-floating pink lighten-1'}>
        {firstName && firstName[0] + lastName[0]}
      </NavLink>
    </li>
  </ul>);
};


const mapStateToProps = (state) => {
  return {
    firstName: state.firebase.profile.firstName,
    lastName: state.firebase.profile.lastName,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);