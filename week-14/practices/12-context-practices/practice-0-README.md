# Practice: Context Provider and Consumer Practice

In this practice, you will:

* Set up a Context Provider and Consumer Walkthrough to set the value of a
context and read it in a component

## Phase 0: Setup

Download the [starter][context-starter] file for this practice.

Open the starter in VSCode and run `npm install` in the terminal.

Run `npm start` to make sure your project has not run into any errors.

## Phase 1: Create Context

To start, in your `src` directory, create a new directory called `context`. In
this `context` directory, create a file called `HoroscopeContext.js`. This is
where all your horoscope context will be placed.

At the top of this file, import `createContext` from `react` and create your
context called `HoroscopeContext`. You will not need a default value, so leave
it empty. If you're lost, don't forget to checkout
[documentation][create-context]. Make sure to `export` your `HoroscopeContext`.

Awesome! We have created our context, now let's use our provider.

## Phase 2: Create Context Provider

In your `src/index.js` file, import `HoroscopeContext` from our `context`
directory.

Inside your `Root` functional component, wrap your `<App/>` with the
`HoroscopeContext.Provider` component. This is how you will allow your entire
application access to your horoscope context.

Let's make sure things are going smoothly, so make sure your server is running
(`npm start` at the root of your starter, which is the same level as your
`package.json`).

We will now navigate to your browser and open the DevTools. If you look at your
console, you should see a warning message from React that says your
`Context.Provider` is missing a `value` prop. This means that we have
successfully created our context provider, but now we must deal with this
warning message.

## Phase 3: Consume the Context

As you have seen in your DevTools, React is warning us that we need to have a
`value` prop in our `Context.Provider`. This `value` prop is what holds all
of our global state. Our goal is to create that pass a value in the `value` prop
and consume that context.

In the `HoroscopeContext.Provider` component, include your `value` prop and set
it to an object with the key of `sign` and value of `Leo`. (Feel free to use any
other sign.) We're expecting the object to look like below:

```javascript
{"sign": "Leo"}
```

If you refresh your browser, the warning message should disappear now.

Now it is time to consume the context, so navigate to your `Details` component.
At the top, import useContext from react. Next, import HoroscopeContext from
context/HoroscopeContext.js. Inside your `Detail` component, create a variable
and have it equal to `useContext` invoked with `HoroscopeContext` passed in as
your argument.

### It's time to test!

Make sure you have your server running with `npm start`. Navigate to your
browser's DevTools and click on your `Component` tab, which comes from Google
extension [React Developer Tools][react-devtools]. You should be able to see
your component tree and most importantly, your `Context.Provider`.

If you click on your `Context.Provider`, you should see your `value` under the
`prop` section. That is what your global state looks like.

If you click on your `Detail` component, you should see a `hooks` section, where
your context is located. This is where your `Detail` component is *consuming*
the context.

**Congratulations!**

You have done the following:

1. Created context with `createContext`
2. Used your `Context.Provider` and wrapped your entire application with it.
3. Consumed the context in your `Detail` component.


[context-starter]: ./starter
[create-context]: https://reactjs.org/docs/context.html#reactcreatecontext
[react-devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
