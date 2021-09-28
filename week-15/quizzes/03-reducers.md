# Reducers Quiz

This quiz is to test you on what reducers are and how to use them.

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
      The Redux store has a reducer function for updating the current state and 
      returning an updated version of the state. 
    </explanation>
  </question>
</quiz>
<quiz>
  <question multiple>
    <p>
      A reducer accepts which of the following parameters? 
    </p>
    <answer>Initial `state`</answer>
    <answer>Payload</answer>
    <answer correct>Current `state`</answer>
    <answer>Previous `state`</answer>
    <answer>Dispatch</answer>
    <answer correct>Action</answer>
    <explanation>
      The reducer function receives the current state and an action, updates the
      state appropriately based on the action.type. 
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      A reducer should mutate the current `state` and return the same object.
    </p>
    <answer correct>false</answer>
    <answer>true</answer>
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
      In an application with muliple reducers, what does the `state` parameter 
      of a single reducer coorespond to? 
    </p>
    <answer>The entire application state</answer>
    <answer>A new state object to populate</answer>
    <answer correct>The single slice of state that specific reducer manages
    </answer>
    <answer>There is no state parameter when utilizing multiple reducers
    </answer>
    <explanation>
      A reducer can be split up into multiple reducers handling separate,
      independent _slices_ of state. Because each reducer only handles a single 
      slice of state, its `state` parameter corresponds only to the part of 
      the state that it manages and it only responds to actions that concern 
      that slice of state.
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
    `createStore` only takes one `reducer` argument, so you must combine your 
    reducers back into a single reducer to pass to the store. To do this you'll 
    use the `combineReducers` method from the `redux` package and pass it an 
    object that maps state keys to the reducers that handle those slices of 
    state. 
    </explanation>
  </question>
</quiz>
