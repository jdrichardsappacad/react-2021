import { useState } from 'react';
import { textInputValidators } from '../utils/validations';

const Form = () => {
  const [name, setName] = useState('');
  const validatorResults = textInputValidators.map((validator) => validator(name));
  const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
  const nameErrors = failedValidators.map((validationObj) => validationObj.msg);

  return (
    <>
      <h1>Form Component</h1>
      <form>
        <ul>
          {nameErrors.map(err => <li key={err}>{err}</li>)}
        </ul>
        <label htmlFor="name">
          Name{" "}
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
