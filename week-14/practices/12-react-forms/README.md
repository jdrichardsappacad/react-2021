# React Forms

As you've learned in earlier lessons, HTML forms are an essential and ubiquitous
part of the web. Forms are used to search, create resources (i.e. account,
posts), update resources, and more. Learning how to create forms using React is
an invaluable skill for you to learn and practice.

When you finish this article, you should be able to:

- Create a React function component containing a simple form
- Define controlled inputs with the `useState` hook for different form inputs

## Phase 0: Setup

If you want to follow along, create a React application using `create-react-app`
with the `@appacademy/simple` template:

```bash
npx create-react-app contact-us-form --template @appacademy/simple --use-npm
```

## Phase 1: Creating a simple form

To learn how to create an HTML form in React, you'll create a `ContactUs`
function component that'll contain a simple "Contact Us" form. The form will
initially contain just three fields:

- Name - The name of the user filling out the form
- Email - The user's email
- Phone - The user's phone number

### Defining the `render` method

To start, add a function component named `ContactUs` and render the HTML form:

```js
// ./src/components/ContactUs/index.js
function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='text' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

So far, there's nothing particularly interesting about this form. The only thing
that looks different from regular HTML is that the `<label>` element's `for`
attribute is `htmlFor` in React.

If you're following along, be sure to update your React application's entry
point to render the `ContactUs` component:

```js
// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import ContactUs from './components/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <ContactUs />
  </React.StrictMode>,
  document.getElementById('root')
);
```

At this point, you can run your application (`npm start`) and view the form in
the browser. You can even fill out the form, but currently the component doesn't
know what the form input values are. To keep track of each of the input values,
you will need to initialize and maintain component state.

### Phase 2: Adding state to the component

To add state to the `ContactUs` component, import `useState` from React.
Initialize three state variables, `name`, `email`, and `phone` as empty strings.
Then use them to set the `value` attributes on the corresponding form field
`<input>` elements:

```js
// ./src/components/ContactUs/index.js
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' value={name} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' value={email} />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='text' value={phone} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

If you try navigating to the browser and refreshing now, then you will get a
warning in your browser's dev tools console saying, "You provided a `value` prop
to a form field without an `onChange` handler. This will render a read-only
field." Also, if you try typing in any of the fields, they don't update anymore.
This is because the `value` attribute for each input will always be an empty
string.

For example, the name field will always be an empty string because the `value`
attribute on that field is set to the `name` state variable. The `name` state
variable is initialized to an empty string and is never updated. To fix this,
you need to update the `name` state variable whenever the user types into the
field.

When a form field element value is changed, the associated component state
variable needs to be updated. Adding or removing a character within an `<input>`
element raises the `onChange` event, which makes it a natural choice for keeping
the component state in sync:

```js
<input
  id='name'
  type='text'
  onChange={(e) => setName(e.target.value)}
  value={name}
/>
```

Remember that when an event is raised, the associated event handler method is
called and passed an instance of `event` object type. A reference to the element
that raised the event is available through the `event` object's `target`
property. Using the reference to the form field element, you can retrieve the
current value as the `value` property on the `target` object.

Use the same approach to add an `onChange` event handler to the "Email" and
"Phone" form fields gives you this:

```js
// ./src/components/ContactUs/index.js
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

If you view the form again in the browser and open the React Developer Tools,
you can see the component's state update as you type within each of the form
fields (i.e the `<input>` elements).

![onchange event handler]

### Phase 3: Handling form submissions

Now that the `ContactUs` component is initializing and updating state when form
field values are changed, it's time to handle form submissions! To start, create
an `onSubmit` function and attach it to the `onSubmit` event listener for the
form. Within the `onSubmit` event handler prevent the default behavior so that
the page doesn't reload:

```js
const onSubmit = (e) => {
  // Prevent the default form behavior
  // so the page doesn't reload.
  e.preventDefault();
};
```

```js
<form onSubmit={onSubmit}>
```

Then use the `name`, `email`, and `phone` values from state to create a new
`contactUsInformation` object literal:

```js
const onSubmit = (e) => {
  // Prevent the default form behavior
  // so the page doesn't reload.
  e.preventDefault();

  // Create a new object for the contact us information.
  const contactUsInformation = {
    name,
    email,
    phone,
    submittedOn: new Date()
  };

  // For now, just log the contact us information to the console
  // though ideally, we'd persist this information to a database
  // using a REST API.
  console.log(contactUsInformation);
};
```

Notice that an additional property, `submittedOn`, is being added to the
`contactUsInformation` object literal to indicate the date/time that the
information was submitted. Ideally, the `contactUsInformation` object would be
persist to a database using a REST API, but for now, you'll just log the object
to the console.

Now that the form submission has been processed, reset the `name`, `email`, and
`phone` values to empty strings:

```js
const onSubmit = (e) => {
  // Prevent the default form behavior
  // so the page doesn't reload.
  e.preventDefault();

  // Create a new object for the contact us information.
  const contactUsInformation = {
    name,
    email,
    phone,
    submittedOn: new Date()
  };

  // For now, just log the contact us information to the console
  // though ideally, we'd persist this information to a database
  // using a REST API.
  console.log(contactUsInformation);

  // Reset the form state.
  setName('');
  setEmail('');
  setPhone('');
};
```

Putting all of that together gives you this:

```js
// ./src/components/ContactUs/index.js
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

If you run your application again and view the form in the browser, you can fill
out each form field and click "Submit" to submit the form. Notice that the page
doesn't reload! And if you look in the developer tool's console, you'll see an
object containing your contact us information.

### Controlled components

Congrats! You've completed your first simple React form! In doing so, you used
what's known as **controlled components**.

HTML form elements naturally maintain their own state. For example, an `input`
element will track the state of the value that's typed within it (without any
help from libraries like React). But a React component keeps track of its own
internal state. To keep a component's state as the "one source of truth",
`onChange` event handlers are used on form field elements to update the
component's state when a form element's state has changed.

This approach of making the component's state the "one source of truth" is
called **controlled components**. Inputs in a controlled component are called
**controlled inputs**.

To help understand how this works, here's an overview of the flow:

- A user types a character within a form `<input>` element;
- The `<input>` element's `onChange` event is raised;
- The event handler method associated with the `<input>` element's `onChange`
  event is called;
- The event handler method updates the form field's value in state;
- Updating the component's state causes React to re-render the component (i.e.
  the `render` method is called); and
- The form `<input>` element is rendered with its `value` attribute set to the
  updated value from the state.

While all of the above steps might _feel_ like a lot, in reality, the entire
process happens very quickly. You can test this yourself by playing around with
the `ContactUs` component. Typing within each of the form fields feels
completely natural and you won't notice the difference!

## Phase 4: Adding a text area

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
    onChange={(e) => setComments(e.target.value)}
    value={comments}
  />
</div>
```

To support this new form field, you'll need to also update the `onSubmit`
function:

```js
// ./src/components/ContactUs/index.js
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      submittedOn: new Date()
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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={(e) => setComments(e.target.value)}
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

## Phase 5: Adding a select list

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
    onChange={(e) => setPhone(e.target.value)}
    value={phone}
  />
  <select
    name='phoneType'
    onChange={(e) => setPhoneType(e.target.value)}
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

In the above `<select>` list, the `<option>` elements are statically rendered,
but it's also possible to dynamically render them from an array of values. For
the array of phone type option values, define a default value for a prop named
`phoneTypes`:

```js
ContactUs.defaultProps = {
  phoneTypes: ['Home', 'Work', 'Mobile']
};
```

Then render the `<select>` list options using the `props.phoneTypes` array:

```js
<div>
  <label htmlFor='phone'>Phone:</label>
  <input
    id='phone'
    name='phone'
    type='text'
    onChange={(e) => setPhone(e.target.value)}
    value={phone}
  />
  <select
    name='phoneType'
    onChange={(e) => setPhoneType(e.target.value)}
    value={phoneType}
  >
    <option value='' disabled>
      Select a phone type...
    </option>
    {props.phoneTypes.map((phoneType) => (
      <option key={phoneType}>{phoneType}</option>
    ))}
  </select>
</div>
```

Notice that you can leave the first "Select a phone type..." `<option>` element
as a static element before rendering the dynamic `<option>` elements.

To complete this new field, update the `onSubmit` function just like you did
when adding the "Comments" form field:

```js
// ./src/components/ContactUs/index.js
import { useState } from 'react';

function ContactUs(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [phoneType, setPhoneType] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      submittedOn: new Date()
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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            {props.phoneTypes.map((phoneType) => (
              <option key={phoneType}>{phoneType}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

ContactUs.defaultProps = {
  phoneTypes: ['Home', 'Work', 'Mobile']
};

export default ContactUs;
```

[onchange event handler]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/react-class-components/assets/react-forms-onchange-event-handler.png
[validator]: https://github.com/validatorjs/validator.js
