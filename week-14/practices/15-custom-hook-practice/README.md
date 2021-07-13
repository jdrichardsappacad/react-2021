# Practice: Custom Hook

In this practice you will learn how to create a custom hook in React.

## Phase 0: Setup

Clone the [starter], `cd` into the project directory, install dependencies with
`npm install`, and try to start the server with `npm start`.

### Phase 0b: Project Breakdown

Hooks are just functions in React that start with "use" and can only be used in
Functional Components. In the starter, notice that in the `src` directory,
there's a `hooks` directory and a `utils` directory. In the `utils` directory,
you will find a `validations.js` file that exports on validator. In the `hooks`
directory, you'll find the `textInput.js` file which is exporting a
`useTextInput` custom hook. That's what we'll be writing in this exercise.

[starter]: ./starter
