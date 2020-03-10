import React from 'react';

import './SidebarList.scss'
import './TasksList.scss'

const List = props => {
  return (
    <ul className={props.className}>
      { props.children }
    </ul>
  )
}

export default List;