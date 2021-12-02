# Action Creator and Reducer Setup

In this short practice, you will load an `array` of articles into `Redux`
`state` using `Redux`. You will create an [`action creator`][action-creator] and
a [`reducer`][reducer]. The `action creator` will notify the `reducer` based on
the `action type`, the reducer will update the `global state`. You will connect
the reducer to the store and you test your `action creator` using the `window`
object in the Browser dev tools.

## Action Creator

You will start by working in the `store/articleReducer.js` file.

Since there is no database, import the data that is stored in
`scr/data/data.json` assigning it to the variable name `articles`. This data
will be used as the `payload` for the `action creator` you are about to create.
Define an `action creator` called `loadArticles`. It should have a `type` key
with a `constant variable` value, `LOAD_ARTICLES`. Make sure your
`LOAD_ARTICLES` `constant` variable definition is assigned a string
`article/loadArticles`. The `loadArticles` `action creator` should also have a
payload of the articles that were imported.

If you have done this correctly your code will look similar to this:

```js
import articles from `../data/data.json`

const LOAD_ARTICLES = 'article/loadArticles';

const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};

```

## Reducer

Write an `initialState` variable that is assigned to an object. The object
should hold an array with the `key` of entries and the `value` of an empty
`array`. The object should also hold another `key`, `isLoading` with a `boolean`
`value` of `true`.

Create an `articleReducer` function. Every `reducer` function takes two
arguments, `state` and `action`. Inside the `reducer` function, create a
`switch/case` statement that checks for an `action type`. The first `action`
`type` `case`it should check for is `LOAD_ARTICLES`. If the `action type` is
`loadArticles`, it should return a new copy of the `state` object and update the
`entries` array with the `articles` payload from the `loadArticles` action
creator. Be sure not to `mutate` state.

If you are successful with this your added could should be similar to this:

```js

  const initialState = { entries: [], isLoading: true };

  const articleReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_ARTICLES:
        return { ...state, entries: [...action.articles] };
    }
  };

```

To test if your reducer is working, go to your root `index.js` and

1. import the `loadActions` `action creator` from the `articleReducer`
2. Add this code beneath your `store` variable

```js
  window.store = store;
  window.loadActions = loadActions;
  
```

Then go to the browser. Open up the devtools `Console` tab and use this code:

```js

  store.dispatch(loadArticles());

```

If all is working correctly, you should see the `redux-logger` data in the
console. It will show the `prev state` with an `article.entries` array of `0`,
the `action`, and the next state with five articles in the `articles` array.

![redux-logger][redux-logger]

Congratulations! You have created an `action creator`, a `reducer` and tested
both on the `window` of the browser using `redux-logger`.

[action-creator]: https://redux.js.org/usage/reducing-boilerplate
[reducer]:
https://redux.js.org/usage/structuring-reducers/basic-reducer-structure
[redux-logger]: ./aws-assets/redux-logger.png
