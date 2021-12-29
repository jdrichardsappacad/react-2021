# Basic Hooks - useState

In this practice you will learn to use one of the most basic hooks, the
[useState][use-state] hook. You will use the useState hook to change
a background theme from light to dark, as well as to increment and decrement
a number.

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

## Background Theme

Take a look at the `UseState.css` file in the `UseState` directory. Notice that
there is a class for light and for dark. You will use these classes to change
your background based on a button click.

Open your `UseState/index.js` file.

Import the `UseState.css` file into your `UseState/index.js` file using a relative path.

```js

   import './UseState.css';

```

In order to create state in your component you must first import the useState
hook from the `react` package. Place this import above your css import.

```js

   import {useState} from 'react';

```

Now, inside your functional component, type `console.log(useState('light'))`
In your browser DevTools, look at the console. Notice, the two values that are
returned. The first value is your current state, and the second value is the
updater function used to update the state. Now remove the `console.log`.

Next, inside your functional component, declare a theme state by destructuring the two
returned values,from the invoked `useState` function. Give this useState
function an initial state of `'light'`.

```js

   const [theme, setTheme] = useState('light');

```

Go to your browser and take a look at your React DevTools. Click on the
`UseState` component. Notice under hooks -> State you will see the string
`light`. This is the default value you have now stored in state.

You are now going to add this light theme to your JSX. Inside the `div` element,
add a `className` and give it the value `theme`. Remember your curly braces for
JavaScript.

When you look at your browser you should see the light theme color as your
background.

## Alternating the theme

You've used the `useState` hook to create a background color but you have not
yet used the updater function. So now we are going to create buttons that will
allow the theme to either be light or dark.

Beneath the `h1` tag, create a `button` element with the child text of `Dark`.

Inside the button you will use your first [event handler][event-handler]. Create
an `onClick` handler as an attribute to your button element. Remember that
`onClick` handlers in React use camel case and should be assigned a function.
Give the `onClick` handler a function that returns an invoked `setTheme` updater
function which takes a string argument `dark`.

Go to your browser and click the button. Your background should now switch from
light to dark.

Repeat the same process for creating the button for `Light`.

## Add A Count Slice of State

When you need a slice of state for a different concern you simply add an
additional slice of state to the component using useState.

You now need a slice of state for a count. Create that slice using `count` and
`setCount` as destructured indexes and give the state an initial value of the
number, `0`.

Check your React DevTools to see that you now have a slice of state with the
initial value of `light`, and a slice of state with the initial value of `0`.

You should also see a 0 as the count in your browser.

Beneath the Dark button, create an `h1` element and use the count variable as
the child element.

Create a `button` element with the child text, `Increment`. Use the `onClick`
event listener and the updater function for the count to increment the count.

Test this button in your browser.

Create a decrement button using the same technique.

## Optional Callback Function

You are now going to use the optional callback function included as an argument
to the updater function, in this case the setCount function, in order to ensure
that the state is updated based on the actual previous state.

Inside your Increment button setCount invocation, remove the `count + 1` and
replace it with `(prevCount)=>prevCount+1`. Do the same for the Decrement
button. While you will not see a difference here, you are now ensuring that your
changes that are based on a previous state are updated correctly.

## Bonus A

Remove one of the buttons that change the theme and use one button only to switch
the theme from light to dark.

Congratulations! You have learned your first basic hook, useState.

## Bonus B

Add the container class from `UseState.css` to your wrapping div along with the
`theme` variable.

## What you have learned

1. Creating `state` using the `useState` hook
2. Updating `state` using the returned updater function
3. Creating a separate slice of state for each concern.
4. Using the `onClick` event listener to click a button.
5. Using the optional callback function to ensure current
   state based on previous state.

[use-state]: https://beta.reactjs.org/reference/usestate 
[starter]: https://github.com/orgs/appacademy-starters/repositories?type=all
[event-handler]:
https://beta.reactjs.org/learn/responding-to-events#adding-event-handlers
