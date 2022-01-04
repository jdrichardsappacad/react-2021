# Practice: Context Provider with Dynamic Value Practice

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

## Recap

In our previous practice, we have created our context and consumed it in our
`Detail` component. Let's now make our value more dynamic and show you how
context can be used!

In this practice, you will:

- Set up a Context Provider to set the value of a context and read it in a
  component when your context value changes.

## Refactor the `Context.Provider`

If you rememeber in our first practice, we had our `HoroscopeContext.Provider`
wrap around our `App` component in `src/index.js`. While this process is
acceptable, it's not common practice. What you often see is a provider component
that wraps your application instead. Let's create one so you can see what that
means.

In your `HoroscopeContext.js` file, create a new component called
`HoroscopeProvider`, that takes in `props` as its parameter. For your return
statement, use your `HoroscopeContext` provider component and wrap it around
your `props.children`. Once complete, make sure to export the component as a
default.

Now it's time to navigate to your `src/index.js`. This is where we will use our
`HoroscopeProvider` component, so import the component at the top of your file.

In your `Root` component, instead of the `HoroscopeContext.Provider` component,
wrap your `App` component with the `HoroscopeProvider` you just imported.

If all went well, your browser should still look the same. However, if you look
at your component tree, you should be able to see your `HoroscopeProvider` in
your browser's DevTools with `Context.Provider` nested inside, and `App` inside
`Context.Provider`. If you don't remember how to get there, head over to your
browser and open the DevTools. (Remember to `npm start` so your server is
running!) In DevTools, navigate to your `Components` tab from
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

## Update Context Value

If you took a look at your console tab in DevTools and saw a warning message
from React about a missing value prop, you most definitely did not pass one into
our `HoroscopeContext` provider this time, so let's do that with some state!

Back to our `HoroscopeProvider` component (`src/context/HoroscopeContext.js`),
create a state for our `currentSign` and have the default value be any
horoscope sign you want. Make sure it starts with a capital letter, this will be
important later on. If you don't know which one, `"Leo"` is a good one,
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

## Use Context in Detail Component

We created our context and had our provider wrap our entire App. The final step
we need to take is to _consume_ our context and display the `currentSign`'s
details.

In your `Detail` component (`src/components/Detail.js`), we should have already
imported `useContext` and `HoroscopeContext`. Inside your `Detail` component,
destructure your `currentSign`, which comes from invoking `useContext` and
passing in your `HoroscopeContext` as an argument.

Keep in mind, when we use the `useContext` hook and pass the context in,
the value we get back will be the object we passed in our value prop from the
context provider. In our case, the object will look like below, which is why we
can destructure:

```javascript

  {
    currentSign: "Leo",
    setCurrentSign: function (f)
  }

```

Now that we have our `currentSign`, we will need to grab some details about this
sign. We have already created data for you to use, which is located in
`src/data/horoscopes.js`. Take a second to familiarize how the data is set up,
including how it's being exported.

At the top of your `Detail.js` file, import the `horoscopeObj`. Next, inside
the `Detail` component, create a new variable called `sign` and set it equal to
the sign's object by keying into the `horoscopeObj`, using your `currentSign`
state. Take a look at your `horoscopeObj` data again to help you see what we
need.

Below is the object we're trying to access if our `currentSign` is "Leo".

```js

 {
    "name": "Leo",
    "date": "Jul 23 - Aug 22",
    "element":"Fire",
    "traits": "Proud, Bold, Ambitious",
    "backgroundImg":"https://www.horoscope.com/images-US/signs/profile-leo.png",
    "match": "Libra"
  }
  
```

Once you have successfully grabbed the object, update your `<img>` src, `<h1>`,
`<h2>`, and `<h4>` elements with the according information of your `sign`
object.

If all was done correctly, when you refresh your browser, your `Detail`
component should display all of your `currentSign`'s information.

Head back to your `HoroscopeContext.js` and update your default state to another
sign! Does your `Detail` component also update?

**HOORAY!**

You have successfully created a dynamic value in your context provider and
consumed that context to display your `currentSign`'s information.

What we have done is:

1. Created a `HoroscopeProvider` that holds our `Context.Provider` and
   refactored our `src/index.js` file to wrap our entire `App` with the
   `HoroscopeProvider`.
2. Created a state of the `currentSign` with `useState` so we can dynamically
   change our default value and passed it into our `HoroscopeContext.Provider`
   value prop.
3. Consumed the context in our `Detail` component so we could grab the
   `currentSign`'s details using our `horoscopeObj` data.
4. Manually updated our `currentSign`'s default value and have that change the
   information in our `Detail` component as well.

[react-devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
[code-sandbox]:http://www.codesandbox.io