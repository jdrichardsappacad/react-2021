# React Forms - Implementing validations

One last feature needs to be added before the simple "Contact Us" form is done:
form validation. Without validation, a user can submit the form without
providing a single bit of data. To implement form validation, you'll use vanilla
JS to validate that the "Name" and "Email" form fields have values before
allowing the form to be submitted.

## Set up

Make sure you are logged in to your [codesandbox.io][code-sandbox] account.

Navigate to the [starter][starter] repo for this short practice.

### 2 Options:

#### Option 1: (this simplest option)

- In the url of the starter repo, append `box` to the word `github` and hit
  `Enter` or `return` depending on your computer. You should be taken to
  [codesandbox.io][code-sandbox] and the app should be loaded for you.
- Example: If the repo was
  `https://github.com/reduxjs/redux/tree/master/examples/todomvc` it would
  become `https://githubbox.com/reduxjs/redux/tree/master/examples/todomvc`

You should see an `h1` tag saying `No Data To Display`

Before moving forward, take a look at the [fortnite][fortnite] documentation. If
you navigate to the [Endpoints][endpoints] section, you will find and use the
`https://fortnite-api.com/v2/news` endpoint. Read the documentation to
understand what the outcome of this endpoint should be.

## Setup Validation State

To setup validation, you will first add a slice of state with two indexes,
`validationErrors` and `setValidationErrors`. It will have an `initial state` of
and empty array.

```js

  const [validationErrors, setValidationErrors] = useState([])

```

You will validate the `name` and `email` inputs. Create a `useEffect` that
listens for the `name` and `email`. Inside the `useEffect` add an `errors`
variable and assign it an empty array. This will be your mutable array.

Create two conditionals:
- The first should check name to see if it's length is greater than 0. If it
  isn't, push the message, 'Please enter your name', to the `errors` array.
- The second conditional should check to see if the email input has an `@` in
  it. If it doesn't, push the message, 'Please provide a valid email' to the
  `errors` array.

Finally, inside the `useEffect`, set the `validationErrors` state to the
`errors` array.

## Render Validation Errors

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

  Also, add a conditional to the `onSubmit` function that returns an `alert`
  that says 'Cannot Submit' if the `validationErrors` state has a length greater
  than 0, otherwise, it submits the form and clears all the state variabls.

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



      useEffect(()=>{
        const errors = [];

        if(!name.length) errors.push('Please enter your name')
        if(!email.includes('@')) errors.push('Please provide a valid email')

        setValidationErrors(errors);
      },[name, email])

      const onSubmit = e => {
        if (validationErrors.length > 0) {
          return alert(
            `Cannot submit`
          );
        } else {
          const contactUsInformation = {
            name,
            email,
            phone,
            comments,
            submittedOn: new Date(),
          };

        // console.log(contactUsInformation);
          setName('');
          setEmail('');
          setPhone('');
          setComments('');
          setValidationErrors([]);
        }
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

  export default ContactUs;

```

If you run your application again, view the form in the browser, and attempt to
submit the form without providing any form field values, you'll receive two
validation error messages:

```plaintext
The following errors were found:

  * Please enter your Name
  * Please provide a valid Email
```

Overall, this approach to validating the form is relatively simple. But there
are other ways to validate including the use of packages that focus specifically
on forms.


### Client-side vs server-side validation

As a reminder, client-side validation like the validations in the `ContactUs`
function component, are optional to implement; **server-side validation is not
optional**. This is because client-side validations can be disabled or
manipulated by savvy users. Sometimes the "best" approach is to skip
implementing validations on the client-side and rely completely on the
server-side validation. Using this approach, you'd simply call the API when the
form is submitted and if the request returns a `400 BAD REQUEST` response, you'd
display the validation error messages returned from the server. If you do decide
to implement client-side validations, do it with the end goal of improving your
application's overall user experience, not as your only means of validating
user-provided data.

## What you learned

In this article you learned how to implement form validations and the difference
between validating your inputs on the client vs. the server.

[onchange event handler]:
https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/react-class-components/assets/react-forms-onchange-event-handler.png
[validator]: https://github.com/validatorjs/validator.js
[starter]:https://github.com/orgs/appacademy-starters/repositories?type=all