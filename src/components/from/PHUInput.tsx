import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInput = {
  type: string;
  name: string;
  label: string;
};
const PHUInput = ({ type, name, label }: TInput) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHUInput;
