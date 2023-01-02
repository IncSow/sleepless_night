import { useField } from "formik"

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (

    <div>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>

  )
}
