# Basic Hooks - useState

In this practice you will learn to use one of the most basic hooks, the
[useState][use-state] hook. You will use the useState hook to change a
background theme from light to dark, as well as to increment and decrement a number.

## Phase 0: Setup

Clone the [starter][starter] repo and in your terminal `npm install` and `npm start` your project. You should see `UseState Component` in the browser if all
is working properly.

## Phase 1: Background Theme

Take a look at the `UseState.css` file in the `UseState` directory. Notice that
there is a class for light and for dark. You will use these class to change your
background based on a button click.

Open your `index.js` file in your `UseState` directory.

Import the `UseState.css` file into your `index.js` file using a relative path.

```js
import './UseState.css';
```

In order to create state in your component you must first import the useState
hook from the react package. Place this import above your css import.

```js
import {useState} from 'react
```

Now, inside your functional component, type `console.log(useState('light'))`
In your browser DevTools, look at the console. Notice, the two values that are
returned. The first value is your current state, and the second value is the
updater function used to update the state. Now remove the `console.log`

Next, inside your functional component, declare state by destructuring the two
returned values,from the invoked useState function. Give this useState function
an initial state of 'light'.

```js
const [theme, setTheme] = useState('light');
```

Go to your browser and take a look at your React DevTools. Click on the UseState
component. Notice under hooks -> State you will see the string `light`. This is
the default value you have now stored in state.

You are now going to add this light theme to your JSX. Inside the `div` element,
add a `className` and give it the value `theme`. Remember your curly braces.

When you look at your browser you should see the light theme color as your
background.

## Phase 2: Alternating the theme

You've used the useState hook to create a background color but you have not yet
used the updater function. So now we are going to create buttons that will allow
the theme to either be light or dark.

Beneath the `h1` tag, create a `button` element with the child text of `Dark`.

Inside the button you will use your first [event handler][event-handler]. Create
an `onClick` handler as an attribute to your button element. Remember that
onClick handlers in React use camel case and should be assigned a function. Give
the onClick handler a function that returns an invoked `setTheme` updater
function which takes the argument `'dark'`.

Go to your browser and click the button. Your background should now switch from
light to dark.

Repeat the same process for creating the button for `Light`.

## Phase 3: Add A Count Slice of State using the optional callback function

When you need a slice of state for a different concern you simply add an
additional slice of state to the component using useState.

You now need a slice of state for a count. Create that slice of state using
`count` and `setCount` and give the state an initial value of the number, `0`.

Check your React Dev Tools to see that you now have a slice of state with the
initial value of `light`, and a slice of state with the initial value of `0.

You should also see a 0 as the count in your browser.

Beneath the Dark button, create an `h1` element and use the count variable as
the child element.

Create a `button` element with the child text, `Increment`. Use the `onClick`
event listener and the updater function for the count to increment the count.

Test this button in your browser.

Create a decrement button using the same technique.

Phase 4: Optional Callback Function

You are now going to use the optional callback function included as an argument
to the updater function, in this case the setCount function, in order to ensure
that the state is updated based on the actual previous state.

Inside your Increment button setCount invocation, remove the `count + 1` and
replace it with `(prevCount)=>prevCount+1`. Do the same for the Decrement
button. While you will not see a difference here, you are now ensuring that your
changes that are based on a previous state are updated correctly.

Phase 5: Bonus
Remove one of the buttons that change the theme and use on button only to switch
the theme from light to dark.

Congratulations! You have learned your first basic hook, useState.

What you have learned:

1. Creating state using the useState hook
2. Updating state using the returned updater function
3. Creating a separate slice of state for each concern.
4. Using the onClick event listener to click a button.
5. Using the optional updater function's function argument to ensure current
   state based on previous state.

[use-state]: https://reactjs.org/docs/hooks-state.html
[starter]: ./starter
[event-handler]: https://reactjs.org/docs/handling-events.html
