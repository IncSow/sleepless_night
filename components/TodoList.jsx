import { useCallback } from "react"
import { useContext } from "./ContextProvider"
import Link from "./Link"


export const TodoList = () => {
  const { currentCategory, state, setCurrentCategory, deleteTodo } =
    useContext()
  const handleClick = useCallback(
    (event) => {
      const categoryId = Number.parseInt(
        event.currentTarget.getAttribute("data-category-index"),
        10
      )
      setCurrentCategory(categoryId)
    },
    [setCurrentCategory]
  )

  const handleClickTodoDeletion = useCallback(
    (event) => {
      const todoId = Number.parseInt(
        event.currentTarget.getAttribute("data-todo-id"),
        10
      )
      deleteTodo(todoId)
    },
    [deleteTodo]
  )

  return (
    <div className="flex gap-3 p-5">
      {state.map((state, index) => (
        <div
          onClick={handleClick}
          key={index}
          data-category-index={index}
          className={index === currentCategory ? "border-red" : "border"}
        >
          <h3>{state.name}</h3>
          <div>
            <span>
              {
                state.todo_tasks.filter(({ completed }) => Boolean(completed))
                  .length
              }{" "}
              / {state.todo_tasks.length}
            </span>
            <Link href={`/category/${state.id}/edit`}>Edit</Link>
            <button onClick={handleClickTodoDeletion} data-todo-id={state.id}>
              Delete.
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
