# Practice: Nesting

In this practice we will

## Phase 0: Setup

Download the [starter][starter]. `cd` into the folder and run the `npm install`
command in your terminal.

Next run `npm start` and check your browser to see if your code is running
properly.

In your browser you should see an h1 with text, App Component. You should also
see a Navbar with four links. When you click on the links they should render the
component below them.

The goal is to list out the titles of the movies and
be able to reach each individual movie using dynamic nested routing.

## Phase 1: Movies Component

In your `App.js`, import the movies array that is located in the
`/data/movieData.js` directory. There is a Route that mounts the Movies
component. Send the movies data as props with the name `movies`. Then in your
`Movies.js` component add the movies prop as an argument to your component.

In your `Movies.js`, at the bottom of the JSX, create a nested
route that renders the `MovieDetails` component. The route takes a path of
`/movies/:movieId`. The `/:movieId` represents a variable for the parameter that
you will be sending in the URL. In this case it will be the id of the movie that
the user clicks on.

Next, create a nav element underneath the `h1` tag. Inside the `nav`, map
through the movie props creating a `NavLink` for each movie with a url of
`/movies` and the actual id of the movie. The clickable text for the link should
be the title of the movie.

Did you remember your imports?

Each time you click a link you should now see the MovieDetails Component with
the `h1` text `MovieDetails Component` in the Browser beneath the NavBar.

## Phase 2: Dynamic Route

Instead of hard coding the mapped movie title route and path, you should now
make it dynamic. Import `useRouteMatch` from `react-router-dom`.

Destructure the available url and path from the useRouteMatch function.

```js
const { path, url } = useRouteMatch();
```

Now in your NavLink, replace `/movies` with `${url}`. This will dynamically grab
the current url in the address bar. ( That is the portion that comes after your
localhost:3000 )

In your Route, change the `/movies` portion in your path to `${path}`.

When you click the links in the browser you should have the same behavior as
before, however you are now dynamically using your nested route.

Phase 3: Rendering Your Movie Details
