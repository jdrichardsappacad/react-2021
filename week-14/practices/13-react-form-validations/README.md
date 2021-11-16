# React Forms - Implementing validations

One last feature needs to be added before the simple "Contact Us" form is done:
form validation. Without validation, a user can submit the form without
providing a single bit of data. To implement form validation, you'll use vanilla
JS to validate that the "Name" and "Email" form fields have values before
allowing the form to be submitted.

## Phase 1: Setup Validate Function

To do that, add a function to your component named `validate`. Use conditional
statements to check if the `name` and `email` state variables are empty.
If they are empty, add an appropriate validation error message to a
`validationErrors` array and return the array from the function:

```js
const validate = () => {
  const validationErrors = [];

  if (!name) validationErrors.push('Please provide a Name');

  if (!email) validationErrors.push('Please provide an Email');

  return validationErrors;
};
```

Create a state variable for `validationErrors` initialized to an empty array.

Within the `onSubmit` event handler method, call the `validate` method and check
the length of the returned array to see if there are any validation errors. If
there are validation errors, then call the `setValidationErrors` function to
update the component errors state variable, otherwise process the form
submission and reset the `validationErrors` array to an empty array:

```js
// Get validation errors.
const errors = validate();

// If we have validation errors...
if (errors.length > 0) {
  // Update the state to display the validation errors.
  setValidationErrors(errors);
} else {
  // Process the form submission...
  // Reset the validation errors
  setValidationErrors([]);
}
```

In the return of the function component, use an inline conditional expression
with a logical `&&` operator to conditionally render an unordered list of
validation messages if the `validationErrors` array has a `length` greater than
`0`:

```js
{
  validationErrors.length > 0 && (
    <div>
      The following errors were found:
      <ul>
        {validationErrors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );
}
```

Putting all of that together, here's what the updated `ContactUs` function
component should look like now:

```js
// ./src/components/ContactUs/index.js
import { useState } from 'react';

function ContactUs(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const validate = () => {
    const validationErrors = [];

    if (!name) validationErrors.push('Please provide a Name');

    if (!email) validationErrors.push('Please provide an Email');

    return validationErrors;
  };

  const onSubmit = e => {
    e.preventDefault();
    const errors = validate();

    if (errors.length > 0) return setValidationErrors(errors);

    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      submittedOn: new Date(),
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
    setValidationErrors([]);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            {props.phoneTypes.map(phoneType => (
              <option key={phoneType}>{phoneType}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

ContactUs.defaultProps = {
  phoneTypes: ['Home', 'Work', 'Mobile'],
};

export default ContactUs;
```

If you run your application again, view the form in the browser, and attempt to
submit the form without providing any form field values, you'll receive two
validation error messages:

```plaintext
The following errors were found:

  * Please provide a Name
  * Please provide an Email
```

Overall, this approach to validating the form is relatively simple. You _could_
validate the data as it changes so that the user would receive feedback sooner
(i.e. not having to wait to submit the form to see the validation error
messages). Sometimes it's helpful to receive feedback in real-time, but
sometimes it can be annoying to users. Consider each situation and use an
approach that feels appropriate for your users.

###

You can also use a validation library like [Validator.js][validator] to add more
sophisticated form validations.

First, install the `validator` npm package:

```sh
npm install validator
```

Then import the email validator into the `./src/components/ContactUs/index.js`
module:

```js
import isEmail from 'validator/es/lib/isEmail';
```

Now you can use the `isEmail` validator function to check if the provided
`email` value is in fact a valid email address:

```js
const validate = () => {
  const validationErrors = [];

  if (!name) validationErrors.push('Please provide a Name');

  if (!email) {
    validationErrors.push('Please provide an Email');
  } else if (!isEmail(email)) {
    validationErrors.push('Please provide a valid Email');
  }

  return validationErrors;
};
```

If you run your application again, view the form in the browser, and attempt to
submit the form with an invalid email address, you'll receive the following
validation error message:

```plaintext
The following errors were found:

  * Please provide a valid Email
```

## Dyanmic Validation

In some cases, you may want to update your error messages and validate the
user's input as the changes occur instead of just doing the validation when the
user is ready to submit. Since you're looking to set state based on the value of
another state variable, you'll use a `useEffect` to watch for those changes and
set the `validationErrors` variable as you need to.

At the top of the file, `import` the `useEffect` hook from the `react` package.
Add a `useEffect` with an empty dependency array below the defintion of the
`onSubmit` function, and move the `validate` function inside of the
`useEffect`'s callback function. Then, move the lines in the `onSubmit` that do
the validation into the `useEffect`. Go ahead and update the dependency array to
have the necessary variables for the `validate` function.

Here's what the `useEffect` should look like now:

```js
useEffect(() => {
  const validate = () => {
    const validationErrors = [];

    if (!name) validationErrors.push('Please provide a Name');

    if (!email) {
      validationErrors.push('Please provide an Email');
    } else if (!isEmail(email)) {
      validationErrors.push('Please provide a valid Email');
    }

    return validationErrors;
  };

  const errors = validate();

  if (errors.length > 0) setValidationErrors(errors);
}, [name, email]);
```

Note that you'll want to remove the `return` statement that was originally from
the `if` statement in the `onSubmit` because the `return` value from
a `useEffect` should either be `undefined` or a cleanup function.

### Client-side vs server-side validation

As a reminder, client-side validation like the validations in the `ContactUs` function component,
are optional to implement; **server-side validation is not optional**.
This is because client-side validations can be disabled or manipulated by savvy users.
Sometimes the "best" approach is to skip implementing validations on the client-side and rely completely
on the server-side validation. Using this approach, you'd simply call the API when the form is submitted and
if the request returns a `400 BAD REQUEST` response,
you'd display the validation error messages returned from the server.
If you do decide to implement client-side validations, do it with the end goal of improving your application's
overall user experience, not as your only means of validating user-provided data.

## What you learned

In this article, you learned how to create a React function component containing
a simple form. You also learned how to create a controlled component which means
forms with controlled inputs using component state. You also learned how to
use multiple form inputs in React. Lastly, you learned how to implement form
validations and the difference between validating your inputs on the client vs.
the server.

[onchange event handler]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/react-class-components/assets/react-forms-onchange-event-handler.png
[validator]: https://github.com/validatorjs/validator.js
