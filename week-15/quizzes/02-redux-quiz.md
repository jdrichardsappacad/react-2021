# Redux Quiz

This quiz is designed to test you on Redux.

## The questions

<quiz>
  <question>
    <p>What is Redux?</p>
    <answer correct>A JavaScript framework for managing the frontend state of a
    web application</answer>
    <answer>An extension of Flux</answer>
    <answer>An extension of React</answer>
    <answer>React's main method of state management</answer>
    <explanation>Redux is a JavaScript framework Dan Abramov designed to manage
    the state in a web application to make it easier to debug web apps.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>What are the three principles of Redux?</p>
    <answer correct>Redux is the single source of truth</answer>
    <answer correct>State is read-only</answer>
    <answer correct>Changes to the store are only made with pure functions</answer>
    <answer>Redux must use a two-way data flow</answer>
    <explanation>The three principles of Redux are the 1. Single Source of
    Truth, 2. State is read-only, and 3. Changes to the store are only made with
    pure functions</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is the difference between the application state and the
    application's store?</p>
    <answer correct>The state of an application means all the information by
    that application at a particular point in time. The application's store is
    the single JavaScript object that houses your state at a particular point in
    time.</answer>
    <answer>State is anything created by `useState` and the store is anything
    created with `useStore`.</answer>
    <answer>React will create state for your, but you have to create the store
    yourself.</answer>
    <answer>Redux prefers that you use the store over the state.</answer>
    <explanation>By definition, the state is all the information in an
    application at a specific point in time while the store is the single
    JavaScript object that houses your state.</explanation>
  </question>
</quiz>
