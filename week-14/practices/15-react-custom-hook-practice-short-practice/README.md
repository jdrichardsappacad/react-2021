# Practice: Custom Hook

In this practice you will learn how to create a custom hook in React.

## Set up

Make sure you are logged in to your [codesandbox.io] account.

Navigate to the starter repo for this short practice by clicking the `Download
Project` button at the bottom of the page. Use one of the following options to
load the practice into codesandbox.

### Option 1 (the simplest option)

- In the url of the starter repo, append `box` to the word `github` and hit
  `Enter` or `return` depending on your computer. You should be taken to
  [codesandbox.io] and the app should be loaded for you.
- Example: If the repo was
  `https://github.com/reduxjs/redux/tree/master/examples/todomvc`, it would
  become `https://githubbox.com/reduxjs/redux/tree/master/examples/todomvc`

### Option 2

- Navigate to [codesandbox.io] and sign in. Click `Create Sandbox`, then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.

### Project Breakdown

Hooks are just functions in React that start with "use" and can only be used in
Functional Components. In the starter, notice that in the `src` directory,
there's a `hooks` directory and a `utils` directory. In the `utils` directory,
you will find a __validations.js__ file that exports on validator. In the
`hooks` directory, you'll find the __textInput.js__ file which is exporting a
`useTextInput` custom hook. That's what we'll be writing in this exercise.

## Update Form Component

First, you will update the `Form` component to use the custom hook that is being
exported from __src/hooks/textInput.js__. In __src/components/Form.js__, you
will find the `Form` component. In this component, you will replace the logic
that is happening with the `useState` hook and the array methods above the
`return` statement with the custom hook, which means that all this logic will be
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

  const [name, setName, nameErrors] = useTextInput({
    validations: textInputValidators,
  });

```

## Write the Custom Hook

Because this custom hook will encapsulate some of the properties of a `useState`
hook, import the `useState` hook from the `react` package at the top of the
__src/hooks/textInput.js__ file. In the `useTextInput` function, pass in a
parameter of an object literal with keys of `validations` and `defaultValue` and
set them equal to an empty array literal and an empty string literal,
respectively.

The function definition should look like:

```js

  export const useTextInput = ({ validations = [], defaultValue = '' }) => {};

```

In the body of the hook, invoke the `useState` hook and pass it the
`defaultValue` variable as the only argument, then, set it equal to a
destructured array with the values `value` and `setValue`. You can name those
like you would with any other `useState` call, `value` and `setValue` are meant
to be generic so that this hook is reusable for multiple text input fields.

Paste in the three lines with the array methods from the `Form` component and
modify them to use the `value` variable instead of the `name` variable from
earlier. Change the `nameErrors` variable to be `errors` instead to make it
generic as well.

After the array methods `return` an array with `value`, `setValue`, and `errors`
in that order, so that it matches what we expected in the `Form` component.

Test out the form in the browser. Does the same functionality exist?

You can also move the function that is being used in the `onChange` event
handler in the `Form` component into the custom hook, and instead of returning
the `setValue` setter function that comes directly from the `useState` call, you
could return an event handler version to further encapsulate the logic within
the hook.

## What you have learned

**Congratulations!** In this practice you have learned:

- Move logic away from a component and into a custom hook
- Use other hooks in a custom hook

[code-sandbox]:http://www.codesandbox.io