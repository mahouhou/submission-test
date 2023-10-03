import InputError from "./InputError";
import { ErrorMessages } from "./ErrorMessages";

export default function EmailInput({ errors, register }) {
  return (
    <>
      <label htmlFor="email">Email: *</label>
      <input
        type="email"
        {...register("email", { required: ErrorMessages.requiredMessage })}
      />
      <InputError errors={errors} fieldName="email" />
    </>
  );
}
