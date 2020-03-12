import React from 'react';
import { connect } from 'react-redux';

import List from '../List/List'
import ListItem from '../List/ListItem'

import './Footer.scss'

const Footer = props => {
  return (
    <footer className='footer'>
      <p className='footer__count'>Осталось: <strong>{ props.count }</strong></p>
        <List className='footer__list'>
          <ListItem className='footer__item'>
            <button className={'footer__btn' + (props.dir.filterType === 'all' ? ' footer__btn_active' : '')} onClick={() =>
              props.changeFilter('all', props.dir.id)
            }>Все</button>
          </ListItem>
          <ListItem className='footer__item'>
            <button className={'footer__btn' + (props.dir.filterType === 'active' ? ' footer__btn_active' : '')} onClick={() =>
              props.changeFilter('active', props.dir.id)
            }>Активные</button>
          </ListItem>
          <ListItem className='footer__item'>
            <button className={'footer__btn' + (props.dir.filterType === 'completed' ? ' footer__btn_active' : '')} onClick={() =>
              props.changeFilter('completed', props.dir.id)
            }>Завершенные</button>
          </ListItem>
        </List>
    </footer>
  )
}

function mapStateToProps(state) {
  let [ dir ] = state.dirs.filter(dir => dir.isActive === true);
  let dirId = dir !== undefined ? dir.id : null
  
  let [ todo ] = state.todos.filter(todo => todo.id === dirId);
  let count = todo.tasks.filter(item => !item.isCompleted).length;

  return {
    count: count,
    dir: dir,
    tasks: dir !== undefined ? todo.tasks : []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeFilter: (filter, id) => dispatch(
      {
        type: 'CHANGE_FILTER',
        id: id,
        filter: filter
      }
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);