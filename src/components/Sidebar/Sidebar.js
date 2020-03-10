import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import List from '../List/List'
import ListItem from '../List/ListItem'

import './Sidebar.scss'

const Sidebar = props => {
  return (
    <section className='sidebar'>
      <h2 className='sidebar__title'>Все задачи</h2>
      <List className='sidebar__list'>
        {
          props.dirs.map((item, index) => {
            return (
              <ListItem key={index} className={'sidebar__item ' + (item.isActive ? 'active' : '')}>
                <Link
                  to={item.route}
                  className='sidebar__link' 
                  href={item.route}
                  onClick={() => props.toggleDir(item.id)}
                >
                  <span className='sidebar__mark' style={{background: item.hex}}></span>
                  {item.title}
                </Link>
              </ListItem>
            )
          })
        }
      </List>
      <button className='sidebar__add'>
        <span className='plus'>+</span>Добавить папку  
      </button>
      <div className='modal'>
        <input/>
        <List>

        </List>
        <button>Добавить</button>
      </div>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    dirs: state.dirs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDir: id => dispatch(
      {
        type: 'TOGGLE_ACTIVE',
        id: id
      }
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);