import produce from 'immer';
import * as actions from '../actions/actions';

const initState = {
  projects: [
    {id: 1, title: 'Project 1', content: 'oosaofos hfoihso fsdnon vondvo sdonon'},
    {id: 2, title: 'Project 2', content: 'oosaofos hfoihso fsdnon vondvo sdonon'},
    {id: 3, title: 'Project 3', content: 'oosaofos hfoihso fsdnon vondvo sdonon'},
  ],
};

/* eslint-disable default-case */
const projectReducer = (state = initState, {type, payload}) =>
  produce(state, draft => {
    switch(type) {
      case actions.CREATE_PROJECT:
        console.log('created project', payload.project);
        break;
      case actions.CREATE_PROJECT_ERROR:
        console.log('created project error', payload.err);
        break;
    }
  });


export default projectReducer;