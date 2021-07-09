# Thunk Quiz

This quiz is meant to check your understanding of thunks.

## The questions

<quiz>
  <question>
    <p>What is a thunk?</p>
    <answer correct>A thunk is a function that gets returned by another
    function, also known as the thunk action creator.</answer>
    <answer>A thunk is a special kind of object that gets dispatched whenever
    you want to handle asynchronous events.</answer>
    <answer>A thunk is the function that returns a function.</answer>
    <answer>A thunk is a function that you have to use in Redux to make changes
    to your state.</answer>
    <explanation>A thunk is just a function that gets returned by a thunk action
    creator function.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What package can you use to make sure your Redux store can work with
    thunks?</p>
    <answer correct>`redux-thunk`</answer>
    <answer>`thunk`</answer>
    <answer>`thunky`</answer>
    <answer>`thunk-for-redux`</answer>
    <explanation>We will be using the `redux-thunk` package available on npm to
    make our store work with thunks.</explanation>
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
    that helps you add middleware to your Redux store.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What does the thunk middleware pass to a thunk when it calls a thunk?</p>
    <answer correct>The thunk middleware will pass the `dispatch` and `getState`
    store methods to the thunk.</answer>
    <answer>The thunk middleware will pass the `store` object to the
    thunk.</answer>
    <answer>The thunk middleware will pass the `subscribe` method to the thunk
    to let it control re-renders.</answer>
    <answer>The thunk middleware will pass the `createThunk` method to the
    thunk.</answer>
    <explanation>The thunk middleware will pass the `dispatch` and `getState`
    store methods to the thunk.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>How can you `dispatch` a thunk?</p>
    <answer correct>By using the `dispatch` from the `useDispatch` hook from the
    React-Redux package</answer>
    <answer>By bringing in the Redux store and using the `dispatch` method
    that's available on there</answer>
    <answer>By calling `useDispatch` and passing in our thunk</answer>
    <answer>By calling the `dispatch` method that was made available on your
    thunk with the `redux-thunk` middleware</answer>
    <explanation>You would `dispatch` a thunk the same way you would `dispatch`
    a regular action by calling the `dispatch` that was returned from the
    `useDispatch` hook and passing in the thunk as an argument</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is the purpose of using thunks?</p>
    <answer correct>Thunks allow one to have asynchronous events in Redux's data
    flow while keeping action creators as the only source of every change to our
    application state.</answer>
    <answer>Thunks allow the store to have asynchronous function calls in the
    reducer.</answer>
    <answer>Thunks allow actions to contain functions.</answer>
    <answer>Thunks allow an application to make calls to `async` functions</answer>
    <explanation>Thunks are a kind of action creator that will allow you to make
    asynchronous function calls that might `dispatch` an action depending on
    what data was returned from the asynchronous function call.</explanation>
  </question>
</quiz>
