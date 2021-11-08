# Thunk Quiz

This quiz is meant to check your understanding of thunks.

## The questions

<quiz>
  <question>
    <p>What is Redux thunk?</p>
    <answer correct>Redux thunk is a middleware that allows you to call action
    creators that return a function.</answer>
    <answer>A thunk is a special kind of object that is dispatched whenever
    you want to handle asynchronous events.</answer>
    <answer>A thunk is a function that returns an array of objects.</answer>
    <answer>A thunk is the only function that updates state.</answer>
    <explanation>Redux thunk is a middleware that allows you to call action
    creators that return a function.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>How can you add middleware to your Redux store?</p>
    <answer correct>With Redux's built-in `applyMiddleware` function</answer>
    <answer>With Redux's built-in `addMiddleware` function</answer>
    <answer>With React's built-in `useMiddleware` hook</answer>
    <answer>With React-Redux's built-in `addMiddleware` function</answer>
    <explanation>The Redux package comes with an `applyMiddleware` function
    that allows the addition of middleware to the Redux store.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What arguments does the thunk middleware pass to a thunk?</p>
    <answer correct>The thunk middleware passes the `dispatch` and `getState`
    methods to the thunk.</answer>
    <answer>The thunk middleware passes the `store` object to the
    thunk.</answer>
    <answer>The thunk middleware passes the `subscribe` method to the thunk
    to let it control re-renders.</answer>
    <answer>The thunk middleware passes the `createThunk` method to the
    thunk.</answer>
    <explanation>The thunk middleware passes the `dispatch` and `getState`
    store methods to the thunk.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is the purpose of using thunks?</p>
    <answer correct>Thunks handle asynchronous events in Redux.</answer>
    <answer>Thunks allow the store to have asynchronous function calls in the
    reducer.</answer>
    <answer>Thunks allow actions to contain functions.</answer>
    <answer>Thunks allow an application to make calls to `async` functions</answer>
    <explanation>Thunks are a kind of action creator that will allow you to make
    asynchronous function calls.</explanation>
  </question>
</quiz>
