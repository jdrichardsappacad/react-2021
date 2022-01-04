# Practice: Context Provider and Consumer Practice

In this series of practices, you will set up a React Context `Provider` to
provide values to any component that needs it without `prop drilling` or `prop`
`threading`. You will also set up `Consumer` using the `useContext` hook to
acquire and use any values received from the `Provider`.
 
## Set up

Make sure you are logged in to your [codesandbox.io][code-sandbox] account.

Navigate to the [starter][starter] repo for this short practice.

### 2 Options:

#### Option 1: (this simplest option)

- In the url of the starter repo, append `box` to the word `github` and hit
  `Enter` or `return` depending on your computer. You should be taken to
  [codesandbox.io][code-sandbox] and the app should be loaded for you.
- Example: If the repo was
  `https://github.com/reduxjs/redux/tree/master/examples/todomvc` it would
  become `https://githubbox.com/reduxjs/redux/tree/master/examples/todomvc`

#### Option 2:

- Navigate to codesandbox.io and sign in. Click `Create Sandbox` then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.

## Create Context

To start, in your `src` directory, create a new directory called `context`. In
this `context` directory, create a file called `HoroscopeContext.js`. This is
where all your horoscope context will be placed.

At the top of this file, import `createContext` from `react` and create your
context called `HoroscopeContext`. If you're lost, don't forget to check out
[documentation][create-context]. Make sure to `export` your `HoroscopeContext`.

Awesome! We have created our context, now let's use our `Provider` component.

## Create Context Provider

In your `src/index.js` file, import `HoroscopeContext` from our `context`
directory.

Inside your `Root` functional component, wrap `<App/>` with the
`HoroscopeContext.Provider` component. This is how you will give horoscope
context to your entire application.

Let's make sure things are going smoothly.

Navigate to your browser and open the DevTools. If you look at your console, you
should see a warning message from React that says your `Context.Provider` is
missing a `value` prop. This means that we have successfully created our context
provider, but now we must deal with this warning message.

## Consume the Context

As you have seen in your DevTools, React is warning us that we need to have a
`value` prop in our `Context.Provider`. This `value` prop is what holds all of
our global state. Our goal is to pass a value in the `value` prop object and
later consume that context value.

In the `HoroscopeContext.Provider` component, include your `value` prop and set
it to an object with the key of `sign` and value of `Leo`. (Feel free to use any
other sign.) The object should look like below:

```js

  { sign: "Leo" }

```

If you refresh your browser, the warning message should disappear now.

Now it is time to consume the context. Navigate to your `Detail` component. At
the top, import `useContext` from react. Next, import `HoroscopeContext` from
`context/HoroscopeContext.js`. Inside your `Detail` component, create a
variable, `HoroscopeObj` and have it equal to `useContext` invoked with
`HoroscopeContext` passed in as your argument.

### It's time to test!

Navigate to your browser's DevTools and click on your `Component` tab, which
comes from Google extension [React Developer Tools][react-devtools]. You should
be able to see your component tree and most importantly, your
`Context.Provider`.

If you click on your `Context.Provider`, you should see your `value` under the
`prop` section. That is what your global state looks like.

If you click on your `Detail` component, you should see a `hooks` section, where
your context is located. This is where your `Detail` component is _consuming_
the context.

**Congratulations!**

You have done the following:

1. Created context with `createContext`
2. Used your `Context.Provider` and wrapped your entire application with it.
3. Consumed the context in your `Detail` component.

[starter]: ./starter
[create-context]: https://reactjs.org/docs/context.html#reactcreatecontext
[react-devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
[code-sandbox]:http://www.codesandbox.io