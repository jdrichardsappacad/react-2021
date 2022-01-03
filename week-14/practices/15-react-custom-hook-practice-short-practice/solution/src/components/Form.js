import { useTextInput } from '../hooks/textInput';
import { textInputValidators } from '../utils/validations';

const Form = () => {
  const [name, updateName, nameErrors] = useTextInput({ validations: textInputValidators });

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
            onChange={updateName}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
