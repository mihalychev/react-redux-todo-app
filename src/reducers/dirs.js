const initialState = []

export default function dirs(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      return state.map(item => 
        item.id === action.id ?
          {...item, isActive: true} : 
          {...item, isActive: false}
      )
    case 'ADD_DIR':
      return [
        ...state,
        {
          id: state.reduce((maxId, dir) => Math.max(dir.id, maxId), -1) + 1,
          title: action.value,
          hex: action.hex,
          route: `/${action.value + '_' + state.reduce((maxId, dir) => Math.max(dir.id, maxId), -1) + 1}`,
          isActive: false
        }
      ]
    case 'REMOVE_DIR':
      return state.filter(dir => dir.id !== action.id)
    default:
      return state
  }
}