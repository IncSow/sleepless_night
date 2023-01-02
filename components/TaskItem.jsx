import { useCallback } from "react"
import { useContext } from "./ContextProvider"
import Link from "./Link"



export const TaskItem = (props) => {
  const { task } = props
  const { currentCategory, deleteTask, updateTask } = useContext()

  const handleClickCompleteTask = () => {
    const updatedTask = {
      id: task.id,
      content: task.content,
      completed: !task.completed,
    }
    updateTask(updatedTask, currentCategory)
  }

  const handleClickTaskDeletion = useCallback(
    (event) => {
      const taskId = Number.parseInt(
        event.currentTarget.getAttribute("data-task-id"),
        10
      )

      deleteTask(taskId, currentCategory)
    },
    [deleteTask, currentCategory]
  )

  return (
    <div className="flex w-50 align-center justify-start gap-5 p-5 border">
      <input
        onClick={handleClickCompleteTask}
        type="checkbox"
        defaultChecked={task.completed}
      />
      <h1>{task.content}</h1>
      <Link href={`/task/${task.id}/edit`}>Edit</Link>
      <button onClick={handleClickTaskDeletion} data-task-id={task.id}>
        {" "}
        Delete this task!
      </button>
    </div>
  )
}
