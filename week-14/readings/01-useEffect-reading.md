# useEffect Hook Rendering

One of the most important things to understand about the useEffect hook is how
it renders. Every useEffect hook renders after the first render of a functional
component. Whether the useEffect function ever runs again after that depends on
different factors.

When you finish this article you should:

- Understand the two arguments in a useEffect function
- Know when a useEffect function renders
- Understand how to use the optional dependency array
- Know how to use the optional cleanup function
- Understand when to use the optional cleanup function

## Setup for following along

If you want to follow along, create a React application using create-react-app with the @appacademy/react-v17 template:

`npx create-react-app useeffect-rendering --template @appacademy/react-v-17`

## Create a Main.js Component

In your `src` folder, create a file called `Main.js`. Create a functional
component called Main with an `h1` with text Main Component and give it a default export.

**Main.js**

```js
const Main = () => {
  return (
    <div>
      <h1>Main Component</h1>
    </div>
  );
};
export default Main;
```

Add the `Main` component to your `App.js` by importing it and replacing
the `h1` tag with the `Main` component.

**App.js**

```js
import Main from './Main';

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
```

### UseEffect With No Dependency Array

With no dependency array, `useEffect` runs after the first render and every
subsequent re-render.

Place the code below in your `Main` Component file.

```js
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    console.log('UseEffect1 Ran');
  });

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>Main Component</h1>
    </div>
  );
};
export default Main;
```

Notice that the useEffect has been called with just one argument, the callback function.

`npm start` your project, open your Dev Tools and choose the `Console`

Refresh your page and look in the Dev Tools Console.
You should see:

```md
rendered or red-rendered
UseEffect1 Ran
```

Now you have seen that the useEffect runs after the first render. But what about
when the Main component re-renders?

Import useState and add a slice of state named `ToggleOne` to your `Main`
component with an initial state boolean of `false`.

Your state should look similar to the code below:

`const [toggleOne, setToggleOne] = useState(false)`

Next, below your `h1` create a Button with the child text `ToggleOne`. Add an
`onClick` event handler to the button. Using the setToggleOne updater function,
change the value of the `toggleOne` state to the opposite value. ( i.e. If the
value is true then it should change to false and vice-versa).

```js
<button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
```

Now test again in the Browser Dev Tools' console.

Each time you click the `ToggleOne` button you should see an additional

```md
rendered or red-rendered
UseEffect1 Ran
```

### UseEffect with an Empty Dependency Array

UseEffect with an empty dependency array will run only one time, directly after
the first render.

Add an empty dependency array as a second argument to your `useEffect`.

Go to your Browser's Dev Tools Console and test again. On the first render you
will again see:

```md
rendered or red-rendered
UseEffect1 Ran
```

However, click the `ToggleOne` button repeatedly. Every click updates the state,
which triggers a subsequent re-render. However, because of the dependency array
as the second argument to the useEffect, the useEffect never runs again. You
will instead only see:

```md
rendered or red-rendered
```

followed by a number incrementing next to that log for each click.

### Adding state to the UseEffect Dependency Array

The useEffect dependency array can be used to listen for changes in either state
or props.

In your `Main` component, add a new slice of state that returns a destructured
`toggleTwo` and `setToggleTwo` variable. The initial value should be set to
false. It should look identical to the `toggleOne` slice of state except for the
naming.

`const [toggleTwo, setToggleTwo] = useState('')`

In your JSX below the ToggleOne button, add a ToggleTwo button. It should also
be identical to the previous button except for the name.

Add another useEffect beneath the first one that looks like the useEffect below:

```js
useEffect(() => {
  console.log('UseEffect2 Ran');
}, [toggleTwo]);
```

Here is the new order. When the page renders, you will see

```md
rendered or red-rendered
UseEffect1 Ran
UseEffect2 Ran
```

Now, when you click on the `ToggleTwo` button it will trigger an order of
events:

1. You click on the `ToggleTwo` button.
2. The `toggleTwo` state will be updated
3. The Main Component will re-render
4. The `useEffect` function that has `toggleTwo` in the dependency array will
   run again.

Notice if you click the `toggleOne` button the only thing that happens is

```md
rendered or red-rendered
```

is logged.

### Running functionality in useEffect based on condition
