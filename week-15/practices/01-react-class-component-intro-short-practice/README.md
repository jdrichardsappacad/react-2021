# Converting Functional Components

In this short practice you will convert a `functional` component into  a `class`
component.

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

#### Option 2:

- Navigate to codesandbox.io and sign in. Click `Create Sandbox` then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.

## Create A Class Component

To create a class component you must first import the
[`Component`][react-component] subclass from the `react` package. This will
allow you the needed functionality for the component.

Create a `class` component called `ClassComponentOne` that extends the imported
Component sub-class.

```js

  class ClassComponentOne extends Component {}

```

`Class` components must always have a render method which comes from the
`Component` subclass.

```js

  render(){}

```

Inside the render method, you will `return` the JSX, just as you did in
functional components.

Copy the whole `return` from the `FunctionalComponentOne` file. Paste it
inside the `render` method inside `ClassComponentOne`.

Change the `h1` text from `Functional Component One` to `Class Component One`

Remove each `onClick` and `onChange` method from your `JSX`. You will recreate
them shortly.

Also, remember to import the __FunctionalComponentTwo.js__ component that will
now be the child of this component.

## Setting State

Look in the __FunctionalComponentOne.js__ file and notice the two slices of
state. State in class components is represented by one single object. Each key
inside the object represents a `slice of state` and the `initial value` is the
value for the key.

The classic approach to creating state in class components is to use a
constructor function.

Create a `constructor` function above the `render` method. Be sure to include
`super()` inside the function as you did with vanillaJS `Classes`.

Below the constructor you will use a specific method [`this.state`][state] to
create the object. This will only be used one time in your component.

Based on the state in `FunctionalComponentOne`, create the key value pairs for
`count` and `message` with the initial values.

Your constructor should resemble the code below:

```js

  constructor(){
    super()
    this.state = {
      count: 0,
      message: ''
    }
  }

```

### Setting State in an Event Handler

The only real difference with setting state in `event handlers` or anywhere in
your component is the method that is used. Class components use the method
[`this.setState`][setstate] to update state. **Never set state using the
`this.state` method!** `this.setState` takes an object that needs only the
values you wish to change. React merges those updates using a `shallow merge`.
Only the key/value pair that is updated will change values.

For the `message` input, add an `onChange` event handler. In the handler's
callback function, use `this.setState({})`. Add the property using the name of
the state as the key and the `targeted value` from the `synthetic event` as the
key.

### Previous State

Remember the optional function provided for updating `state` that is based on
`previous state`? That optional function will also be used inside your
`setState` method. However that function must still return an object. See if you
can figure out the syntax for making that happen with the `Increment` and
`Decrement` buttons.

Next, using an `onClick` event handler, set the state for the `Clear` button so
that it clears the `message` slice of state.

Your code for event handlers should look simlar to the code below:

```js

  <button
    onClick={() => {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }));
    }}
  >
    Decrement
  </button>
  <button
    onClick={() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }}
  >
    Increment
  </button>
  <input
    type='text'
    value={this.state.message}
    onChange={e => this.setState({ message: e.target.value })}
    placeholder='Enter Your Message'
  />
  <button onClick={() => this.setState({ message: '' })}>Clear</button>

```

### Reference State

In order to reference state, you must reference the object called `state` in
your class object. Use the keyword `this` to do so and update the `value` for
the `message` input as well as the two props that are being passed to
`FunctionalComponentTwo`.

## Add A Component Method

There are several ways to add a method to your component. Albeit, considered
'experimental' in the React documentation, the most popular way is to define
your method before the `render` method using a `fat arrow` function. Because fat
arrow functions have no `this`, the function will `bind` automatically to the
new `instance`.

Using fat arrow function syntax, create a method called `handleClick`. Invoke an
`alert` that says, `Button has been Clicked!`.

Now add an `onClick` event handler to the Alert button and trigger the alert
message using the `handleClick` method.

Did you remember to use `this`?

Those code blocks should now look something like this:

```js

  handleClick = () => {
    alert('Button has been Clicked!');
  };

```

```js

  <button
    className='alert-button'
    onClick={() => this.handleClick()}
  >
    Alert
  </button>

```

Now that you have your class component setup, let's export it and import it in
your __App.js__. Replace `FunctionalComponentOne` with your new class component.

## What you have learned

**Congratulations!** In this practice you have learned:

- Create a Class Component
- Convert a Function Component to a Class Component
- Initialize state using the `this.state` method
- Update state using the `this.setState` mehthod
- Create a method in a Class Component



[react-component]: https://reactjs.org/docs/react-component.html
[setstate]: https://reactjs.org/docs/react-component.html#setstate
[state]: https://reactjs.org/docs/react-component.html#state