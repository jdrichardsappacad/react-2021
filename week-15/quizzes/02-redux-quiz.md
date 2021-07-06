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
    <answer>React will create state for you, but you have to create the store
    yourself.</answer>
    <answer>Redux prefers that you use the store over the state.</answer>
    <explanation>By definition, the state is all the information in an
    application at a specific point in time while the store is the single
    JavaScript object that houses your state.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is an action in Redux?</p>
    <answer correct>In Redux, an action is an object with, at the very least, a
    `type` property.</answer>
    <answer>In Redux, an action is the dispatching of some object.</answer>
    <answer>In Redux, an action is the function you call to cause a change to
    your Redux state.</answer>
    <answer>In Redux, an action is a string that you assign to an object's `type`
    object.</answer>
    <explanation>An action in Redux is a Plain Old JavaScript Object with, at
    the very least, a `type` property.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is a reducer in Redux?</p>
    <answer correct>A pure function that is called each time an action is
    dispatched.</answer>
    <answer>Something particular to Redux that mutates the Redux state.</answer>
    <answer>A function that will `dispatch` your `actions`.</answer>
    <answer>The function that re-renders your components whenever the state is
    changed.</answer>
    <explanation>A reducer is a pure function that is called each time an action
    is dispatched.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Why can the Redux DevTools "time travel"?</p>
    <answer correct>Because Redux reducers are pure functions, the same inputs
    into a reducer will cause the same outputs, so you can cancel actions and
    recalculate the state as if that action had never been dispatched.</answer>
    <answer>Redux will compute every possible version of the state and store it
    in the DevTools so that "time travel" is possible.</answer>
    <answer>Redux DevTools does not actually provide "time travel"
    functionality.</answer>
    <answer>Because Redux can make use of middleware functions, a developer can
    install a middleware to make the Redux DevTools possible of "time travel".</answer>
    <explanation>Redux makes use of the fact that its reducers are pure
    functions, which means that the same inputs will result in the same outputs
    every time. Since the outputs are predictable, Redux can "undo" the
    dispatching of an action and essentially "time travel".</explanation>
  </question>
</quiz>
