# Practice: Custom Hook

In this practice you will learn how to create a custom hook in React.

## Phase 0: Setup

Clone the [starter], `cd` into the project directory, install dependencies with
`npm install`, and start the server with `npm start`.

### Phase 0b: Project Breakdown

Hooks are just functions in React that start with "use" and can only be used in
Functional Components. In the starter, notice that in the `src` directory,
there's a `hooks` directory and a `utils` directory. In the `utils` directory,
you will find a `validations.js` file that exports on validator. In the `hooks`
directory, you'll find the `textInput.js` file which is exporting a
`useTextInput` custom hook. That's what we'll be writing in this exercise.

## Phase 1: Update Form Component

First, you will update the `Form` component to use the custom hook that is being
exported from `src/hooks/textInput.js`. In `src/components/Form.js`, you will
find the `Form` component. In this component, you will replace the logic that is
happening with the `useState` hook and the array methods above the `return`
statement with the custom hook, which means that all this logic will be
moved to the custom hook.

Comment out or remove the lines with the `useState` and array methods that are
above the `return` statement. At the top of this file, `import` the
`useTextInput` hook, and remove the import for the `useState` hook. Inside the
component, above the `return`, invoke the custom hook, and set it equal to a
destructured array, with the values, `name`, `setName`, and `nameErrors` in that
order. Pass the custom hook an argument of an empty object literal with a key of
`validations` that points to the `textInputValidators` that is being imported at
the top of the file.

```js
const [name, setName, nameErrors] = useTextInput({ validations: textInputValidators });
```

## Phase 2: Write the Custom Hook

[starter]: ./starter
