import React from 'react';
import { connect } from 'react-redux';

import './Input.scss';

const Input = props => {
  return (
    <input className='tasks__input' type='text' placeholder='Добавьте задачу' onKeyDown={
      (event) => {
        if (event.keyCode === 13) {
          props.addTask(props.dirId, event.target.value);
          event.target.value = '';
        }
        
      }
    }
    />
  )
}

function mapStateToProps(state) {
  let [ dir ] = state.dirs.filter(dir => dir.isActive === true);
  return {
    dirId: dir.id
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (dirId, text) => dispatch(
      {
        type: 'ADD_TASK',
        dirId: dirId,
        text: text
      }
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);