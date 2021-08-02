# useEffect Hook Rendering

One of the most important things to understand about the useEffect hook is how
it renders. Every useEffect hook renders after the first render of a functional
component. Whether the useEffect function every runs again after that depends on
different factors.

When you finish this article you should:

- Understand the two arguments in a useEffect function
- Know when any useEffect function renders
- Understand how to use the optional dependency array
- Know when the optional cleanup function in useEffect runs

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

Add the `Main` component to your `App.js` by importing it and placing it below
the `h1` tag.

**App.js**

```js
import Main from './Main';

function App() {
  return (
    <>
      <h1>App Component</h1>
      <Main />
    </>
  );
}

export default App;
```
