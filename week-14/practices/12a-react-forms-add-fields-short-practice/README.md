# React Forms - Adding Fields

As you've learned in earlier lessons, HTML forms are an essential and ubiquitous
part of the web. Forms are used to search, create resources (i.e. account,
posts), update resources, and more. Learning how to create forms using React is
an invaluable skill for you to learn and practice.

When you finish this article, you should be able to:

- Create a React functional component containing a simple form
- Define controlled inputs with the `useState` hook for different form inputs

## Set up

Make sure you are logged in to your [codesandbox.io] account.

Navigate to the starter repo for this short practice by clicking the `Download
Project` button at the bottom of the page. Use one of the following options to
load the practice into codesandbox.

### Option 1 (the simplest option)

- In the url of the starter repo, append `box` to the word `github` and hit
  `Enter` or `return` depending on your computer. You should be taken to
  [codesandbox.io] and the app should be loaded for you.
- Example: If the repo was
  `https://github.com/reduxjs/redux/tree/master/examples/todomvc`, it would
  become `https://githubbox.com/reduxjs/redux/tree/master/examples/todomvc`

### Option 2

- Navigate to [codesandbox.io] and sign in. Click `Create Sandbox`, then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.

## Adding a text area

In a regular HTML form, the value for a `<textarea>` element is defined by its
inner content:

```html

  <textarea>This is the value for the text area element.</textarea>

```

The `<textarea>` element, in React, uses a `value` attribute instead of its
inner content to define its value. This allows the `<textarea>` element to be
handled in the same way as `<input>` elements.

To see this in action, add a `comments` state variable and add a "Comments"
field to the form:

```js

  <div>
    <label htmlFor='comments'>Comments:</label>
    <textarea
      id='comments'
      name='comments'
      onChange={e => setComments(e.target.value)}
      value={comments}
    />
  </div>

```

To support this new form field, you'll need to also update the `onSubmit`
function:

```js

  // ./src/ContactUs.js
  import { useState } from 'react';

  function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');

    const onSubmit = e => {
      e.preventDefault();
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
    };

    return (
      <div>
        <h2>Contact Us</h2>
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

## Adding a select list

To maintain symmetry across React form element types, the `<select>` element
also uses a `value` attribute to get and set the element's selected option. To
see this in action, add a `<select>` element to the right of the `<input>`
element for the "Phone" form field, to give the user a way to specify what type
of phone number they're providing:

```js

  <div>
    <label htmlFor='phone'>Phone:</label>
    <input
      id='phone'
      name='phone'
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
      <option>Home</option>
      <option>Work</option>
      <option>Mobile</option>
    </select>
  </div>

```

Notice that you can leave the first "Select a phone type..." `<option>` element
as an empty value element before rendering the other `<option>` elements.

To complete this new field, update the `onSubmit` function just like you did
when adding the "Comments" form field:

```js

  // ./src/ContactUs.js
  import { useState } from 'react';

  function ContactUs(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');
    const [phoneType, setPhoneType] = useState('');

    const onSubmit = e => {
      e.preventDefault();
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
    };

    return (
      <div>
        <h2>Contact Us</h2>
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
              <option value='Home'>Home</option>
              <option value='Work'>Work</option>
              <option value='Mobile'>Mobile</option>
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

## What you have learned

**Congratulations!** In this practice you have learned:

- `textarea` and `select`field creation 
- adding other fields, 
- looking up the functionality on MDN and applying the same concepts

[onchange event handler]:
https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/react-class-components/assets/react-forms-onchange-event-handler.png
[code-sandbox]:http://www.codesandbox.io