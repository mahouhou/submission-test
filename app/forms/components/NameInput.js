import InputError from "./InputError"
import { ErrorMessages } from "./ErrorMessages"

export default function NameInput({errors, register}) {
    return (
      <>
      <div style={{width: "50%", display: "inline-block", boxSizing: "border-box", paddingRight: "0.5rem"}}>
        <label htmlFor="fname">First name: *</label>
        <input
            type="text"
            {...register("fname", {
              required: ErrorMessages.requiredMessage,
              minLength: ErrorMessages.minLength2,
              maxLength: ErrorMessages.maxLength20,
            })}
            className={errors.fname && "input-error"}
        />
        <InputError errors={errors} fieldName="fname" />
      </div>
      
      <div style={{width: "50%", display: "inline-block", boxSizing: "border-box", paddingLeft: "0.5rem"}}>
        <label htmlFor="lname">Last name: *</label>
        <input
            type="text"
            {...register("lname", {
              required: ErrorMessages.requiredMessage,
              minLength: ErrorMessages.minLength2,
              maxLength: ErrorMessages.maxLength20,
            })}
            className={errors.lname && "input-error"}
        />
        <InputError errors={errors} fieldName="lname" />
      </div>
      </>
    )
}