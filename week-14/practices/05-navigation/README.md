# Practice: Navigation

In this practice you will learn how to create navigation for your Route paths
using `Link` and `NavLink`.

## Setup

Download the [starter][starter]. `cd` into the folder and run the `npm install`
command in your terminal.

Next run `npm start` and check your browser to see if your code is running
properly.

Test again. You should only see an `h1` saying App Component as well as the Home
Component.

Now take a look at the code. In your `App.js` you will see the already created
routes for each component. You now want to create clickable Links for each of
those routes.

## Navigation

In your App.js file, import the Link component from `react-router-dom`. You will
use this component instead of the `<a>` element to which you are accustomed.

Beneath the `h1` create a `nav` element with 2 classes: `comp` and `nav`. Inside
the `nav` element add an unordered list element then a list-item element inside
the unordered list element. Now use your Link component to create a clickable
link to the Home path. The child text inside the Link component should say Home.

In your Browser you should now see a Navbar with the Home link.

### Compare Link and Anchor

In order to really know why you are using the `Link` Component, you should add
an anchor tag to your code and view the difference.

Above your Home `<li>` add an `<li>` with an anchor tag nested inside. The
`href` should lead to the movies component (`/movies`) and have a child text of
Anchor.

Go to your browser and open up your DevTools to the Elements tab. Open your tree
as far as you can. Now, click on the anchor tag and notice how the whole page
refreshes. Reopen the tree in the Elements tab. This time, click on the Home
link and notice that only the component that has been mounted changes and there
is no refresh of the page.

### NavLink

As you remember, NavLink is the Link component with extra functionality. We want
to add the other links to our `App.js`. However, we also want to see a
difference between our active link and the other links.

Replace the `Link` import with the `NavLink` import.

Also, for your `Home Link`, replace `Link` with `NavLink`. You will need to make
your url exact in this component as you did in the route.

Now add list-items and NavLinks for the other two routes you created.

Take a look in the Browser. Notice that the active link is now red? In your
`index.css` you have an `.active` defined. NavLink automatically sees this and
applies it to the active link. Click each item and notice how it changes.

### ActiveClassName and ActiveStyle

Now you are going to change the class that is called on the active link using
the `activeClassName` attribute. Take a look in the `index.css` and notice that
there is a purple class. Now, in your App.js, add `activeClassName='purple'` to
each NavLink. In the browser, your active link should now, also, have a border
around it.

Next, inside your NavLinks you are going to use the `activeStyle` attribute. It
will work in the way that inline styling works for css. Add `activeStyle={{
fontWeight: 'bold' }}` to each NavLink. When you go to the browser, you should
notice that each active link now has both a border and a bold font.

### Redirect

Sometimes you only want to allow access to a component when a user is logged in.
Otherwise, you want to navigate the user in another direction. Using the
Redirect component can help you do this.

In your App.js just above the 'Page Not Found' route. Add a route that looks
like this:

```js
<Route path='/not-logged-in'>
  <h1> You Must Be Logged In to Enter.</h1>
</Route>
```

Next, in your /Stocks/index.js file, create a variable called loggedIn and
assign it to false.

Add an `if` statement that redirects to the `/not-logged-in` url when the
`loggedIn` variable is false using the `Redirect` component.

Test it in your Browser by clicking on the Stocks link. It should redirect you
to the Not Logged in route.

Now, in /Stocks/index.js, set the `loggedIn` variable to true and click on the
Stocks Link. You should be able to view the Stocks component.

### History API & useHistory Hook for Navigation

You will use the `useHistory` hook to navigate after some transaction has taken
place. In your Stocks component, you goal is to navigate back to the Home Page
after you click a button.

First, under the `h1` tag in your JSX, create a button with an `onClick` event
listener that looks like this:

```js
<button onClick={handleClick}>Home</button>`
```

Event listeners differ in React in that the event listener is camel cased and
will always be assigned to a function.

Here you have set the `onClick` to take the function handleClick but you have
not written it yet.

Above your return, create a function called `handleClick`. It should alert the
user with a message and then navigate home.

```js
const handleClick = () => {
  window.alert('Sending info to the DB!');
};
```

Test in the browser.

Now, you want to redirect after you click the ok button in the alert box.

Import the `useHistory` hook from `react-router-dom`

In your component, invoke the useHistory hook and assign it to a new variable
called `history`

After the `window.alert` in the handleClick function, use the `push` method on
the history object to navigate the user to the Home component.

Test in the browser.

Congratulations! You have completed the Navigation portion of the practice. Here
is a list of the techniques you used:

1. Navigating to another address with the Link component
2. Using the NavLink component's added capability to set the `active` class in
   CSS
3. Personalizing the active links with specialized NavLink attributes.
4. Navigating the user to another location using Redirect
5. Using the History API and the useHistory hook to navigate the user to another
   location after they have handled some other functionality.

[starter]: ./starter
