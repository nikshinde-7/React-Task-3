import { SelectProps } from "../types/InputComponentTypes";
import { optionsArray } from "../utils/data";

export const SelectBox = (props: SelectProps) => {

  const { value, handleChange } = props;

  return (
    <div>
      <label>
        Pick your favorite place : &nbsp;&nbsp;
        <select value={value} onChange={(e) => handleChange(e)}>
          {
            optionsArray.map((el, index) => {
              return <option key={index} value={el.value}>{el.label}</option>
            })
          }
        </select>
      </label>
    </div>
  )
};