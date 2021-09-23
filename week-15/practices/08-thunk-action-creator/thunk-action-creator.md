# Thunk Action Creators

In this practice, you will write thunk action creators to use with Redux later
on.

## Phase 0: Set up

Download the starter at the bottom of this page.

1. Create a __.env__ file in the __backend__ directory based off the existing
   __.env.example__ file given.
2. Create a database user using the `psql` interface that matches the username
   and password you gave in the __.env__ file with `CREATEDB` privileges.
3. Run `npm install` in the __backend__ directory to install dependencies.
4. Run `npx dotenv sequelize db:create` to create the database.
5. Run `npx dotenv sequelize db:migrate` to apply the migrations.
6. Run `npx dotenv sequelize db:seed:all` to apply the seeders.
7. Run `npm start` to start the backend server..

In a different terminal, `cd` into the __frontend__ directory of the starter.

1. Run `npm install` in the __frontend__ directory.
2. Run `npm start` in the __frontend__ directory to start the server.

## Phase 1: Thunk Action Creators

Action creators are functions that return, or create, an action, which is just
a regular JavaScript object. Thunk action creators are functions that return
a thunk action, an action that is a function instead of an object. The thunk
action, or simply thunk, can accept the `dispatch` and `getState` methods
availabe on the store and can `dispatch` another action after potentially doing
some asynchronous logic.

Because a thunk action creator is just a function that returns a thunk, which is
just a function that can take in `dispatch` and `getState`, in that order, most
of the time, you'll see it like this:

```javascript
const thunkActionCreator = () => (dispatch) => {
    // Thunk logic here
};
```

This translates to function declaration syntax like so:

```javascript
function thunkActionCreator() {
    return function thunk(dispatch) {
        // Thunk logic here
    }
}
```

In the __frontend/src/store/articleReducer.js__ file, write a `fetchArticles`
thunk action creator that uses the [`Fetch` API][fetch] to request articles at
the relative path `/api/articles`, and `dispatch` the returned action from the
`getArticles` action creator. You will want to rewrite the definition of the
`getArticles` function so that it can accept an `articles` argument, which you
will get by calling the asynchronous `.json()` method on the response you got
back from the `fetch` call. Go ahead and `export` the function.

Your thunk action creator might look like this:

```javascript
export const fetchArticles = () => async (dispatch) => {
    const response = await fetch('/api/articles');
    const articles = await response.json();
    dispatch(getArticles(articles));
};
```

Remember to update the definition of the `getArticles` function.

Now it's your turn! Write a `writeArticle` thunk action creator in the
__frontend/src/store/articleReducer.js__ file that takes in a `payload`, makes
a `POST` request to `/api/articles`, and calls `dispatch` on the return value of
`addArticle` passing in the new article from the response.

## What you've learned

You just learned how to write thunk action creators. In the next practice, you
will learn how to `dispatch` these thunk action creators.

[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
