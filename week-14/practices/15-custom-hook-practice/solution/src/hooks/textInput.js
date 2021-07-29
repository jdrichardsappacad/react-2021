import { useState } from 'react';

export const useTextInput = ({ validations = [], defaultValue = '' }) => {
  const [value, setValue] = useState(defaultValue);
  const updateValue = (event) => setValue(event.target.value);
  const errors = (() => {
    if (validations.length === 0) return [];
    return validations.map((validator) => validator(value)).filter((validationObj) => !validationObj.pass).map((validationObj) => validationObj.msg);
  })();
  return [value, updateValue, errors];
};

// export const useTextInput = ({ validations = [], defaultValue = '' }) => {
//   const [value, setValue] = useState(defaultValue);
//   const updateValue = (event) => setValue(event.target.value);
//   const validatorResults = validations.map((validator) => validator(value));
//   const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
//   const errors = failedValidators.map((validationObj) => validationObj.msg);
//   return [value, updateValue, errors];
// };
