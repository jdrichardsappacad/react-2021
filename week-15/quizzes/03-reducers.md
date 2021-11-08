# Reducers Quiz

This quiz is to test you on what reducers are and how to use them.

## The questions

<quiz>
  <question>
    <p>
      The purpose of a reducer function is to:
    </p>
    <answer>reduce the `state` object to a single value</answer>
    <answer correct>update `state`</answer>
    <answer>make a new `state` object</answer>
    <answer>dispatch an `action`</answer>
    <explanation>
    The reducer function is located inside the store and is responsible for updating the application state.
    </explanation>
  </question>
</quiz>
<quiz>
  <question multiple>
    <p>
      A reducer accepts which of the following parameters? (Select all that apply)
    </p>
    <answer>props</answer>
    <answer>payload</answer>
    <answer correct>state</answer>
    <answer>select</answer>
    <answer>dispatch</answer>
    <answer correct>action</answer>
    <explanation>
      The reducer function accepts the current state and an action as parameters.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      True or False: The proper way to update state is to mutate the object and 
      return that same object.
    </p>
    <answer correct> False </answer>
    <answer> True </answer>
    <explanation>
      False, a reducer is a `pure` function and should return a new
      object if the `state` changes. When updating an object or nested object,
      the values of the previous state should be copied in using a shallow copy.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      In an application with multiple reducer functions, what does the `state`
      parameter of a single reducer function correspond to?
    </p>
    <answer>The entire application state</answer>
    <answer>A new state object</answer>
    <answer correct>The current state for that particular `slice` of state.
    </answer>
    <answer>There is no state parameter when utilizing multiple reducers
    </answer>
    <explanation>
      A reducer can be split up into multiple reducer functions handling
      separate, independent _slices_ of state. Because each reducer only handles
      a single slice of state, its `state` parameter corresponds only to the 
      part of the state that it manages.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      How do you properly pass multiple reducer functions to the `createStore` method?
    </p>
    <answer>Pass each reducer as an argument to `createStore`</answer>
    <answer>Pass an array of reducers as an argument to `createStore`</answer>
    <answer>Call `createStore` on each reducer to make a root reducer</answer>
    <answer correct>Use the `combineReducers` method to create a single reducer
    and pass that as an argument to `createStore`</answer>
    <explanation>
     `createStore` takes one `reducer` argument. Using `combineReducers`, 
     reducer functions can be added using key/value pairs to combine into one 
     larger reducer function.
    </explanation>
  </question>
</quiz>
