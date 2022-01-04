# Practice: Context Consumer Sets Dynamic Value Practice

With the previous practice, we consumed our context and created a state. If you
noticed, all we really did was display the sign's details based on our
`currentSign`'s default value. There must be a better way to do this!

In this practice, you will:

- Use a component that will dynamically set the value of the context
  (but not read the value). The other component should have the value update
  automatically.

- Show that other components that don't "consume the context" don't re-render.

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


## Use Context in Navbar Component

When consuming the context, it is important to note that the component consuming
the context will re-render everytime there is a change in context. In this
phase, we will look at the `Navbar` and `Sidecard` component, components
that are wrapped inside a context provider, but only the `Navbar` component is
consuming the context. The question you will need to think about is, does the
`Sidecard` component also re-render?

To start, navigate to your `SideCard` component (`src/components/Sidebar.js`)
and add a `console.log` with whatever message inside the component. This is so we
can track if the component re-renders when it's not consuming the context.

In your `Navbar` component (`src/components/Navbar.js`), import `useContext` and
`HoroscopeContext`. Now, inside your `Navbar` component, destructure your
`setCurrentSign`, which comes from invoking `useContext` and passing in your
`HoroscopeContext` as an argument.

With the `setCurrentSign` function, every time there is an `onClick` for the
`<span>` element, we will `setCurrentSign` to the `sign`, so go ahead and
implement that. After that is complete, add a `console.log` in the component so
we can track that the component re-rendered.

To confirm you have done this correctly, head back over to your browser and
click one of the `<span>` and see your `Detail` component change its details.
If you are not seeing the details change, checkout the DevTools and select your
`Components` tab. In your component tree, select `Detail` and look at the
`hooks` section. Open `Horoscope`, then `Context` - confirm you have selected
the right method.

If all is working, we can now revert to the `Console` tab in the DevTools.
Earlier we asked if the `SideCard` component will re-render if it's not
consuming the context - how many times do we see the console log from the
`SideCard` component if we click on the different signs? If your answer is one,
then that is correct! We will only see the console log once because it
will only run on the initial render. Even though our context is constantly changing
each time we click on a new sign, the components not consuming the context will
not re-render. The only re-renders we will see are from the components consuming
it like the `Navbar` component.

## Integrate a Match Component

We have confirmed that if the component does not consume the context, then it
will not re-render when the context changes. What if we had a component consume
the context and also had its own local state(useState)? It will definitely
re-render when the context changes - but does that also reset the local state?
We are going to create another component to solve this question.

If you look at your horoscope data (`src/data/horoscopes.js`), we also have a
`match` property that hasn't been utilized. Let's amp up what we know and create
a new component called `Match`. In this component, we will create a button that
will reveal the horoscope's match with each click.

To start, create a file called `Match.js` in your `components` directory. In
this file, create a component called `Match` and export it. At the top of the
file, import `useState` and `useContext` from React, `HoroscopeContext` from
your context directory, and `horoscopeObj` from the data directory.

Before we continue, let's import the `Match` component into your `Detail`
component. You can add the component after the `h4` element that displays the
sign's traits. Once you have added it, confirm in the DevTools `Components`
tab that `Match` is a part of your component tree.

Now that we have the basic setup, let's now create a state with useState and
call it `match` and `setMatch` with the default value `false`. This will be
used to trigger the display of the sign's match. The trigger functionality comes
from clicking a button, so in your return statement, create a `button` element
and add an `onClick` that turns your `match` state true or false.

We will now need the sign's details again, so go ahead and consume the
`HoroscopeContext` with `useContext` and grab the `currentSign`. With the
`horoscopeObj`, use the `currentSign` from our context and key into the current
sign's object - assign the value to a variable called `sign`. Confirm you have
successfully grabbed the single sign's object with `console.log` and trigger the
console log by clicking on a different sign in your `Navbar`.

Once your sign object is available, after the `button` element, conditionally
render the sign's match - if `match` is true, reveal the sign's match inside a
`div` element, else display nothing.

Test your results in the browser - does your current sign's match display and
hide everytime you click the button? If so, well done!

Let's now go back to our question at the start of this phase - does our `Match`
component's local state (`match`) reset back to false each time our context
changes? Short answer, no! The reason it doesn't reset back to false is because
the change in context only causes a re-render, which doesn't affect local state.
If it reset back to false, that means the `Match` component was unmounted from
the tree and added back into the tree.

# Congratulations!

We have dynamically set the value of our context within a component using the
`setCurrentSign` method provided in our context. With this method, it allowed us
to see the following:

1. Our context value change with each onClick of the sign's span in the `Navbar`
   component.
2. Confirm that components not consuming the context will not re-render, like
   the `SideCard` component
3. Any component consuming the context will re-render like `Navbar`, `Detail`,
   and `Match`.
4. The re-render caused by the change in context does not reset local state,
   which was shown in the `Match` component.

[context-starter]: ./starter
[react-devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
