const initialState = [
  {
    id: 0,
    title: 'Учёба',
    hex: 'red',
    route: '/Study',
    isActive: true
  },
  {
    id: 1,
    title: 'Работа',
    hex: 'green',
    route: '/Work',
    isActive: false
  },
  {
    id: 2,
    title: 'Дом',
    hex: 'blue',
    route: '/Home',
    isActive: false
  }
]

export default function dirs(state = initialState, action) {

  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      return state.map(item => 
        item.id === action.id ?
          {...item, isActive: true} : 
          {...item, isActive: false}
      )
    default:
      return state
  }
}