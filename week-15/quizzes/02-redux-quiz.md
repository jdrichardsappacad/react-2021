# Redux Quiz

This quiz is designed to test your Redux knowledge.

## The questions

<quiz>
  <question>
    <p>What is Redux?</p>
    <answer correct>A JavaScript framework for managing global application state.</answer>
    <answer>A Flux extension.</answer>
    <answer>A React state package.</answer>
    <answer>React's method for small application state management.</answer>
  <explanation>Redux is a JavaScript framework, used to manage global state for
  applications that will scale.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>What are the three principles of Redux?</p>
    <answer correct>Redux is the single source of truth</answer>
    <answer correct>State is read-only</answer>
    <answer correct>Changes to the store are only made with pure functions</answer>
    <answer>Redux uses a two-way data flow</answer>
    <explanation>The three principles of Redux are: 1. Single Source of
    Truth, 2. State is read-only, and 3. Changes to the store are only made with
    pure functions.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is the difference between `application state` and an application's store?</p>
    <answer correct>Application state is all of the information in an application at a specific point in time. The application's store is
    a single JavaScript object that houses your state.</answer>
  <answer>State is anything created by `useState`. The application's store is
  anything created with the `useStore` hook.</answer>
    <answer>React creates state for you, the store must be created.</answer>
  <answer>Application state is local to a component. An application's store is
  global.</answer>
    <explanation>By definition, the state is all of the information in an
    application at a specific point in time. The store is the single JavaScript object that houses your state.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>An action is....</p>
  <answer correct>an object with a required `type`
  property and an optional `payload` property.</answer>
    <answer>the dispatching of some object.</answer>
    <answer>the function you call to cause a change to your Redux state.</answer>
    <answer>a string that you assign to an object's `type` key</answer>
  <explanation>An action is a Plain Old JavaScript Object with a required `type`
  property and an optional payload.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>A reducer is a function that...</p>
    <answer correct>is called each time an action is dispatched.</answer>
    <answer>mutates the Redux state.</answer>
    <answer>will `dispatch` your `actions`.</answer>
    <answer>that re-renders your components whenever the state is changed.</answer>
    <explanation>A reducer is a pure function that is called each time an action
    is dispatched.</explanation>
  </question>
</quiz>
