import { useFormContext } from "react-hook-form";

const PHUInput = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label: string;
}) => {
  const { register } = useFormContext();
  return (
    <>
      {label ? label : null}
      <input type={type} id={name} {...register(name)} />
    </>
  );
};

export default PHUInput;
