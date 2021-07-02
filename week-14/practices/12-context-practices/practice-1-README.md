# Practice: Context Provider with Dynamic Value Practice

In this practice, you will:

* Set up a context provider to use state to hold a dynamic value for the context

## Phase 0: Setup

Download the [starter][context-starter] file for this practice.

Open the starter in VSCode and run `npm install` in the terminal.

Run `npm start` to make sure your project is set up correctly.

## Overview

For this phase, we will be working with the `Navbar` component to have our
context value dynamically change with each `onClick` of the `span` element.

## Phase 1: Create context

To start, in your `src` directory, create a new directory called `context`. In this
`context` directory, create a file called `HoroscopeContext.js`. This is where
all your horoscope context will be placed.

At the top of this file, bring in `createContext` from `react` and create your
context called `HoroscopeContext`. Make sure to `export` it.

Next, create a new component called `HoroscopeProvider`, that will take `props`.
For your return statement, use your `HoroscopeContext` provider component
and wrap it around your `props.children`. Once complete, also export the
component.

Now it's time to navigate to your `src/index.js`. This is where we will use our
`HoroscopeProvider` component, so import the component at the top of your file.

In your `Root` component, wrap your `App` component with the `HoroscopeProvider`
you just imported.

If all wemt well, you should be able to see your `HoroscopeContext.Provider` in your
browser. In order to see that, head over to your browser and open devTools.
(Remember to `npm start` so your server is running!) In devTools, navigate to
your `Components` tab from [React Developer Tools](react-devtools). As you take
a look at your component tree, `HoroscopeContext.Provider` should be at the top
level.



[context-starter]: ./starter
[react-devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
