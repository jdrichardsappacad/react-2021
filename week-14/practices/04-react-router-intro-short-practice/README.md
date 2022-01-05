# Practice: React Router

You are going to practice using React Router v5. React Router v6 has been
released, however, it is not yet in wide use. So it will be important to know
[v5][router-v5] as well as later upgrade to v6 in your studies.

The ultimate goal of the React Router practices will be to have a `nav` bar
where we can choose `Home`, `Stocks` and `Movies` Components. You will be able
to see the actual components and nested components based on the borders created
in `index.css`. Ultimately, you will be able to navigate from one component to
another by clicking on the Links in the `navbar`. When you click on the Movies
component you will see clickable movie titles. When you click on the titles you
will then see the `MovieDetails` component showing the movie title, image and
description.

For this first practice, you will learn how to setup a Router and create routes
that will allow you to later navigate to different components.

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

## Preparation

You should see a list of components for:

1. Home
2. Stocks
3. Movies

Note, in your `package.json` that we are using the `react-router-dom` version 5
package. This package that will give us access to all of the components in React
Router.

Take a look at the code that has already been created in the application. You
will notice there is a `movieData.js` file with a named export variable assigned
to an array of objects. This is the data we will use since we have no database.

Also notice the hierarchy of your components. Each component is represented
by a folder that holds an `index.js` inside.
By using this architecture, you will be able to import this component by
using the relative path to the folder. Create React App automatically
looks for an `index.js` when only a directory is specified as the import.

## Router Setup

You need to set up our Router to give us access to all of React Router's
features. For this practice you will use
[`BrowserRouter`][router-v5-browserouter] as your Router.

In your `index.js`, import `BrowserRouter` from `react-router-dom`. Now wrap
your entire application in this BrowserRouter component.

Instead of executing this inside the ReactDOM method, create a separate `Root`
functional component that will return your BrowserRouter and nested App
component.

```js
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
```

Now replace the `<App />` inside your ReactDOM call with the Root component.

You have now given router access to your entire application!

## Route Matching

You now have the ability to create Routes using the [`Route`][router-v5-route]
component, that will mount our components when the correct `path` is chosen.
e.g.

```js 
 
  <Route path = 'your chosen path'>
    <ComponentRendered />
  </Route>

```
Inside your `App.js`, import `Route` from the `react-router-dom` package.

Remove all of the components that are listed in the JSX. We will
render these components using routes.

Next, inside the JSX below the `h1` element, create a `route`
for the Home component by using the `Route` component and nesting the `Home`
component inside of it.

The `Route` component takes an attribute called `path`. Using opening and
closing `Route` tags, define your first `Route` component with a `/` for the
path. Nest your Home Component inside the opening and closing `Route` tags.

Now check your browser. You should only see the `Home` component being
rendered at this point.

Next, do the same for the `Stocks` and `Movies` components with the `path`s of
`/stocks` and `/movies` respectively.

Take a look in your browser. In your address bar, after the `localhost:3000`,
add a `/stocks` to the address bar and notice what you see. Now, replace
`/stocks` with `/movies`. Notice that the `Home` component is always mounted?
This is not the desired functionality.

Instead use the `exact` attribute inside the `Route` for the `Home` Component.
This will signify that the `Home` component should only be rendered when the
exact path matches.

Now, test again in the browser. Notice the difference?

## Adding A Switch Component

Below the other Route components, add another `Route` Component with no path.
Inside the opening and closing tags, add an `<h1>` tag that says,
`Page Not Found`

Now test it in the browser by changing the portion of the address in your url
after `localhost:3000` to `/movies` or `/stocks`.

Notice that 'Page Not Found' is always there no matter which Component is
being mounted? We cannot use exact in this instance because it has no `path`.

Instead, import the `Switch` component from `react-router-dom`.
Now wrap all of your `Route` components with a single `Switch` component.

Test again in the browser. Notice that 'Page Not Found' does not show.

Now to test the `Page Not Found` Route. Try `http://localhost:3000/potato`
Notice that the Page Not Found text is now rendered.

In this practice you have learned the following:

1. Using `BrowserRouter` to enable React Router in the entire application
2. Using the `Route` component to setup paths for components to be mounted.
3. Nesting components inside the `Route` component to be rendered based
   on the chosen path.
4. Adding the `exact` attribute to certain paths to enforce strict
   matching.
5. Wrapping the `Route` components in a `Switch` component so that React will
   stop at the first matching choice it finds.

[router-v5]:https://v5.reactrouter.com/web/guides/quick-start
[router-v5-browserouter]:https://v5.reactrouter.com/web/api/BrowserRouter
[router-v5-route]:https://v5.reactrouter.com/web/api/Route
[code-sandbox]:http://www.codesandbox.io