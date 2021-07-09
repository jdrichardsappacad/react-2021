import { useState } from 'react';

export const useTextInput = ({ validations = [], defaultValue = '' } = {}) => {
  const [value, setValue] = useState(defaultValue);
  const updateValue = (event) => setValue(event.target.value);
  const errors = (() => {
    if (validations.length === 0) return [];
    return validations.map((validator) => validator(value)).filter((validationObj) => !validationObj.pass).map((validationObj) => validationObj.msg);
  })();
  return [value, updateValue, errors];
};
