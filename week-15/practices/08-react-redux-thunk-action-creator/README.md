# Thunk Action Creators

In this practice, you will write thunk action creators to use with Redux later
on.

## Set up

Download the starter at the bottom of this page.

1. Run `npm install` in the **backend** directory to install dependencies.
2. Run `npm run db:setup` to setup the database
3. Run `npm start` to start the backend server.

In a different terminal, `cd` into the **frontend** directory of the starter.

1. Run `npm install` in the **frontend** directory.
2. Run `npm start` in the **frontend** directory to start the server.

## Thunk Action Creators

Action creators are functions that create and return an action, which is just
a regular JavaScript object. Thunk action creators are functions that return
a thunk action, a function instead of an object. The thunk action, or simply 
thunk, can accept the `dispatch` and `getState` methods available on the store 
and can `dispatch` another action after potentially doing some asynchronous 
logic.

Because a thunk action creator is just a function that returns a thunk (also a 
function) that takes in `dispatch` and `getState` as parameters, most of the 
time, you'll see it structured like this:

```javascript
const thunkActionCreator = () => dispatch => {
  // Thunk logic here
};
```

This translates to function declaration syntax like so:

```javascript
function thunkActionCreator() {
  return function thunk(dispatch) {
    // Thunk logic here
  };
}
```

In the **frontend/src/store/articleReducer.js** file, write a `fetchArticles`
thunk action creator that uses the [`Fetch` API][fetch] to request articles at
the relative path `/api/articles`, and `dispatch` the returned action from the
`getArticles` action creator. You will want to rewrite the definition of the
`getArticles` function so that it can accept an `articles` argument, which you
will get by calling the asynchronous `.json()` method on the response you got
back from the `fetch` call. Go ahead and `export` the function.

Your thunk action creator might look like this:

```javascript
export const fetchArticles = () => async dispatch => {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  dispatch(getArticles(articles));
};
```

Remember to update the definition of the `getArticles` function.

Now it's your turn! Write a `writeArticle` thunk action creator in the
**frontend/src/store/articleReducer.js** file that takes in a `payload`, makes
a `POST` request to `/api/articles`, and calls `dispatch` on the return value of
`addArticle` passing in the new article from the response.

**Hint: Remember to use `.json()` to parse your data before dispatching. 

## What you've learned

You just learned how to write thunk action creators. In the next practice, you
will learn how to `dispatch` these thunk action creators.

[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
