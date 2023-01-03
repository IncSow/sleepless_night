import { XMarkIcon } from "@heroicons/react/24/solid"
import { Form as FornikForm, Formik } from "formik"
import { Input } from "./Input"
import Link from "./Link"

export const Form = (props) => {
  const {
    onSubmit,
    title,
    initialValues = { content: "" },
    name = "content",
  } = props

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <>
        <header className="flex align-center p-4 border-b">
          <h3 className="font-bold text-xl">{title}</h3>
          <Link href="/" className="ml-auto">
            <XMarkIcon className="w-5"></XMarkIcon>
          </Link>
        </header>
        <FornikForm className="flex flex-col p-4 h-[80vh]">
          <Input name={name} type="text" label="content" />

          <div className="flex gap-5 align-center ml-auto mt-auto">
            <Link className="flex items-center font-bold" href="/">
              Cancel
            </Link>
            <button
              className="rounded bg-sky-600 w-16 p-2 text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        </FornikForm>
      </>
    </Formik>
  )
}
