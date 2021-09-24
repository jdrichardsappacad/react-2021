# Reducers Quiz

This quiz is to test you on what reducers are and how to use them.

## The questions

<quiz>
  <question>
    <p>
      The purpose of the reducer function is to:
    </p>
    <answer>Reduce the state object to a sigle value</answer>
    <answer correct>Update state</answer>
    <answer>Make a new state object</answer>
    <answer>Dispatch an action</answer>
    <explanation>
      The Redux store has a reducer function for updating the current state and returning that new state. 
    </explanation>
  </question>
</quiz>
<quiz>
  <question multiple>
    <p>
      A reducer accepts which of the following parameters? 
    </p>
    <answer>Initial state</answer>
    <answer>Payload</answer>
    <answer correct>Current state</answer>
    <answer>Previous state</answer>
    <answer>Dispatch</answer>
    <answer correct>Action</answer>
    <explanation>
      The reducer function receives the current state and an action, updates the state appropriately based on the action.type. 
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      A reducer should mutate the current state and return the same object.
    </p>
    <answer correct> false </answer>
    <answer> true </answer>
    <explanation>
      False, inside a Redux reducer, you must never mutate its arguments (i.e. state and action). Your reducer must return a new object if the state changes.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      The state a reducer cooresponds
    </p>
    <answer> `npx create-react-app <<project-folder-name>> --use-npm` </answer>
    <answer> `npx create-app-academy-react-app <<project-folder-name>>
    --use-npm` </answer>
    <answer correct>`npx create-react-app <<project-folder-name>> --template
    @appacademy/react-v17 --use-npm`</answer>
    <answer>`npx create-react-app <<project-folder-name>> --template @appacademy
    --use-npm`</answer>
    <explanation>
      `npx create-react-app <<project-folder-name>> --template
      @appacademy/react-v17 --use-npm` is the correct format.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      What is the purpose of index.css file?
    </p>
    <answer correct> To add site wide styles for your app.</answer>
    <answer> To style an individual component. </answer>
    <answer> Nothing, it's just something Create React App created.</answer>
    <answer >To be the only file where you can add your styles</answer>
    <explanation>
      While you can write all of your styles in `index.css`, its true purpose is
      to add styles that will be used site wide.
    </explanation>
  </question>
</quiz>
