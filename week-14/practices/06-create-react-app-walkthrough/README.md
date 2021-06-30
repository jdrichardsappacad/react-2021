# Practice: Create React App

In this practice, you will:

* Generate a React app using the `create-react-app` CLI tool
* Modify it into a template that you can use more easily

## Phase 1: Generate a React app

Open up a terminal and change the directory until you are in the directory where
you want to create your React app. Then, run the following command:

```sh
npx create-react-app react-template
```

The main part of the command is `npx create-react-app` which takes a filename or
path. The command will generate a React app based on that filename or path and
install React's dependencies for you. Since we've passed the name
`react-template` to the command, it will have made a `react-template` directory
in your working directory and bootstrapped the React app in there.

In your terminal, `cd` into the `react-template` directory. Then, you can run
`npm start` to run your React app in a development environment. Ignoring the
`node_modules` directory with all the installed dependencies, the current file
structure in the `react-template` folder looks like this:

```plaintext
react-template
├── README.md               A generic README for a generated project
├── package-lock.json       The package lock file
├── package.json            The package.json file
├── public                  A directory to contain static images
│   ├── favicon.ico         The fancy icon to show up in the tab
│   ├── index.html          The skeleton HTML file React will put its DOM into
│   ├── logo192.png         A small version of the React logo
│   ├── logo512.png         A larger version of the React logo
│   ├── manifest.json       A manifest file for mobile device screen shortcuts
│   └── robots.txt          A robots.txt file
└── src
    ├── App.css             The App component's CSS
    ├── App.js              The App component
    ├── App.test.js         Test for the App component
    ├── index.css           CSS for the entire site
    ├── index.js            The entry file, code that renders the App component
    ├── logo.svg            The fancy spinning React logo
    ├── reportWebVitals.js  A performance measurement tool for the application
    └── setupTests.js       A file to set up tests
```

## Phase 2: Modify the current React app

Let's now remove all the files that, for the most part, we will not be using.

In the `public` directory, remove the following files:

* `logo192.png`
* `logo512.png`
* `robots.txt` (If you'd like to know more about what this file does, [here's a
    link][robots.txt].)

In the `src` directory, remove the following files:

* `App.css`
* `App.test.js`
* `logo.svg`
* `reportWebVitals.js`
* `setupTests.js`

Because you deleted those files, the application will no longer build. If
you haven't started your React app with `npm start` yet, now is a great time to
start it so that you can see the error messages that will show up.

Next, open up `src/App.js` and remove the following lines.

```js
import logo from './logo.svg';
import './App.css';
```

Then, delete everything between the parentheses of the `return` statement and
replace it with some JSX that shows an `h1` element with the message "Hello from
App". Your edits should result in a file that has this content.

```js
// ./src/App.js
function App() {
  return (
    <h1>Hello from App</h1>
  )
}
```

When you save that file, it will try to build your project again, and this time,
complain about the missing `reportWebVitals` file. Open up `src/index.js` and
remove the lines:

```js
import reportWebVitals from './reportWebVitals';

// Some code ...

reportWebVitals();
```

You can delete the big comment at the bottom of the file, too, because it will
no longer be relevant. When you complete those edits, you should now see "Hello
from App" in the browser. The `src/index.js` file should look like this.

```js
// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

[robots.txt]: https://en.wikipedia.org/wiki/Robots_exclusion_standard
