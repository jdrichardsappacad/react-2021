# Practice: Nesting

In this practice you will -

- Dynamically create nested routes
- Use React Router params to access path variables

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

### Preparation

In your browser you should see an `h1` with text, App Component. You should also
see a Navbar with four links. When you click on the links they should render the
component below them.

The goal is to list out the titles of the movies and be able to reach each
individual movie using dynamic nested routing.

## Movies Component

In your `App.js`, import the `movies` array that is located in the
`/data/movieData.js` directory. There is a Route in your `App.js` that mounts
the `Movies` component. Add the `movies` data as props with the name `movies` to
the `Movies` component. Then in your `Movies` component destructure the prop
variable in the argument.

Go to your React DevTools and click on the `Movies` component. (ignore all of
the `.Provider` and `.Consumer` stuff for today.) In your `Movies` component,
under `props`, you should now see the array of movies that you passed as props.

Back to `/Movies/index.js`, under the `h1` element, create a route that renders
the `MovieDetails` component. The route should have a path of
`/movies/:movieId`. The `/:movieId` represents a variable for the `parameter`
that you will be sending in the url. In this case it will be the id of the movie
that the user clicks on.

Next, create a `nav` element underneath the `h1` tag. Inside the `nav`, map
through the `movies` prop. Return a `NavLink` for each movie. The url for the
`NavLink` should start with `/movies` followed by a `/` and the actual `id` of
the single movie. Use the `id` that you receive from each mapped movie object as
the `movieId`. The clickable text that the user sees for the `NavLink` should
dynamically be the title of the movie.

\*\* Hint, hint - Did you remember your imports?

Each time you click a link you should now see the MovieDetails Component with
the `h1` text `MovieDetails Component` in the Browser beneath the NavBar. You
should also see the movie id change in the url address bar.

## Rendering Your Movie Details

It's now time to add the movie details for each component.

In your `Movies/index.js` file, pass your movies prop to the `MovieDetails`
component inside your Route as `movies`. Check your React DevTools as you did in
Phase 1.

Now you will use the [useParams][use-params] hook. This hook will allow you to
capture the movie id from the url.

Inside the `MovieDetails` function create a destructured `movieId` variable and
assign it to an invoked useParams hook.

```js

const { movieId } = useParams();

```

Now `console.log` the `movieId` variable and take a look in the codesandbox browser console
to see if that number changes when you click on a different movie.

You currently have the id of the movie you want and you have the list of movies
as props.

Create a variable called `movieChoice` and use the `.find` method to compare the
two id's. This will select the one movie object you are looking for. (_Hint_:
Make sure you use `===` and check that both id's are the same datatype.)

Next, in your JSX, replace the text in your `h1` element with the `title` of
the movie, and a `p` element with the description of the movie. Check your
data for the proper key/value choices.

## Congratulations!

You have completed the Dynamic Routing portion of the practice. Here is a list
of the techniques you used:

1. Created nested routes inside the `Movies` component
2. Dynamically created routes using `path` and `url` from `useRouteMatch` hook.
3. Used `useParams` hook in your `MovieDetails` component to grab the `movieId`,
   so you could render the according movie details found in your `movies` array.

[starter]: https://github.com/orgs/appacademy-starters/repositories?type=all
[use-params]: https://reactrouter.com/web/api/Hooks/useparams 

