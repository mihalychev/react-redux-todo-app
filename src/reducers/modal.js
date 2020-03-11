const initialState = {
  isHidden: true,
  title: '',
  colors: [
    {
      id: 0,
      hex: 'red',
      isActive: true
    },
    {
      id: 1,
      hex: 'green',
      isActive: false
    },
    {
      id: 2,
      hex: 'blue',
      isActive: false
    },
    {
      id: 3,
      hex: 'orange',
      isActive: false
    }
  ]
}

export default function modal(state = initialState, action) {

  switch (action.type) {
    case 'TOGGLE_MODAL':
      return Object.assign({}, state, {isHidden: !state.isHidden})
    case 'TOGGLE_COLOR':
      return {
        ...state, colors: state.colors.map(color => {
          if (color.id === action.id) {
            return {...color, isActive: true}
          } else {
            return {...color, isActive: false}
          }
        })
      }
    case 'SET_INPUT_VALUE':
      return Object.assign({}, state, {title: action.value})
    default:
      return state
  }
}