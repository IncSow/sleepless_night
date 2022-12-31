import Head from "next/head"
import { useCallback } from "react"
import { useContext } from "../components/ContextProvider"
import Link from "../components/Link"
import styles from "../styles/Home.module.css"

export const ToDoListItems = (props) => {
  const { list } = props

  return (
    <div>
      {list.map((v) => (
        <ToDoItem key={v.id} task={v}>
          {" "}
        </ToDoItem>
      ))}
    </div>
  )
}

export const ToDoItem = (props) => {
  const { task } = props
  const { deleteTask } = useContext()
  const handleClickTaskDeletion = useCallback(
    (event) => {
      const taskId = Number.parseInt(
        event.currentTarget.getAttribute("data-task-id"),
        10
      )

      deleteTask(taskId, 0)
    },
    [deleteTask]
  )
  const category = { id: 0 }

  return (
    <div className="flex w-50 align-center justify-start gap-5 p-5 border">
      <input type="checkbox" defaultChecked={task.completed} />
      <h1>{task.content}</h1>
      <Link href={`/category/{${category.id}/tasks/${task.id}/edit`}>Edit</Link>
      <button onClick={handleClickTaskDeletion} data-task-id={task.id}>
        {" "}
        Delete this task!
      </button>
    </div>
  )
}

export default function Home() {
  const { state } = useContext()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToDoListItems list={state[0].todo_tasks}></ToDoListItems>
    </div>
  )
}
