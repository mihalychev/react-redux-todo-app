import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import List from '../List/List'
import ListItem from '../List/ListItem'
import Modal from '../Modal/Modal'

import './Sidebar.scss'

const Sidebar = props => {
  let dirInput = React.createRef();

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
                <button className='delete' onClick={() => props.removeDir(item.id)}>x</button>
              </ListItem>
            )
          })
        }
      </List>
      <button className='sidebar__add' 
        onClick={() => props.toggleModal()}
      >
        <span className='plus'>+</span>Добавить папку  
      </button>
      <Modal className={'modal ' + (props.modal.isHidden === true ? 'modal_hidden' : '')} >
        <input className='modal__input' ref={dirInput} type='text' placeholder='Название папки' onChange={(event) => props.setInputValue(event.target.value)} />
        <List className='modal__list'>
          {
            props.modal.colors.map((item, index) => {
              return (
                <ListItem key={index} className='modal__item'>
                  <span 
                    className='modal__mark' 
                    style={{backgroundColor: item.hex, border: item.isActive === true ? '2px solid #000' : `2px solid ${item.hex}`}}
                    onClick={() => props.toggleColor(item.id)}
                  >
                  </span>
                </ListItem>
              )
            })
          }
        </List>
        <button className='modal__btn' onClick={() => {
          props.addDir(props.modal.title, ...props.modal.colors.filter(color => color.isActive));
          dirInput.current.value = '';
        }}
        >
        Добавить
        </button>
        <button className='modal__close' onClick={() => props.toggleModal()}>x</button>
      </Modal>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    dirs: state.dirs,
    modal: state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDir: id => dispatch(
      {
        type: 'TOGGLE_ACTIVE',
        id: id
      }
    ),
    addDir: (value, color) => {
      dispatch(
        {
          type: 'ADD_DIR',
          value: value,
          hex: color.hex
        }
      )
    },
    removeDir: id => {
      dispatch(
        {
          type: 'REMOVE_DIR',
          id: id
        }
      )
    },
    toggleModal: () => dispatch(
      {
        type: 'TOGGLE_MODAL'
      }
    ),
    toggleColor: id => dispatch(
      {
        type: 'TOGGLE_COLOR',
        id: id
      }
    ),
    setInputValue: value => dispatch(
      {
        type: 'SET_INPUT_VALUE',
        value: value
      }
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);