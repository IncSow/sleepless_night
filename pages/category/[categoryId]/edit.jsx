import { useRouter } from "next/router.js"
import { useCallback } from "react"
import { useContext } from "../../../components/ContextProvider"
import Head from "next/head"
import { Form } from "../../../components/TaskEditingForm"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      categoryId: Number.parseInt(params.categoryId, 10),
    },
  },
})

const EditTodoPage = (props) => {
  const {
    params: { categoryId },
  } = props

  const { updateTodo, state } = useContext()
  const currentTodo = state.find(({ id }) => id === categoryId)
  const router = useRouter()
  const handleSubmit = useCallback(
    ({ name }) => {
      updateTodo(currentTodo.id, name)
      router.push("/")
    },
    [router, updateTodo, currentTodo]
  )

  return (
    <div>
      <Head>
        <title>Editing ${currentTodo.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form
        onSubmit={handleSubmit}
        initialValues={currentTodo}
        name="name"
        title="Edit this list's name"
      />
    </div>
  )
}

export default EditTodoPage
