import {
  createContext,
  useCallback,
  useContext as useNativeContext,
  useState,
} from "react"


const initialState = [
  {
    name: "Javascript list!",
    id: 0,
    todo_tasks: [
      {
        id: 0,
        content: "javascript-todo",
        completed: false,
      },
      {
        id: 1,
        content: "react-todo",
        completed: true,
      },
    ],
  },
]

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [nextTaskId, setNextTaskId] = useState(1)

  const getNextTaskId = useCallback(() => {
    setNextTaskId(nextTaskId + 1)
    return nextTaskId
  }, [nextTaskId])

  const [nextTodoId, setNextTodoId] = useState(0)

  const getNextTodoId = useCallback(() => {
    setNextTodoId(nextTodotId + 1)

    return nextTodoId
  }, [nextTodoId])

  const [state, setState] = useState(initialState)
  const createTask = useCallback(
    (todo, currentCategory) => {
      const newState = state.slice()
      newState[currentCategory].todo_tasks.push({id: getNextTaskId(), content: todo, completed: false})
      setState((state) => newState)
    },
    [getNextTaskId]
  )

  const deleteTask = useCallback(
    (taskId, currentCategory) => {
    const newState = state.slice()
    newState[currentCategory].todo_tasks = newState[currentCategory].todo_tasks.filter(({ id }) => id !== taskId)
     setState((state) => newState)
    },[]
  )

  const deleteTodo = useCallback(
    (todoId) => {
      setState((state) => state.filter( ({id}) => id != todoId ))
    }, []
  )


  const updateTodoName = useCallback(
    (todoId, newName) => {
      setState((state) => state.map(todo => todo.id === todoId ? {name: newName, id: todo.id, todo_tasks: todo.todo_tasks} : todo))
    }, []
  )

  const createTodo = useCallback(
    (todoName) => {
      setState((state) => 
      [...state, 
        {
          name: todoName,
          id: getNextTodoId,
          todo_tasks: []
        }
      ])
    }, [getNextTodoId]
  )

  const updateTask = useCallback((updatedTask, currentCategory) => {
    const newState = state.slice()
    newState[currentCategory].todo_tasks = newState[currentCategory].todo_tasks.map((task) => task.id === updatedTask.id ? updatedTask : task)
    setState((state) => newState)
    }, []
  )

  return (
    <Context.Provider
      {...props}
      value={{
        state,
        createTask,
        deleteTask,
        updateTask,
        deleteTodo,
        updateTodoName,
        createTodo
      }}
    />
  )
}

export default ContextProvider
