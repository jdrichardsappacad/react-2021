# Redux Actions Quiz

This quiz tests your understanding of Redux Actions.

## Questions

<quiz>
  <question>
    <p>What is a Redux Action?</p>
    <answer correct>A Plain Old JavaScript Object (POJO) with a mandatory `type`
    key and optional payload.</answer>
    <answer>Whatever data you want to be inserted into your Redux store.</answer>
    <answer>An array with the type string and a payload.</answer>
    <answer>A function that returns data to be inserted into your Redux store.</answer>
    <explanation>Redux actions are simple POJOs with a mandatory `type` key and optional payload keys.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>True or False: An action updates the state directly.</p>
    <answer correct>False</answer>
    <answer>True</answer>
    <explanation>Actions do not update the state directly, instead, actions define what kind of change should happen on the state.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What does the `type` key do?</p>
    <answer correct>The `type` key defines what kind of change should happen to the state.</answer>
    <answer>The `type` key describes what the payload is.</answer>
    <answer>The `type` key informs the store no change will be happening.</answer>
    <answer>The `type` key only exists to inform the user what should happen to the state.</answer>
    <explanation>The store's reducer checks the action's `type` key for a match and uses that to determine what kind of change should happen to the state based on the logic in the `case` in the reducer.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Why should the `type` be a constant?</p>
    <answer correct>To prevent typos between the `type` and the case that matches that `type`</answer>
    <answer correct>To ensure that an error is thrown if the constant name is mistyped anywhere</answer>
    <answer>To create more variables distinct to your store</answer>
    <answer>To avoid accidental mutations of the variable</answer>
    <explanation>The `type` key should be a constant to prevent typos and ensure that an error is thrown if the constant is mistyped anywhere.</explanation>
  </question>
</quiz>
