# useDispatch and useSelector

In this short practice, your are going to list the titles of articles by loading
the `Redux store` with data, and `subscribing` to or listening for changes to
that data in a component.

## Setup

codesanbox or repo

## useDispatch

In order to load the data into the `store`, go to the `ArticleList` component.
Import the [`useDispatch`][react-redux-hooks] hook from
[`react-redux`][react-redux] and the exported `loadArticles` action creator.
Invoke the `useDispatch` hook inside the component to make the functionality
available. Create a `useEffect` function that `dispatches` the `loadArticles`
function. It will only run one time. This will load the article data into the
`store` after the first render.

After completion of the `useEffect`, navigate to the Redux devtools in the
browser. On the inspector side of the tools, click on the
`/articles/loadArticles` action. On the right side, click the `State` tab. When
opening the results you should see that the `entries` array has now been filled
with articles.

If you are successful, your code should look similar to this:

```js

    import {useEffect} from 'react';
    import {useDispatch} from 'react-redux'
    import { Route, Switch } from 'react-router-dom';

    import SingleArticle from '../SingleArticle';
    import {loadArticles} from '../../store/articleReducer'

    const ArticleList = () => {

        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(loadArticles())
        }, [])

        return (...)
    }

```

## Warning in terminal

Notice in the terminal that you are now seing a Warning, `React Hook useEffect`
`has a missing dependency: 'dispatch'. Either include it or remove the`
`dependency array`. This is a [warning]:[react-redux-hooks] from ESLint.
`useEffect` thinks that the `dispatch` function or any function not declared
inside the function could potentially change. While, this will never happen for
the `dispatch`, it is still safe to place `dispatch` in the dependency array.
The `useEffect` will still only run one time.

## useSelector

Now the `ArticleList` needs to subscribe to the `store` and listen changes in
the `articles` slice of state. The [`useSelector`][react-redux-hooks] hook
handles this functionality.

Import `useSelector` from `react-redux`. Below the `useDispatch`, create a
variable called `articles` and assign it the value of an invoked `useSelector`.
The `useSelector` takes a callback function as an argument. The argument in the
callback function is the entire Redux `state`. Place state as
the argument of the callback function, then return `console.log('state',
state)`. Now take a look in the browser devtools' Console. The log should
show the entire state of the `store`. However, you only need the `entries` key
from the `articleReducer`. Notice in the console that, in order to key into the
article state, you must first key into the reducer function. This function was
named `articleState` in the `store/index.js` file in the `combineReducers`
function. In the `useSelector` console, key into the state by adding
`articleState`. Now when you check the devtools Console, you should only see
the `articleReducer` state. Key into the `entries`
array in the `useSelector`. In the Browser, only the `entries` array should now
show. Finally, inside the `useSelector`, remove the `console.log('state')` part
and just return the portion that returns the `entries` array.

If you have been successful, the code should look similar to this:

```js

 const articles = useSelector(state=>state.articleState.entries)

```

## Fill in the Information from the `useSelector`

Now that the information has been received by the `articles` variable, it is
possible to use the data from the `store` inside the `JSX`. Each link from the
data will become a clickable link. Before, beginning to code, Take a look at the
Route at the bottom of the file. The route will mount the `SingleArticle`
component and pass the id of that article in the `url` using the optional
parameter `:id`.

In your `JSX`, delete all of the `li` elements. Map through the `articles` array
and create an `li` element that returns a `NavLink` for each title. Don't forget
to add a `key` using the `id` from each article. When you click on each link,
you should see a hard coded article based on the `SingleArticle` component.
Reference the `path` in the `Route`s below to create the links. However, what is
important is the url. With each click, the `id` in the url address should
change.

*Dont forget to import NavLink from react-router-dom!*

If you are successful, your code should look similar to this:

```js

 {articles.map(({id, title}) => (
     <li key={id}><NavLink to={`/article/${id}`}>{title}</NavLink></li>
 ))}

```

Congratulations! You have now learned to:

- use the `useDispatch` hook to dispatch an `action creator` and update the
  `store`.
- use the `useSelector` hook to `subscribe` to the `store` and listen for
  changes in `state`.

[react-redux]: https://react-redux.js.org/introduction/getting-started
[react-redux-hooks]: https://react-redux.js.org/api/hooks
