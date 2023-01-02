import {Form as FornikForm, Formik} from "formik"
import { Input } from "./Input"

export const Form = (props) => {
  const { onSubmit, initialValues = {content: ""}, name="content"} = props

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      <FornikForm className={"flex p-4"}>

      <Input name={name} type="text" label="content" />

      <button type="submit">Save this task ~</button>
      </FornikForm>
    </Formik>
  )
}
