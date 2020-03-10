const initialState = [
  {
    id: 0,
    tasks: [
      {
        id: 0,
        text: 'React',
        isCompleted: true
      },
      {
        id: 1,
        text: 'Redux',
        isCompleted: false
      }
    ]
  },
  {
    id: 1,
    tasks: [
      {
        id: 0,
        text: 'React2',
        isCompleted: false
      },
      {
        id: 1,
        text: 'Redux2',
        isCompleted: false
      }
    ]
  },
  {
    id: 2,
    tasks: [
      {
        id: 0,
        text: 'React3',
        isCompleted: false
      },
      {
        id: 1,
        text: 'Redux3',
        isCompleted: false
      }
    ]
  }
]

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