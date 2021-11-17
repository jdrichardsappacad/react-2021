# `useState` Quiz

This quiz tests you on your understanding of the `useState` hook.

## Questions

<quiz>
  <question>
  <p>What is returned when you call `useState`?</p>
  <answer correct>An array with the current state and an updater function.</answer>
  <answer>The current state</answer>
  <answer>The updater function</answer>
  <answer>All the previous states</answer>
  <explanation>Since all functions in JavaScript can only return one value, the `useState` hook returns a single array that holds the value of the current state and an updater function.</explanation>
  </question>
</quiz>

<quiz>
  <question>
  <p>What is a state variable in React?</p>
  <answer correct>A variable whose value gets preserved across rerenders.</answer>
  <answer>A variable that describes how a component renders.</answer>
  <answer>The function that updates state.</answer>
  <answer>A variable that holds the values passed from the parent component.</answer>
  <explanation>State variables are a way to preserve some values between function calls/rerenders.</explanation>
  </question>
</quiz>

<quiz>
  <question>
  <p>What argument can `useState` take?</p>
  <answer correct>Any data type, including a function that will be used as the initial value.</answer>
  <answer>Only objects</answer>
  <answer>Only arrays</answer>
  <answer>Only a primitive data type</answer>
  <explanation>The argument passed to the `useState` hook is only used when the component gets evaluated for the first time, and it can be any data type; it can be any value that you want to use as the initial value.</explanation>
  </question>
</quiz>

<quiz>
  <question>
  <p>How can you update the value of a state variable that came from the `useState` hook?</p>
  <answer correct>By calling the updater function that is returned from the `useState` hook.</answer>
  <answer>By setting the value of the variable directly</answer>
  <answer>By using the `useUpdate` hook</answer>
  <answer>By using the `setState` method</answer>
  <explanation>The value that comes from the `useState` hook can, and should only, be updated by calling the updater function that comes as the second value in the array returned by the `useState` hook.</explanation>
  </question>
</quiz>
