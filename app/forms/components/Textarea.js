import InputError from "./InputError";
import { ErrorMessages } from "./ErrorMessages";

export default function Textarea({ errors, register, label }) {
  return (
    <>
      <label htmlFor="textarea">{label}: *</label>
      <textarea
        id="description"
        {...register("textarea", {
          required: ErrorMessages.requiredMessage,
          minLength: ErrorMessages.minLength2,
          maxLength: ErrorMessages.maxLength1000,
        })}
      />
      <InputError errors={errors} fieldName="textarea" />
    </>
  );
}
