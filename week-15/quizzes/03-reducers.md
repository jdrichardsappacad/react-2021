# Reducers Quiz

This quiz is to test your knowledge of reducers and how to use them.

## The questions

<quiz>
  <question>
    <p>
      The purpose of a reducer function is to:
    </p>
    <answer>Reduce the `state` object to a single value</answer>
    <answer correct>Update `state`</answer>
    <answer>Make a new `state` object</answer>
    <answer>Dispatch an `action`</answer>
    <explanation>
      The Redux store uses a pure reducer function to update state in the store.
    </explanation>
  </question>
</quiz>
<quiz>
  <question multiple>
    <p>
      A reducer accepts which of the following parameters? Choose all that apply.
    </p>
    <answer>Initial `state`</answer>
    <answer>Payload</answer>
    <answer correct>Current `state`</answer>
    <answer>Previous `state`</answer>
    <answer>Dispatch</answer>
    <answer correct>Action</answer>
    <explanation>
      The reducer function receives the current state and an action, then
      updates the state appropriately based on the `action.type`.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      True or False: A reducer should mutate the current `state` and return the same object.
    </p>
    <answer correct> False </answer>
    <answer> True </answer>
    <explanation>
      False, a Redux reducer is a pure function so you must never mutate its
      arguments (i.e. `state` and `action`). Your reducer must return a new
      object if the `state` changes.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      In an application with multiple reducers, what does the `state` parameter
      of a single reducer correspond to?
    </p>
    <answer>The entire application state</answer>
    <answer>A new state object</answer>
    <answer correct>A single slice of state
    </answer>
    <answer>There is no state parameter when utilizing multiple reducers
    </answer>
    <explanation>
      A reducer can be split up into multiple reducers handling separate,
      independent _slices_ of state. Because each reducer only handles a single
      slice of state, its `state` parameter corresponds only to the part of
      the state that it manages and it only responds to actions that concern
      that slice of state. Note: If multiple reducer functions include the same
      `CASE`, each reducer will update that function's slice of state.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      How do you properly pass multiple reducers to the `createStore` method?
    </p>
    <answer>Pass each reducer as an argument to `createStore`</answer>
    <answer>Pass an array of reducers as an argument to `createStore`</answer>
    <answer>Call `createStore` on each reducer to make a root reducer</answer>
    <answer correct>Use the `combineReducers` method to create a single reducer
    and pass that as an argument to `createStore`</answer>
    <explanation>
  `createStore` only accepts one `reducer` argument. You must combine
  reducers into a single reducer, using the `combineReducers` method and pass it
  to the store. This method accepts an object of key/value pairs with the key
  representing the name of the slice of state and the value assigned to the
  specific reducer function.
    </explanation>
  </question>
</quiz>
