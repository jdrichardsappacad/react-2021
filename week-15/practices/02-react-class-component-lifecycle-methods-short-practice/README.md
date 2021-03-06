# Class Component Lifecycle Methods

In this short practice you will use 3 basic Lifecycle methods included in React:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

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

Take a look at the code. Review the differences between the equivalent
`functional` and `class` components. You are going to add lifecycle methods to
`ClassKuiper` and `ClassTitan`.

## componentDidMount and componentWillUnmount

In the `ClassTitan` component, there is a `useEffect` that has a setTimeout that
will end in 7 seconds. Also notice that there is a cleanup function. When the
user clicks one of the buttons in the `Navbar` and `unmounts` this component,
the timer function will be cleaned out, preventing a memory leak.

You will use two lifecycle methods, `componentDidMount` and
`componentWillUnmount` to add this functionality in `ClassTitan`.

Create a `componentDidMount` lifecycle method in your `ClassTitan` component,
beneath your `constructor` function. Inside the `componentDidMount`, create a
`setTimeout` function that, after seven seconds, changes the `mood` state to
`'MAD'` and `display` to `none`. This setTimeout function will only run once
because the `componentDidMount` method only runs once, after the initial render.

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

Now that you have your class component setup, let's export them and import them
in your __App.js__. Replace the functional components with your new class
components.

## componentDidUpdate

Now navigate to the `ClassKuiper` component. Look at the `FunctionKuiper`
component. Notice the `useEffect` that listens for the `guessCount` to change.

Create a `componentDidUpdate` method in the `ClassKuiper` component. When the
`guessCount` state is greater than 4, the `myStateSetters` function should be invoked
passing `0` for the `count` state and a `kuiperSleep` variable for the `kuiper`
state. Also, an `alert` method should be invoked with a message that says:
`Sorry you have used your 5 guesses! You lose! Start again!`

This `componentDidUpdate` lifecycle method won't run after initial render. But,
it will run after every re-render. However, the functionality will only execute
when the conditional, `if` criteria is met.

## What you have learned

**Congratulations!** In this practice you have learned:

- using the 3 basic React `Lifecycle Methods` with Class Components:
  1. `componentDidMount`
  2. `componentDidUpdate`
  3. `componentWillUnmount`

