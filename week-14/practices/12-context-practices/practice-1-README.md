# Practice: Context Provider with Dynamic Value Practice

In our previous practice, we have created our context and consumed it in our
`Detail` component. Let's now make this a more dynamic and show you how context
can be used!

In this practice, you will:

* Set up a Context Provider to set the value of a context and read it in a
component when your context value changes.

## Phase 1: Refactor the `Context.Provider`

If you rememeber in our first practice, we had our `HoroscopeContext.Provider`
wrap around our `App` component in `src/index.js`. While this process is
acceptable, it's not common practice. What you often see is a provider component
that wraps your application instead. Let's create one so you can see what that
means.

In your `HoroscopeContext.js` file, create a new component called
`HoroscopeProvider`, that take in `props` as its parameter. For your return
statement, use your `HoroscopeContext` provider component and wrap it around
your `props.children`. Once complete, make sure to export the component.

Now it's time to navigate to your `src/index.js`. This is where we will use our
`HoroscopeProvider` component, so import the component at the top of your file.

In your `Root` component, instead of the `HoroscopeContext.Provider` component,
wrap your `App` component with the `HoroscopeProvider` you just imported.

If all went well, your browser should still look the same. However, if you look
at your component tree, you should be able to see your `HoroscopeProvider` in
your browser's DevTools with `Context.Provider` nested inside, and `App` inside
`Context.Provider`. If you don't remember how to get there, head over to your
browser and open DevTools. (Remember to `npm start` so your server is running!)
In DevTools, navigate to your `Components` tab from
[React Developer Tools](react-devtools).

This is what you should see:

```
Root
  \
  HoroscopeProvider
    \
    Context.Provider
      \
      App
```

## Phase 2: Update Context Value

If you took a look at your console tab in DevTools and saw a warning message
from React about a missing value prop, we most definitely did not pass one into
our `HoroscopeContext` provider this time, so let's do that!

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

## Phase 3: Use Context in Detail Component

In Phase 1 and 2, we have created our context and had our provider wrap our
entire App. The final step we need to take is *consume* our context.

In your `Detail` component (`src/components/Detail.js`), import `useContext` and
`HoroscopeContext`. Inside your `Detail` component, destructure your
`currentSign`, which comes from invoking `useContext` and passing in your
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


[context-starter]: ./starter
[react-devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
