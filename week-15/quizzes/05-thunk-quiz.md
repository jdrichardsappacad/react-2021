# Thunk Quiz

This quiz is meant to check your understanding of thunks.

## The questions

<quiz>
  <question>
    <p>What is a thunk?</p>
    <answer correct>A thunk is a function that gets returned by another function, the thunk
    action creator.</answer>
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
    <answer correct>With `redux`'s built-in `applyMiddleware` function</answer>
    <answer>With `redux`'s built-in `addMiddleware` function</answer>
    <answer>With `react`'s built-in `useMiddleware` hook</answer>
    <answer>With `react-redux`'s built-in `addMiddleware` function</answer>
    <explanation>The `redux` package comes with an `applyMiddleware` function
    that helps you add middleware to your Redux store.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p></p>
    <answer correct></answer>
    <answer></answer>
    <answer></answer>
    <answer></answer>
    <explanation></explanation>
  </question>
</quiz>
