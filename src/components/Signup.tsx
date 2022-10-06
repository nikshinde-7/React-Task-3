import React, { useState } from "react";
import { CNF_PASSWORD_LABEL, DATE_LABEL, EMAIL_LABEL, FILE_LABEL, PASSWORD_LABEL, PASSWORD_NOT_MATCHING, TEXT_LABEL } from "../utils/constants";
import { compareStrings } from "../helpers";
import { InputTypeComponent } from "./InputTypeComponent";
import { RadioBox } from "./RadioBoxComponent";
import { SelectBox } from "./SelectBoxComponent";

export const SignUp = () => {
  const [inputTextValue, setInputTextValue] = useState('');
  const [inputDateValue, setInputDateValue] = useState('');
  const [inputRadioValue, setInputRadioValue] = useState('');
  const [inputSelectValue, setInputSelectValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [url, setUrl] = useState("");

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      const data = new FormData()

      data.append("file", e.target.files[0])
      data.append("upload_preset", "reactapp")
      data.append("cloud_name", "dcaum8gbs")

      fetch("  https://api.cloudinary.com/v1_1/dcaum8gbs/image/upload", {
        method: "post",
        body: data
      })
        .then(resp => resp.json())
        .then(data => {
          setUrl(data.url)
        })
        .catch(err => console.log(err))
    }
  }

  const comparePasswords = (pwd: string, cnfPwd: string): void => {
    const compareResult: number = compareStrings(pwd, cnfPwd);

    compareResult !== 0 ? setErrorMsg(PASSWORD_NOT_MATCHING) : setErrorMsg('');
  }

  return (
    <div className="App">

      <h2> Test task - 3</h2>

      <InputTypeComponent
        labelText={TEXT_LABEL}
        type="text"
        value={inputTextValue}
        handleChange={(e) =>
          setInputTextValue(e.target.value)}
      />

      <InputTypeComponent
        labelText={EMAIL_LABEL}
        type="text"
        value={inputEmailValue}
        handleChange={(e) =>
          setInputEmailValue(e.target.value)}
      />

      <InputTypeComponent
        labelText={DATE_LABEL}
        type="date"
        value={inputDateValue}
        handleChange={(e) => setInputDateValue(e.target.value)}
      />

      <RadioBox
        handleChange={(e) => setInputRadioValue(e.target.value)}
      />

      <InputTypeComponent
        type="file"
        labelText={FILE_LABEL}
        handleChange={(e) => {
          uploadImage(e);
        }}
      />

      <SelectBox
        value={inputSelectValue}
        handleChange={(e) => setInputSelectValue(e.target.value)}
      />

      <InputTypeComponent
        type="password"
        labelText={PASSWORD_LABEL}
        value={password}
        handleChange={(e) => {
          setPassword(e.target.value);
          comparePasswords(e.target.value, confirmPassword);
        }
        }
      />

      {errorMsg && <label className="error-text"> {errorMsg} </label>}

      <InputTypeComponent
        type="password"
        labelText={CNF_PASSWORD_LABEL}
        value={confirmPassword}
        handleChange={(e) => {
          setConfirmPassword(e.target.value);
          comparePasswords(e.target.value, password);
        }}
      />

      <button
        className="btn-success"
      >
        Upload Details
      </button>

      <div>
        <h2>Uploaded image will be displayed here</h2>
        {url && <img src={url} height={"150px"} width={"150px"} alt="" />}
      </div>


    </div>
  );
}