import { useRouter } from "next/router.js"
import { useCallback } from "react"
import { useContext } from "../../../components/ContextProvider"
import Head from "next/head"
import { Form } from "../../../components/TaskEditingForm"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      taskId: Number.parseInt(params.taskId, 10),
    },
  },
})

const EditTaskPage = (props) => {
  const {
    params: { taskId },
  } = props

  const { updateTask, currentCategory, state } = useContext()
  const currentTask = state[currentCategory].todo_tasks.find(
    ({ id }) => id === taskId
  )
  const router = useRouter()
  const handleSubmit = useCallback(
    (task) => {
      updateTask(task, currentCategory)
      router.push("/")
    },
    [router, updateTask, currentCategory]
  )

  return (
    <div>
      <Head>
        <title>Editing {currentTask.content}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form
        onSubmit={handleSubmit}
        initialValues={currentTask}
        title="Edit this task"
      />
    </div>
  )
}

export default EditTaskPage
