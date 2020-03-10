import React from 'react';

const ListItem = props => {
  return (
    <li className={props.className}>
      { props.children }
      <button className='delete'>x</button>
    </li>
  )
}

export default ListItem;