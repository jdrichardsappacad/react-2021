# Practice: Context Provider with Dynamic Value Practice

In this practice, you will:

* Set up a context provider to use state to hold a dynamic value for the context

## Phase 0: Setup

Download the [starter][context-starter] file for this practice.

Open the starter in VSCode and run `npm install` in the terminal.

Run `npm start` to make sure your project is set up correctly.


## Phase 1: Create context

To start, in your `src` directory, create a new directory called `context`. In this
`context` directory, create a file called `HoroscopeContext.js`. This is where
all your horoscope context will be placed.

At the top of this file, import `createContext` from `react` and create your
context called `HoroscopeContext`. Make sure to `export` it.

Next, create a new component called `HoroscopeProvider`, take in `props` as its
parameter.For your return statement, use your `HoroscopeContext` provider
component and wrap it around your `props.children`. Once complete, also export
the component.

Now it's time to navigate to your `src/index.js`. This is where we will use our
`HoroscopeProvider` component, so import the component at the top of your file.

In your `Root` component, wrap your `App` component with the `HoroscopeProvider`
you just imported.

If all went well, you should be able to see your `HoroscopeProvider` in your
browser's DevTools. In order to see that, head over to your browser and open
DevTools. (Remember to `npm start` so your server is running!) In DevTools,
navigate to your `Components` tab from [React Developer Tools](react-devtools).

As you take a look at your component tree, `HoroscopeProvider` should be
at the top-level followed by your `Context.Provider`.


## Phase 2: Update Context.Provider

If you took a look at your console tab in DevTools and saw a warning message
from React about a missing value prop, we most definitely did not pass one into
our `HoroscopeContext` provider, so let's do that!

Back to our `HoroscopeProvider` component (`src/context/HoroscopeContext.js`),
create a state for our `currentSign` and have the default value be any
horoscope sign you want. If you don't know which one, `"Leo"` is a good one,
it's only 3 characters long. (Did you remember to import `useState`?)

Once you have created your `currentSign` state, pass `currentSign` and
`setCurrentSign` as the value in our `HoroscopeContext.Provider`. It should look
something like this:

```javascript
<HoroscopeContext.Provider value={{currentSign, setCurrentSign}}>
```

Now take a look at your Component tab in DevTools again! If you click on your
`Context.Provider` component, you should see your value, under props section,
equal to our `currentSign` and `setCurrentSign`.


## Phase 3: Use Context in Navbar Component

In Phase 1 and 2, we have created our context and had our provider wrap our
entire App. The final step we need to take is *consume* our context.

In your `Navbar` component (`src/components/Navbar.js`), import `useContext` and
`HoroscopeContext`. Inside your `Navbar` component, destructure your
`setCurrentSign`, which comes from invoking `useContext` and passing in your
`HoroscopeContext` as an argument.

Keep in mind, when we use the `useContext` hook and pass the context in,
the value we get back will be the object we passed in our value prop from the
context provider. In our case, the object will look like below, which is why we
can destructure:

```javascript
{
  currentSign: "Leo",
  setCurrentSign: *function*
}
```

With the `setCurrentSign` function, every time there is an `onClick` for the
`<span>` element, we will `setCurrentSign` to the `sign`, so go ahead and
implement that.

To confirm you have done this correctly, head back over to your browser and make
sure your devTools => Component tab is open. Select your Navbar component and
pay attention to your `hooks` section where your context is. As you click on
each span, your `currentSign` should also update accordingly to the sign you
have clicked on.


**Congratulations!**

You have successfully used your context provider to dynamically change your
value.



[context-starter]: ./starter
[react-devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
