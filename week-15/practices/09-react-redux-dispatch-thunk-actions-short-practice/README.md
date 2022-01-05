# Practice: Dispatch Thunk Actions

In this practice, you will dispatch the thunks returned from the thunk action
creators you wrote in the previous practice.

## Set Up

Download the starter at the bottom of this page.

If your database is already set up from the previous practice, you'll only need
to  run `npm install` and then run `npm start`. Otherwise, follow these
instructions to get set up:

1. Run `npm install` in the **backend** directory to install dependencies.
2. Run `npm run db:setup` to setup the database
3. Run `npm start` to start the backend server.

In a different terminal, `cd` into the **frontend** directory of the starter.

1. Run `npm install` in the **frontend** directory.
2. Run `npm start` in the **frontend** directory to start the server.

## Phase 1: Dispatching Thunk Actions

In the previous practice, you wrote thunk action creators, functions that
returned a thunk action, and in this practice you will `dispatch` those thunk
actions.

In the **frontend/src/components/ArticleList/index.js** file, you will update
the component from `dispatch`-ing the action returned by the regular action
creator to `dispatch`-ing the thunk action returned from the thunk action
creator. Change the `import` statement near the top of the file to import the
thunk action creator. Update the `dispatch` call inside the `useEffect` hook to
`dispatch` the returned thunk action from the `fetchArticles` thunk action
creator.

To `dispatch` your thunk actions, you will use the same `dispatch` made
available in your application through the `useDispatch` hook the same way you
`dispatch`-ed the actions returned from your action creators.

Now it's your turn! Update the `ArticleInput` component found in the
**frontend/src/component/ArticleInput/index.js** file to use the `writeArticle`
thunk action creator when the user submits the form to create a new article.

## What you have learned

**Congratulations!** In this practice you have learned:

- how to `dispatch` thunk actions from within your React components.


[code-sandbox]:http://www.codesandbox.io