# useEffect Short Practice

In this practice you will:

- create a `useEffect` to change the color of the background based on an
  interval
- create a `useEffect` to save the current [http status code][status-codes] in
  the browser's [`local storage`][local-storage]
- create a useEffect to show an alert box when the [http status
  code][status-codes] does not exist or when the user does not enter a code into
  the input box.

## Setup

Download the starter for this practice from the bottom of the page.

Open the starter in VSCode and run `npm install` in the terminal.

Run `npm start` and see if your project loads correctly. You should see a home
page. If you click on the home button you will be directed to the `/cats` route
where an image and input box will appear.

For this project we will use a small external api called [HTTP Cats][http-cats].
Take a look at the api and see what it does

Navigate to the `Cat.js` file. This is where you will do the work.

## Change Background Color

To change the background color, you are going to use an array of colors that is
exported from `data.js`.

Currently, the background color is based on using the `colors` array along with
the number that is in the `colorNum` slice of state.

[`setInterval`][set-interval] is a good example of a [`side`
`effect`][side-effects]. React prefers that you place `side effects` inside a
[`useEffect`][use-effect] hook.

In order to change the background color, create a `useEffect` that takes a
`setInterval` function inside the callback function. This `useEffect` should
only run once. (Hint: Check your homework if you don't remember how to do this)

The interval should change the `setColorNum` slice of state every 5 seconds.
There are only 5 colors. When setting the state, you should make sure you have
the most updated state. Also, you should create a conditional where the state
should be set back to the first color if you reach the fifth color in the array.

Also notice that there is a Home button at the top of the screen. When the user
clicks that button and the component unmounts, the interval in the `useEffect`
should stop in order to prevent a memory leak.

Your code should look similar to the code below:

```js

 useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorNum(prevNum => (prevNum === 4 ? 0 : prevNum + 1));
    }, 5000);

    return () => clearInterval(colorInterval);
  }, []);

```

## Local Storage

[`Local Storage`][local-storage] is another example of a `side effect`. It is a
part of the [Window object][window-object] in the browser. It can be used to
store trivial information that anyone is allowed to see. You should never store
personal or private information in `local storage`.

Your next goal is to set your `statusChange` slice of state to the value of the
`catStatus` string. If there is no `catStatus` variable in your `local storage`,
the state should be set to `418`. Use `local storage`'s `.getItem` method to
retrieve the value of `catStatus`

Navigate to your browser. Open up the Browser DevTools. Choose `Application`
from the top bar. Look for `Local Storage` in the `Storage` section. You should
see your `localhost` address. `Right Click` on the address and choose `Clear`.
this will clear out your `Local Storage`. When you reload the page, you should
see a picture of a cat with the status code `418 I'm a teapot`.

Your code should look similar to the code below:

```js

 const [statusChange, setStatusChange] = useState(
    localStorage.getItem('catStatus') || '418'
  );

```

Next, your goal is to set the `catStatus` key in your `local storage` each time
the `statusChange` slice of state changes. `useEffect` is the perfect place to
do this. Create a `useEffect` that uses the `.setItem` method from `local`
`storage` to set the value of `catStatus` to the `statusChange` slice of state,
whenever the `statusChange` variable updates.


With your DevTools still open and your `local storage` clear, reload the page
and notice that your `local storage` is immediately set with a `catStatus` of
`418`.

Type something that exists in the input box. Notice that your `local storage` is
updated each time you click the `Change Status` button. Also notice that, if the
`status code` does not exist, it shows a `404` for the image. That is how the
[HTTP Cats][http-cats] is built.

If all is working the code you added should look similar to the code below:

```js

  useEffect(() => {
    localStorage.setItem('catStatus', statusChange);
  }, [statusChange]);

```

## Use Alert to Notify the User

Previously you saw that a `404` image shows when you put in a status code that
is not a part of the api. It's better UX to alert the user when the user tries
to click `Change Status` with an empty input box, or when the number that has
been entered is not included in the api.

Create a new `useEffect`. Inside the callback function, create a conditional to
alert the user with `Please Enter A Code` when the user submits with an empty
input box.

Create another conditional for when the code does not exist in the api. You will
use the `codes` array that is imported from `data.js`. This array contains all
of the codes included in the api. If the code is not included, alert the user
with a message containing the number of the code and a message. e.g If the
status input is 5000, the message should say: `Code 5000 might exist, but is not
a proper Cat Status code`. You should also set the `statusChange` slice of state
to `404` so that when you reload the page you do not break your code.

Now test again in your browser by clicking `Change Status` with an empty input
box. Next, test with a number that does not exist. In both cases you should see
an alert message. Afterwards,  `local storage` should fill with a `404` value
for `catStatus` which you can see in your DevTools.

If you have succeeded, your code may look like the code below:

```js
  useEffect(() => {
    if (statusChange === '') {
      alert('Please Enter A Code');
      setStatusChange('404');
      return;
    }
    if (!codes.includes(Number(statusChange))) {
      alert(
        `Code ${statusChange} Might Exist, But It Is Not A Proper Cat Status Code`
      );
      setStatusChange(404);
    }
  }, [statusChange]);

```

**Congratulations!**
In this short practice, you have used `useEffect` to handle these side effects:

1. apply `setInterval` function to change the background color
2. store and retrieve trivial data in `local storage`
3. `alert` the user when information input is incorrect

[http-cats]: https://http.cat/
[status-codes]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
[set-interval]: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
[use-effect]: https://reactjs.org/docs/hooks-effect.html
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[side-effects]: https://beta.reactjs.org/learn/keeping-components-pure#side-effects-unintended-consequences
[window-object]: https://developer.mozilla.org/en-US/docs/Web/API/Window