# Practice: Functional Components and Passing Props

In this practice you will create a functional component and pass props from a parent component to a child component.

## Phase 0: Set up

Download the [starter][props-starter] file for this practice.

Open the practice in VSCode and run `npm install` in the terminal.

Run `npm start` to make sure your project is set up correctly.

## Phase 1: Create a Functional Component

Create a functional component called `BaseStats` in your `src` folder and add it to your `App.js` component below the `Showcase` component. Test it in your Browser.

## Phase 2: Create an Object and pass props

Next, you are going to create an object inside your `App.js` called `baseStats`.
It should look like this:

```js
const baseStats = {
  hp: 45,
  attack: 49,
  defense: 49,
  speed: 45
};
```

Pass this object to the `BaseStats` component using `stats` as the prop name.
In your `BaseStats` component, bring in `props` as the argument to the functional component.

Go to your browser, go to the Browser DevTools and open your React DevTools.
Click on the BaseStats component. Under `props` you should see your stats props object.

## Phase 3: Use props object in the child component

Now you are ready to use your props object.
Create a table beneath your `h1` tag.
It should have four table rows, each with two table data tags.
The first table data tag of each table row should contain, in order:

1. Hit Points
2. Attack
3. Defense
4. Speed
   (do not include the numbers)

The second table data tag of each row should contain the prop value that is associated with the name represented in the first table data tag.
(e.g Hit Points | 45)

Test your app in the browser.

## Phase 4 Destructure your Props

To make your code more concise and practice the DRY principal, destructure your props variables in the argument for the `BaseState` functional component.

Refactor your JSX to reflect these variables.

[props-starter]: http://www.google.com
