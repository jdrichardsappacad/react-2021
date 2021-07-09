# Practice: Context Consumer Sets Dynamic Value Practice

With the previous practice, we consumed our context and created a state. If you
noticed, all we really did was display the sign's details based on our
`currentSign`'s default value. There must be a better way to do this!

In this practice, you will:

* Create another component that will dynamically set the value of the context
(but not read the value). The other component should have the value update
automatically.

* Show that other components that don't "consume the context" don't re-render.


## Phase 1: Use Context in Navbar Component

In your `Navbar` component (`src/components/Navbar.js`), import `useContext` and
`HoroscopeContext`. Inside your `Navbar` component, destructure your
`setCurrentSign`, which comes from invoking `useContext` and passing in your
`HoroscopeContext` as an argument.

With the `setCurrentSign` function, every time there is an `onClick` for the
`<span>` element, we will `setCurrentSign` to the `sign`, so go ahead and
implement that.

To confirm you have done this correctly, head back over to your browser and
click one of the `<span>` and see your `Detail` component also change.

**Congratulations!**

You have successfully used your context provider to dynamically change your
value.

## Phase 2: Integrate Match Component






[context-starter]: ./starter
[react-devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
