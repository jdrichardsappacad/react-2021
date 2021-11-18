# Redux Actions Quiz

This quiz tests your understanding of Redux Actions.

## Questions

<quiz>
  <question>
    <p>What is a Redux Action?</p>
    <answer correct>A Plain Old JavaScript Object (POJO) with a mandatory `type`
    key and optional payload</answer>
    <answer>Whatever data you want to be inserted into your Redux store</answer>
    <answer>An array with the type string and a payload</answer>
    <answer>A function that returns data to be inserted into your Redux store</answer>
    <explanation>Redux actions are simple POJOs with a mandatory `type` key and optional payload keys</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>True or False: An action updates the state directly.</p>
    <answer correct>False</answer>
    <answer>True</answer>
    <explanation>Actions do not update the state directly. Instead, actions define the state change that should occur.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>The `type` key in does what?</p>
    <answer correct>Defines what kind of change should happen to the state</answer>
    <answer>Describes what the payload is</answer>
    <answer>Informs the store no change will be happening</answer>
    <answer>Only exists to inform the user what should happen to the state</answer>
    <explanation>The store's reducer checks the action's `type` key for a match. If the `type` matches a `case` in the reducer, the state is updated based on that `case`'s code.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>The `type` key should be a constant in order to:</p>
    <answer correct>Prevent typos between the `type` and the case that matches that `type`</answer>
    <answer correct>Ensure that an error is thrown if the constant name is mistyped anywhere</answer>
    <answer>Create more variables distinct to your store</answer>
    <answer>Avoid accidental mutations of the variable</answer>
    <explanation>The `type` key should be a constant to prevent typos and ensure that an error is thrown if the constant is mistyped anywhere.</explanation>
  </question>
</quiz>
