# Practice: Functional Components and Creating Lists

Knowing how to build lists is crucial in React.
They are used in almost every facet of UI in your applications.
In this practice you will learn how to create lists in your functional
components.

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

## Create Pokemoves component

Create a component and `.js` file called `Pokemoves`. It should return a
`div` and an `h1` that says Pokemoves.

To begin, take a look at the `data.js` file that is also located in the `src`
folder. It has an array of objects describing each move.
We are going to import that data and use it to create a list for our
application.

With named exports we must always use curly braces and the correct variable
name to import the variable. In `Pokemoves.js` import the moves array from
`data.js`

You are going to list out all of the potential moves of this particular Pokemon.

Create an unordered list beneath the `h1` tag.
Inside the unordered list, you will `map` through the `moves` array that you
imported.

Each item that you map should return a list item with the id number and the
name of the move.

```js
<ul>
  {moves.map(item => (
    <li>
      {item.id}. {item.move}
    </li>
  ))}
</ul>
```

Import your `Pokemoves` component into App.js and render it under the
 `BaseStats` component. 

Look at your Browser DevTools in the console and see what kind of errors or
warnings you are receiving.

When mapping through an array, always remember that React expects a unique
key for each item that is rendered. If the item your are mapping through
has a unique `id`, that is usually the best choice for the key prop for your
returned element. This optimizes React and returns a quicker result through
[indexing][keys-and-lists].

Add a key with `item.id` to the `li` element.
Check your browser again and notice that the warning is now gone.

## Adding a List Item Component

While having a list item in our component renders the information, sometimes you
want to design the element that is returned. It is better to create a new
component for this purpose. Create a component called `PokeMoveCard` in the
`src` folder.

Import the `PokeMoveCard.css` into the file.

The component should only return an `li` with the text `Pokemove Card`.
Now, import the `PokeMoveCard` component in your `Pokemoves` component and
replace the `li` inside the `ul` element with the `PokeMoveCard` component.
You now need to place the key inside the PokeMove card instead of the li
element.

```js
<PokeMoveCard key={item.id} />
```

Take a look in your Browser and you will see Pokemove Card written for the
number of items in your moves array.

You can now pass all of the props returned by the single item
by using the spread operator and the item variable name.

```js
<PokeMoveCard key={item.id} {...item} />
```

This says, send all of the values in this item as props to the
Pokemove component.

Next, in your `PokeMoveCard` component, destructure the `id`, `type` `move` and
`level` props in your component argument. Go to your React DevTools and click on
each PokeMoveCard component to see the props available to each rendered
component.

Add the destructured props, like below, to the PokeMove component. Remember to
give the li a class of `poke-move-card`.

```js
return (
  <li className='poke-move-card'>
    <h3>Move {id}</h3>
    <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
    <p>Type: {type}</p>
    <p>Level: {level}</p>
  </li>
);
```

Congratulations! In this practice you have learned:

1. Creating an unordered list in React using `.map`
2. Adding a key prop to the returned item in your list
3. Passing props using the spread operator
4. Returning a component instead of an li element in your `.map` function

[starter]: https://github.com/orgs/appacademy-starters/repositories?type=all
[keys-and-lists]: https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key
