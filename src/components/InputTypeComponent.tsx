import { InputProps } from "../types/InputComponentTypes";

export const InputTypeComponent = (props: InputProps) => {

  const { value, handleChange, type, labelText } = props;

  return (
    <div className="m-t2 m-b2">
      {labelText && <label> {labelText} </label>} &nbsp;
      &nbsp; <input type={type} value={value} onChange={(e) => handleChange(e)} />
    </div>
  )
};
