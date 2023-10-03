import InputError from "./InputError"
import { ErrorMessages } from "./ErrorMessages"

export default function NameInput({errors, register}) {
    return (
      <>
      <label htmlFor="fname">First name: *</label>
      <input
          type="text"
          {...register("fname", {
            required: ErrorMessages.requiredMessage,
            minLength: ErrorMessages.minLength2,
            maxLength: ErrorMessages.maxLength20,
          })}
      />
      <InputError errors={errors} fieldName="fname" />

      <label htmlFor="lname">Last name: *</label>
      <input
          type="text"
          {...register("lname", {
            required: ErrorMessages.requiredMessage,
            minLength: ErrorMessages.minLength2,
            maxLength: ErrorMessages.maxLength20,
          })}
      />
      <InputError errors={errors} fieldName="lname" />
      </>
    )
}