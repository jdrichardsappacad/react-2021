# Practice: React Router

Now it's time to practice using React Router.

The ultimate goal of the React Router practices will be to have a `nav` bar
where we can choose `Home`, `Stocks` and `Movies` Components. You will be
able to see the actual components and nested components based on the borders
created in `index.css`. Ultimately, you will be able to navigate from one
component to another by clicking on the Links in the `navbar`. When you click
on the Movies component you will be able to see clickable movie titles.
When you click on the titles you will then be able to see the
`MovieDetails` component showing the movie title, image and description.

For this first practice, you will learn how to setup a Router and create routes
that will allow us to later navigate to different components.

## Setup

Download the [starter][starter]. `cd` into the folder and run the `npm install`
command in your terminal.

Next run `npm start` and check your browser to see if your code is running
properly.

You should see a list of components for:

1. Home
2. Stocks
3. Movies

Note, in your `package.json` that we are using the `react-router-dom` package.
This package that will give us access to all of the components in React Router.

Take a look at the code that has already been created in the application. You
will notice there is a `movieData.js` file with a named export variable assigned
to an array of objects. This is the data we will use since we have no database.

Also notice the hierarchy of your components. Each component is represented
by a folder that holds an `index.js` inside.
By using this architecture, you will be able to import this component by
using the relative path to the folder. Create React App automatically
looks for an `index.js` when only a directory is specified as the import.

## Router Setup

We now need to set up our Router to give us access to all of React Router's
features. For this practice we will be using `BrowserRouter` as our Router.

In your `index.js`, import `BrowserRouter` from `react-router-dom`.
Now we want to wrap our entire application in this BrowserRouter component.

Instead of executing this inside the ReactDOM method, let's create a
separate `Root` functional component that will return our BrowserRouter and
nested App component.

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

We now have the ability to create Routes that will mount our components when
the correct path is chosen.

Inside your `App.js`, import Route from the `react-router-dom` package.

Remove all of the components that are listed in the JSX. We will
render these components using routes.

Next, inside the JSX return `div`, then, at the bottom, create a route
for the Home component by using the Route component and nesting the Home
component inside of it.

The Route component takes an attribute called `path`. Using opening and closing
tags, define your first Route component with a `/` for the path. Nest your Home
Component Inside the opening and closing tags.

Now check your browser. You should only see the Home component being
rendered at this point.

Next, do the same for the Stocks and Movies components.

Take a look in your browser. In your address bar, after the `localhost:3000`,
add a `/stocks` to the address bar and notice what you see. Now, replace
`/stocks` with `/movies`. Notice that the Home component is always mounted?
This is not the functionality we want.

Instead use the `exact` attribute inside the Route for the Home Component.
This will signify that the Home component should only be rendered when
the exact path matches.

Now, test again in the browser. Notice the difference?

## Adding A Switch Component

Below the other Route components, add another Route Component with no path.
Inside the opening and closing tags, add an `<h1>` tag that says,
`Page Not Found`

Now test it in the browser by changing the portion of the address in your url
after `localhost:3000` to `/movies` or `/stocks`.

Notice that 'Page Not Found' is always there no matter which Component is
being mounted? We cannot use exact in this instance because it has no path.

Instead, import the `Switch` component from `react-router-dom`.
Now wrap all of your Route components in the `Switch` component.

Test again in the browser. Notice that 'Page Not Found' does not show.

Now to test that Page Not Found Route, try `http://localhost:3000/potato`
Notice that now the Page Not Found text is now rendered.

In this practice you have learned the following:

1. Using BrowserRouter to enable React Router in the entire application
2. Using the Route component to setup paths for components to be mounted.
3. Nesting components inside the Route component to be rendered based
   on the chosen path.
4. Adding the `exact` attribute to certain paths to enforce strict
   matching.
5. Wrapping the Route components in a Switch component so that React
   will stop at the first matching choice it finds.

[starter]: ./starter
