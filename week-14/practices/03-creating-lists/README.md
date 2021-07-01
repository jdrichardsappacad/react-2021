# Practice: Functional Components and Creating Lists

Knowing how to build lists is crucial in React.
They are used in almost every facet of UI in your applications.
In this practice you will learn how to create lists in your functional components.

## Phase 0: Set up

Download the [starter][lists-starter] file for this practice.

Open the practice in VSCode and run `npm install` in the terminal.

Run `npm start` to make sure your project is set up correctly.

## Phase 1

Create a component and `.js` file called `Pokemoves`. It should return a
`div` and an `h1` that says Pokemoves.

To begin, take a look at the `data.js` folder that is also located in the `src`
folder. It has an array of objects describing each move.
We are going to import that data and use it to create a list for our
application.

With named exports we must always use curly braces and the correct variable
name to import the variable. Import the moves array from `data.js`

You are going to list out all of the potential moves of this particular Pokemon.

Create an unordered list beneath the `h1` tag.
Inside the unordered list, you will map through the `moves` array that you
imported.

Each item that you map should return a list item with the id number and the
name of the move.

```js
<ul>
  {moves.map((item) => (
    <li>
      {item.id}. {item.move}
    </li>
  ))}
</ul>
```

Look at your Browser DevTools in the console and see what kind of errors or
warnings you are receiving.

When mapping through an array, always remember that React expects a unique
key for each item that is rendered. If the item your are mapping through
has a unique `id`, that is usually the best choice for the key prop for your
returned element.This optimizes React and returns a quicker result through
[indexing][keys-and-lists].

Add a key with `item.id` to the `li` element.
Check your browser again and notice that the warning is now gone.

## Phase 2: Adding a List Item Component

While having a list item in our component renders the information,
sometimes you want to design the element that is returned. It is better
to create a new component for this purpose. Create a component called `PokeMoveCard` in the `src` folder.

Import the `PokeMoveCard.css` into the file.

The component should only return an `li` with the text `Pokemove Card`.
Now, import the `PokeMoveCard` component in your `Pokemoves` component and
replace the `li` inside the `ul` element with the PokeMoveCard.
You now need to place the key inside the PokeMove card instead of the li
element. You can also now pass all of the props returned by the single item
by using the spread operator and the item variable name.

```js
<PokeMoveCard key={item.id} {...item}>
```

These props will be available to your PokeMoveCard component when you bring
them in as an argument to the component. Try this and take a look at your
ReactDevTools to see if the props are available by clicking on each
PokeMoveCard and looking at the props. Remember to destructure your props.

[lists-starter]: ./starter
[keys-and-lists]: https://reactjs.org/docs/lists-and-keys.html
