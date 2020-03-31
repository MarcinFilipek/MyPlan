import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = ({ uid }) => {
  const links = uid ? <SignedInLinks/> : <SignedOutLinks/>;
  return (<nav className={'nav-wrapper grey darken-3'}>
    <div className={'container'}>
      <Link to={'/'} className={'brand-logo'}>MyPlan</Link>
      {links}
    </div>
  </nav>);
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps, null)(Navbar);