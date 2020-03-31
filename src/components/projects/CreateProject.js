import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from "react-router-dom";

const CreateProject = ({history, createProject, uid}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = ({target}) => {
    setTitle(target.value);
  };

  const handleChangeContent = ({target}) => {
    setContent(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      title,
      content,
    };
    createProject(project);
    history.push('/');
  };
  if (!uid) return <Redirect to={'/signin'}/>;
  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit} className={"white"}>
        <h5 className={"grey-text text-darken-3"}>Create project.</h5>
        <div className={"input-field"}>
          <label htmlFor={"title"}>Title</label>
          <input type={"text"} id={"title"} onChange={handleChangeTitle}/>
        </div>
        <div className={"input-field"}>
          <label htmlFor={"content"}>Content</label>
          <textarea
            id={"content"}
            onChange={handleChangeContent}
            className={"materialize-textarea"}
          >
        </textarea>
        </div>
        <div className={"input-field"}>
          <button className={"btn pink lighten-1 z-depth-0"}>Create</button>
        </div>
      </form>
    </div>);
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);


