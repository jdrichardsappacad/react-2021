# Practice: Navigation

In this practice you will learn how to create navigation for your Route paths
using `Link` and `NavLink`.

## Phase 0: Setup

Download the [starter][starter]. `cd` into the folder and run the `npm install`command in your terminal.

Next run `npm start` and check your browser to see if your code is running
properly.

Check your browser. You should only see an `h1` saying App Components.

Now take a look at the code. In your `App.js` you will see the already created
routes for each component. You now want to create clickable Links for each of
those routes.

## Phase 1: Link Navigation

In your App.js file, import the Link component from `react-router-dom`. You will
use this component instead of the `<a>` element to which you are accustomed.

Beneath the `h1` create a `nav` element with 2 classes: `comp` and `nav`. Inside
the `nav` element add an unordered list element then a list-item element inside
the unordered list element. Now use your Link component to create a clickable
like to the path for Home. The child text inside the Link component should say
Home.

In your Browser you should now see a Navbar with the Home link.

## Phase 2: Compare Link and Anchor

In order to really know why you are using the `Link` Component, you should add
an anchor tag to your code and view the difference.

Above your Home `<li>` add an `<li>` with an anchor tag nested inside. The
`href` should also lead to the Home component and have a child text of Anchor.

Go to your browser and open up your DevTools to the Elements tab. Open your tree
as far as you can. Now, click on the anchor tag and notice how the whole page
refreshes. Reopen the tree in the Elements tab. This time, click on the Home
link and notice that only the component that has been mounted changes and there
is no refresh of the page.

## Phase 3: NavLink

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

## Phase 4: ActiveClassName and ActiveStyle

Now you are going to change the class that is called on the active link using
the `activeClassName` attribute. Take a look in the `index.css` and notice that
there is a purple class. Now, in your App.js, add `activeClassName='purple'` to
each NavLink. In the browser, your active link should now, also, have a border
around it.

Next, inside your NavLinks you are going to use the `activeStyle` attribute. It
will work in the way that inline styling works for css. Add `activeStyle={{ fontWeight: 'bold' }}` to each NavLink. When you go to the browser, you should
notice that each active link now has both a border and a bold font.

## Phase 5: Redirect

Sometimes you only want to allow access to a component when a user is logged in.
Otherwise, you want to navigate the user in another direction. Using the
Redirect component can help you do this.

In your App.js just above the Page Not Found route. Add a router that looks like
this:

```js
<Route path='/not-logged-in'>
  <h1> You Must Be Logged In to Enter.</h1>
</Route>
```

Next, in your Stocks.js file, create a variable called loggedIn and assign it to
false.

Add an `if` statement that redirects to the `/not-logged-in`url if`loggedIn`
is false.

[starter]: ./starter
