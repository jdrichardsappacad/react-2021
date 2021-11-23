# `context` Quiz

This quiz tests you on your understanding of `React context`.

## Questions

<quiz>
  <question>
  <p>What method is used to make a context object?</p>
  <answer>useContext()</answer>
  <answer>reactContext()</answer>
  <answer>setContext()</answer>
  <answer correct>createContext()</answer>
  <explanation>In order to create a context, you can simply import the `createContext()` function from `react`, invoke the function to create a Context object, and export the context.</explanation>
  </question>
</quiz>

<quiz>
  <question>
  <p>What is is returned from passing a given context to the `useContext` hook?</p>
  <answer>The children of provider</answer>
  <answer correct>The value of that context</answer>
  <answer>A provider componenet</answer>
  <answer>A consumer componenet</answer>
  <explanation>`useContext` is a React hook that allows components to "consume", or read, the value of a given context. If you pass a context into the `useContext` hook, the hook will return the value of that context.</explanation>
  </question>
</quiz>

<quiz>
  <question>
  <p></p>
  <answer></answer>
  <answer></answer>
  <answer></answer>
  <answer></answer>
  </question>
</quiz>

<quiz>
  <question>
  <p></p>
  <answer></answer>
  <answer></answer>
  <answer></answer>
  <answer></answer>
  </question>
</quiz>
