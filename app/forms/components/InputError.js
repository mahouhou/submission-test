export default function InputError({ errors, fieldName }) {
  return (
    errors[fieldName] && <p className="error">{errors[fieldName]?.message}</p>
  );
}
