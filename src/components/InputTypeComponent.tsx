import { InputProps } from "../types/InputComponentTypes";

export const InputTypeComponent = (props: InputProps) => {

  const { value, handleChange, type, labelText } = props;

  return (
    <div className="mt-2 mb-2">
      {labelText && <label> {labelText} </label>}
      <input type={type} value={value} onChange={(e) => handleChange(e)} />
    </div>
  )
};
