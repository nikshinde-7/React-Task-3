import { useState } from 'react';
import './App.css';
import { InputTypeComponent } from './components/InputTypeComponent';
import { RadioBox } from './components/RadioBoxComponent';
import { SelectBox } from './components/SelectBoxComponent';
import { CNF_PASSWORD_LABEL, DATE_LABEL, EMAIL_LABEL, FILE_LABEL, PASSWORD_LABEL, PASSWORD_NOT_MATCHING, TEXT_LABEL } from './constants';
import { compareStrings } from './helpers';

function App() {

  const [inputTextValue, setInputTextValue] = useState('');
  const [inputFileValue, setInputFileValue] = useState('');
  const [inputDateValue, setInputDateValue] = useState('');
  const [inputRadioValue, setInputRadioValue] = useState('');
  const [inputSelectValue, setInputSelectValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const comparePasswords = (pwd: string, cnfPwd: string): void => {
    const compareResult: number = compareStrings(pwd, cnfPwd);

    compareResult !== 0 ?  setErrorMsg(PASSWORD_NOT_MATCHING) : setErrorMsg('');
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
        value={inputFileValue} 
        handleChange={(e) => setInputFileValue(e.target.value)} 
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
        onClick={() => console.log({inputTextValue, inputEmailValue, inputDateValue, inputRadioValue, inputFileValue, inputSelectValue, password, confirmPassword}) }
      >
        Submit
      </button>

    </div>
  );
}

export default App;
 