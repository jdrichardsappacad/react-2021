# Class Component Lifecycle Methods

In this short practice you will use 3 basic Lifecycle methods included in React:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Setup

Download the Starter from below.

- Run `npm install` to install dependencies
- Run `npm start` to start the server
- Navigate to `http://localhost:3000` in your browser

Take a look at the code. Review the differences between the equivalent
`functional` and `class` components. You are going to add lifecycle methods to
`ClassKuiper` and `ClassTitan`.

## componentDidMount and componentWillUnmount

In the `ClassTitan` component,there is a `useEffect` that has a setTimeout that
will end in 7 seconds. Also notice that there is a cleanup function. When the
user clicks one of the buttons in the `Navbar` and `unmounts` this component,
the timer function will be cleaned out, preventing a memory leak.

You will use two lifecycle methods, `componentDidMount` and
`componentWillUnmount` to add this functionality in `ClassTitan`.

Create a `componentDidMount` lifecycle method in your `ClassTitan` component,
beneath your `constructor` function. Inside the constructor function, create a
`setTimeout` function that, after seven seconds, changes the `mood` state to
`'MAD'` and `display` to `none`. This `setTimeout` function will only run once.
The `componentDidMount` method only runs once, after the initial render.

Next, create a `componentWillUnmount` lifecycle method beneath the
`componentDidMount`. Inside this method, you should cleanup the setTimeout when
the `ClassTitan` component is unmounted. **Never set state in this method.**

If you are successful, your code should resemble the code below:

```js

 componentDidMount() {
    this.setMood = setTimeout(() => {
      this.setState({ mood: 'MAD', display: 'none' });
    }, 7000);
  }

  componentWillUnmount() {
    clearTimeout(this.setMood);
  }

```

## componentDidUpdate

Now navigate to the `ClassKuiper` component. Look at the `FunctionKuiper`
component. Notice the `useEffect` that listens for the `guessCount` to change.

Create a `componentDidUpdate` method in the `ClassKuiper` component. When the
`guessCount` state is greater than 4, the `mySetters` function should be invoked
passing `0` for the `count` state and a `kuiperSleep` variable for the
`kuiper`state. Also, an `alert` method should be invoked with a message that
says: `Sorry you have used your 5 guesses! You lose! Start again!`

This `componentDidUpdate` lifecycle method won't run after initial render. But,
it will run after every re-render. However, the functionality will only execute
when the conditional, `if'`criteria is met.

Congratulations! In this short practice you have used 3 basic React
`Lifecycle Methods` with Class Components:

1. `componentDidMount`
2. `componentDidUpdate`
3. `componentWillUnmount`
