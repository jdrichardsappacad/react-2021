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

`useEffect` runs after the first render and every subsequent re-render.

In your `Main` Component file, at the top, import the useEffect hook from React.

```js
import { useEffect } from 'react';
```

Next, place a `useEffect` function, passing just the first argument function
inside your `Main` component.

The function should log `'UseEffect1 Ran'`.

Also, just inside the wrapper `div` element in your return, log `rendered or re-rendered`.

So far, your component should resemble the one below.

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
