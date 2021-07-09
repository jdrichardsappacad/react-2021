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
the `nav` element add an unordered list element then a list item element inside
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
