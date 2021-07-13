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
`Movies.js` component add the movies props as an argument to your component.

Now you want to list out the movie titles. Create a nav element underneath the
`h1` tag. Inside the `nav`, map through the movie props creating a `NavLink` for
each movie with a url of `/movies` and the id of the movie. The link should have
the title of the movie as the text.
