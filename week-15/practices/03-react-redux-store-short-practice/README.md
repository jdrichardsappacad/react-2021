# React-Redux Store Connection

Over the next series of short practices, you are going to learn how to:

1. Connect `React` to the `Redux store`
2. Create `actions`, `action creators` and `reducers`
3. Learn to use the `useSelector` hook to watch `state`
4. Learn to use the `useDispatch` hook and update the `reducer`

In this short practice, you are going to finish creating a `Redux store`, then connect the `store` to `React`.

## Set up

Make sure you are logged in to your [codesandbox.io][code-sandbox] account.

Navigate to the [starter][starter] repo for this short practice.

### 2 Options:

#### Option 1: (this simplest option)

- In the url of the starter repo, append `box` to the word `github` and hit
  `Enter` or `return` depending on your computer. You should be taken to
  [codesandbox.io][code-sandbox] and the app should be loaded for you.
- Example: If the repo was
  `https://github.com/reduxjs/redux/tree/master/examples/todomvc` it would
  become `https://githubbox.com/reduxjs/redux/tree/master/examples/todomvc`

#### Option 2:

- Navigate to codesandbox.io and sign in. Click `Create Sandbox` then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.

## Create Root Reducer

The [`store`][store] is going to house the `state` tree in your application.

In order to create a store in Redux, you are required to use the `createStore` method and pass it a required `rootReducer` as an argument.

Before you begin, take a look at the `fruitReducer.js` that has been created for you. It is a trivial reducer that you ultimately will have no need for in this project. However, this is going to allow you to configure the `store` and connect it to `React`.

Open the `index.js` file in the `store` directory. Read through all of the comments that exist to get a handle on the code.

Import `fruitReducer` from the `fruitReducer.js` file using a relative path.

Below the imports, create a variable called `rootReducer`. This should be
assigned to an invoked [`combineReducers`][combine-reducers] method. The
`combineReducers` method accepts an `object` as an argument. Inside that
`object` you can add as many reducer functions as you need.
Inside `combineReducers`, create a key called `fruitState` with a value of `fruitReducer`. That is all you need for now.

Look at the bottom of the file at the `configureStore` function. You will see
that the `rootReducer` you created will be accepted as the first argument in
that function, along with the optional `preloadedState`, (which you will pass as
an argument, but not use in this project), and the `enhancer` argument, which
you will pass in order to add your `Redux devtools` and `redux-logger` tool.
Remember, these two tools were composed using a method from `Redux` called
[`compose`][compose] and the [`applyMiddleware`][applymiddleware] middleware.

If you are successful, your `rootReducer` should look like this:

```js

  const rootReducer = combineReducers({
    fruitState: fruitReducer,
  });

```

## Connect Redux to React

In the root of your `src` directory, open your `index.js` file. Below your
import for `ReactDOM`, import the `Provider` component from `react-redux`. Below
the import for the `App` component, import `configureStore` from the
`store/index.js` file. Remember, it is a `default export`. Beneath the import
for the `css`, create a variable called `store` and invoke the `configureStore`
function that you defined in your `store/index.js`.

Similar to when you connected `React context` by wrapping it around your `App`
component using a `Provider` component, you are going to do the same with your
`Redux` [`Provider`][provider] component. Wrap the `Provider` around both the
`BrowserRouter` and `App` components.

Like the `value` prop for `React context`, the `Provider` component expects a
`store` prop (it must be called `store`) that will accept a value of that
invoked `configureStore` you created above.

If you are successful, your code should look like this:

```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux';
  import { BrowserRouter } from 'react-router-dom';
  import App from './App';
  import configureStore from './store';
  import './index.css';
  const store = configureStore();
  

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

```

To see that your store has successfully been connected. Go to the Browser, open
your `devtools`, choose `Redux`. If you are successful, you should see an image
similar to the one below.

![redux-store][redux-store]

Congratulations! You have successfully:

- created a `rootReducer` to pass to the `configureStore` method
- connected `React` to `Redux`

[combine-reducers]: https://redux.js.org/api/combinereducers
[compose]: https://redux.js.org/api/compose
[applymiddleware]: https://redux.js.org/api/applymiddleware
[provider]:https://react-redux.js.org/api/provider
[redux-store]:./aws-images/redux-devtools.png
[store]:https://redux.js.org/api/store
[starter]:https://github.com/orgs/appacademy-starters/repositories?type=all
