# Practice: Functional Components and JSX

In this practice you will create a Functional Component and add JSX.

## Phase 0: Set up

Download the [starter][jsx-starter] file for this practice.

Open the practice in VSCode and run `npm install` in the terminal.

Run `npm start` to make sure your project is set up correctly.

You should see `App Component` in your browser if it is running correctly.

## Phase 1: Create a Functional Component

First, create a folder in the `src` directory named `components`. Then, create a
file `Showcase.js` in the `src/components` folder. Inside that file you will
create a functional component `Showcase` with contents similar to the code
below:

```js
function Showcase() {
  return (
    <div>
      <h1>Showcase Component</h1>
    </div>
  );
}

export default Showcase;
```

Remember, your JSX will always be created in the `return` because it returns a
single element.

### Nest Showcase Component inside your App Component

Inside your `App.js` import the `Showcase` component using
[ES6 imports][es6-imports]. Replace the `h1` with a `div` element and add the
`Showcase` component as a child.

Check your browser. It should now read `Showcase Component`

## Phase 2: Add JavaScript to Your JSX

You've already seen that you can add HTML-like syntax to your JSX. Now, let's
add JavaScript. Curly braces `{}` inside JSX lets React know that JavaScript
will be evaluated, allowing you to add any [JS expression][js-expression] to
your JSX.

In `Showcase.js`, inside your functional component, you are allowed to use
Vanilla JS above the `return`.

Add a variable called `favPokemon` and assign it the name of your favorite
Pokemon or if you don't have one, `Bulbasaur`.

Inside the `h1` tag before the word `Showcase`, add the variable in curly braces
along with an `'s` after the curly braces.

Notice how you are now adding both HTML and JS in the same code.

Now create an object literal called `pokeCharacterstics` with a `type` and
a `move` key. Add values to both keys. (If you don't have any values you can
use `Grass` for type and `Vine Whip` for move.)

Now, place that object inside your return statement below the `h1` tag.
(Remember your curly braces.)

Take a look in your browser. The error that you see indicates that you cannot
use a complete object literal inside your JSX. You must key into the object, so
go ahead and delete that line of code.

Instead create an `h2` tag that says something like, **Bulbasaur's type is Grass and
one of their moves is Vine Whip** Use the variables that you have created to
create this JSX.

## Phase 3: Add an Image to your JSX

Take a look inside the images folder. Notice that there is an image for
Bulbasaur. If you would like, you can add a different image to this folder for
your character.

Next, inside your `Showcase` component, import your image using
[ES6 imports][es6-imports] by giving your image a variable name and assigning
it to the relative path from the file you are in to the image.

Now place an `img` tag between your `h1` and `h2` tags and assign the image
variable to the `src` attribute. Add an `alt` attribute and assign the
character's name to the `alt` attribute.

## Phase 4: Add CSS to your JSX

There are multiple ways to add CSS to your JSX. For now, let's begin with inline
CSS.

When using inline CSS inside your HTML-like elements, React expects a `style`
attribute that is assigned to an object. In order to execute that syntax you
must use `{{}}` and place your inline styles inside.

Inside your style object React expects key/value pairs. Any CSS selector that is
normally kebab-case should be converted into camelCase. (e.g `padding-right`
should be `paddingRight`). Also, each value in your key/value pairs should be
represented in quotes as a string.

Wrap a `span` tag around the two separate pokeCharacteristics. Inside the first
span make the background color green and the text white. Inside the second span
make the background color white and the text green using hex colors.

## Phase 5: Add a Background Image Using External CSS

Let's add a background image to our page by using external CSS. Create a file
called `App.css`. Inside the `App.css` file, add a class with the name
`background`. Remember, in this file we use regular CSS. In your background
selector add these values

```css
.background {
  background: url(./images/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
}
```

Inside your `App.js` file, import the relative path of the css file. Do not
assign it a variable name.

Now add the background class to your wrapper div in `App.js`. Remember, in JSX
class attributes are represented by using the word `className`.

Take a look inside your browser. You should now have a orange-ish background
added to your view.

Finally, use inline or external CSS to resize your image.

### Bonus

- Move all CSS in `Showcase.js` to it's own external file called `Showcase.css`
  and assign classes to the elements.
- Remember to import the file into your `Showcase.js` file and use classes
  where there was inline code
- Center all elements on page using [Flexbox][flexbox]
- Using inline styles evenly distribute the height and width of the image and
  turn it into a circle.

## What You Have Learned

Congratulations! You have successfully learned the basics of adding JSX to a
React Functional Component. This includes:

- Creating a Functional Component
- Nesting one component inside of another
- Adding HTML-like elements to JSX
- Add JavaScript expressions to JSX
- Importing and adding an image
- Using inline CSS inside your JSX
- Using External CSS and importing the file using a relative path

[jsx-starter]: ./starter
[js-expression]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions
[es6-imports]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[flexbox]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
