import React from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route
} from "react-router-dom";

import Input from '../Input/Input'
import List from '../List/List'
import ListItem from '../List/ListItem'
import Footer from '../Footer/Footer'

import './Main.scss'

const Main = props => {
  return (
    <main className='main'>
      <h1 className='main__title'>ToDos</h1>
      <Switch>
        <Route>
          { props.dirId === null ? <h2 className='main__warning'>{props.dirs.length === 0 ? 'Список папок пуст' : 'Выберите папку' }</h2> : ''}
          <section className='tasks'>
            <Input />
            <List className='tasks__list'>
            { 
              props.tasks.map((item, index) => {
                return (
                  <ListItem key={index} className={'tasks__item'}>
                    <span 
                      className={'tasks__radio ' + (item.isCompleted ? 'tasks__radio_complete' : '')}
                      onClick={() => props.toggleTask(props.dirId, item.id)}
                    ></span>
                    <p className={'tasks__text ' + (item.isCompleted ? 'tasks__text_complete' : '')}>
                      {item.text}
                    </p>
                    <button className='tasks__delete'
                      onClick={() => props.removeTask(props.dirId, item.id)}
                    >
                    x
                    </button>
                  </ListItem>
                )
              })
            }
            </List>
            { props.todo.length === 0 ? '' : <Footer/>}
          </section>
        </Route>
      </Switch>
        
    </main>
  )
}

function mapStateToProps(state) {
  let [ dir ] = state.dirs.filter(dir => dir.isActive === true);
  let dirId = dir !== undefined ? dir.id : null
  let [ todo ] = state.todos.filter(todo => todo.id === dirId);

  let tasks;
  if (dir !== undefined) {
    switch (dir.filterType) {
      case 'active':
        tasks = todo.tasks.filter(task => !task.isCompleted);
        break;
      case 'completed':
        tasks = todo.tasks.filter(task => task.isCompleted);
        break;
      default:
        tasks = todo.tasks;
    }
  } else {
    tasks = []
  }

  return {
    todo: todo === undefined ? [] : todo.tasks,
    dirs: state.dirs,
    dirId: dirId,
    tasks: tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTask: (dirId, taskId) => dispatch(
      {
        type: 'TOGGLE_TASK',
        dirId: dirId,
        taskId: taskId
      }
    ),
    removeTask: (dirId, taskId) => dispatch(
      {
        type: 'REMOVE_TASK',
        dirId: dirId,
        taskId: taskId
      }
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);