export default function Checkbox({ register, label }) {
  return (
    <>
      <label htmlFor="permission">{label}</label>
      <input type="checkbox" {...register("permission")} />
    </>
  );
}
