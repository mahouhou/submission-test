import InputError from "./InputError";
import { ErrorMessages } from "./ErrorMessages";

export default function URLInput({ errors, register, label }) {
  return (
    <>
      <label htmlFor="url">{label}: *</label>
      <input
          type="url"
          {...register("url", { required: ErrorMessages.requiredMessage })}
          placeholder="https://"
          className={errors.url && "input-error"}
        />
      <InputError errors={errors} fieldName="url" />
    </>
  );
}
