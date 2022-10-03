import { genderList } from "../utils/data";
import { RadioProps } from "../types/RadioComponentTypes";

export const RadioBox = (props: RadioProps) => {

  const { handleChange } = props;

  return (
    <div className="mt-2 mb-2">
      <label> Select Gender : </label>
      {
        genderList.map((el, index) => {
          return (
            <span key={index}>
              <input type="radio" value={el.value} name="gender" onChange={(e) => handleChange(e)} />{el.gender}
            </span>
          )
        })
      }
    </div>
  )
}