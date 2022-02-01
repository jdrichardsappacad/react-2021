# React Context Quiz

This quiz tests your understanding of Context in React.

## The questions

<quiz>
  <question>
  <p>In order to pass information to a consumer, what `prop` is needed in the Context `Provider` Component?</p>
    <answer correct>value</answer>
    <answer>state</answer>
    <answer>useEffect</answer>
    <answer>useContext</answer>
    <explanation>A `value` prop that take an `object` as the value must be passed to the `Provider` in order for consumers to receive data from context.</explanation>
</quiz>
<quiz>
  <question>
  <p>What type of component is needed, to trigger a re-render when state changes dynamically?</p>
    <answer correct>wrapper component</answer>
    <answer>custom component</answer>
    <answer>functional component</answer>
    <answer>class component</answer>
    <explanation>A wrapper component allows the use of the `useState` hook to allow dynamic state, as well as other features, which can be passed as values to the `value` prop for consumption.</explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>What two things are needed to create a `custom context hook`?</p>
    <answer correct>`useContext` and the actual context created by using the `createContext` method</answer>
    <answer>`useState` and `useEffect` hooks</answer>
    <answer>`createContext` method and the `useState` hook</answer>
    <explanation>To create a custom hook, a variable that is pre-pended with the word `use` must be created. Also, a context must be created by declaring a variable and assigning it to an invoked `createContext` method. Finally, the custom hook variable must be assigned to an invoked `useContext` hook that is passed an argument of the newly created context.</explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>What is the purpose of the `Consumer`?</p>
    <answer correct>read the values made available by the `Provider`</answer>
    <answer>send values to the `Provider`</answer>
    <answer>globally create dynamic values</answer>
    <explanation>The `Consumer` is nested in the `Provider` and reads values passed by the `Provider` in the `value` prop.</explanation>
  </question>
</quiz>