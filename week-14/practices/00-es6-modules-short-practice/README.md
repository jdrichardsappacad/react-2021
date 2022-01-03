# ES6 Modules Practice

In this practice, you will create import and export statements following the ES6
JavaScript module syntax.

## Setup

- Run `npm install` to install dependencies
- Run `npm start` to start the server
- Navigate to `http://localhost:5000` in your browser

## Imports

You will notice that in the browser, there's only a blank page, and in the
browser console, you will see an `Uncaught ReferenceError`. The error should
point to line 10 of the `main.js` file, so open up that `main.js` file.

Resolve the error message by importing `createHeading` from the
`modules/create-heading.js` file. You will want to look at the
`modules/create-heading.js` file to see how `createHeading` gets exported.

Currently, `createHeading` doesn't get exported, so let's change that. In the
`modules/create-heading.js` file, export the `createHeading` function as the
default export of that file. Then, go back to the `main.js` file, and import
`createHeading` from `modules/create-heading.js`. Make sure that you are
importing with a relative path to the file, and include the file's extension in
the import statement. Refresh your browser, and notice that the original error
message is gone, and has been replaced by another `Uncaught ReferenceError`.

Open up `modules/create-paragraph-content.js` for this next step. Notice that
`createParagraphContent` is already being exported from this file as the default
export. Back in `main.js`, import the `createParagraphContent` function as
`createParagraph` to match the name that was used in the `main` function.
Refresh the page to see the updated page and next error.

This next error requires you to import the `createLoremIpsumParagraphContent`
function from the `modules/create-paragraph-content.js` file. Going back to the
`modules/create-paragraph-content.js` file, notice that the
`createLoremIpsumParagraphContent` function has not been exported yet. Go ahead
and export that function as a named export. Then, in the `main.js` file, import
that function from the `modules/create-paragraph-content.js` file.

The final error message directs you to the `modules/create-paragraph-content.js`
file. The `loremIpsum` variables used in the `createLoremIpsumParagraphContent`
function needs to be imported from the `modules/lorem-ipsum.js` file. Open that
file to see how the `loremIpsum` variable gets exported. This export statement
is another example of a named export, so import `loremIpsum` accordingly into
the `modules/create-paragraph-content.js` file.

## Wrapping Up

In this exercise, you:

- Imported both default and named exports
- Exported with both default and named export syntax
