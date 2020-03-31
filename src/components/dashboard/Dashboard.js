import React from 'react';
import Notification from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ projects, uid, notifications }) => {
  if (!uid) return <Redirect to={'/signin'}/>;
  return(
  <div className={'dashboard container'}>
    <div className={'row'}>
      <div className={'col s12 m6'}>
        <ProjectList projects={projects}/>
      </div>
      <div className={'col s12 m5 offset-m1'}>
        <Notification notifications={notifications}/>
      </div>
    </div>
  </div>);
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications,
    uid: state.firebase.auth.uid,
  };
};


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  ])
)(Dashboard)
