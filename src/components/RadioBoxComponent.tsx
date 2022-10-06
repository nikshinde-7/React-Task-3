import { RadioProps } from "../types/InputComponentTypes";
import { genderList } from "../utils/data";

export const RadioBox = (props: RadioProps) => {

  const { handleChange } = props;

  return (
    <div className="m-t2 m-b2">
      <label> Select Gender&nbsp; : &nbsp;</label>
      {
        genderList.map((el, index) => {
          return (
            <span key={index}>
              &nbsp;<input type="radio" value={el.value} name="gender" onChange={(e) => handleChange(e)} />&nbsp;{el.gender}&nbsp;
            </span>
          )
        })
      }
    </div>
  )
}