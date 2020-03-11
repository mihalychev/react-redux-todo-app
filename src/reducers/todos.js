const initialState = []

export default function dirs(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_TASK':
      return state.map(todo => 
        todo.id === action.dirId ?
        {...todo, tasks: todo.tasks.map(task =>
          task.id === action.taskId ?
          {...task, isCompleted: !task.isCompleted} :
          task
        )} :
        todo
      )
    case 'ADD_TASK':
      return state.map(todo => 
        todo.id === action.dirId ? 
        {...todo, 
          tasks: [...todo.tasks, {
            id: todo.tasks.length,
            text: action.text,
            isCompleted: false
          }]
        } : todo
      )
    case 'ADD_DIR':
      return [
        ...state, {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          tasks: []
        }
      ]
    case 'REMOVE_DIR':
      return state.filter(todo => todo.id !== action.id)
    case 'REMOVE_TASK':
      return state.map(todo => 
        todo.id === action.dirId ? 
        {...todo, 
          tasks: todo.tasks.filter(task => task.id !== action.taskId)
        } : todo
      )
    default:
      return state
  }
}