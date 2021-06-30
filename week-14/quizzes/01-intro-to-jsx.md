# Intro to JSX Quiz

This quiz tests you on your understanding of JSX.

## The questions

<quiz>
  <question>
    <p>How can you create virtual DOM nodes with JSX?</p>
    <answer correct>By defining HTML syntax in a JavaScript file</answer>
    <answer>By writing JavaScript in the `<body>` of an HTML document</answer>
    <answer>By adding a `jsx` attribute to the HTML in your HTML documents</answer>
    <answer>By calling the `renderAsHTML` method available in React</answer>
    <explanation>You can create virtual DOM nodes in React with JSX by defining
    HTML syntax in a JavaScript file.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is JSX's equivalent to HTML's `class` attribute?</p>
    <answer correct>`className`</answer>
    <answer>`class`</answer>
    <answer>`jsx-class`</answer>
    <answer>`htmlClass`</answer>
    <explanation>`className` is used in JSX instead of `class` because `class`
    is a reserved keyword in JavaScript.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>When does React convert virtual DOM nodes into real DOM nodes?</p>
    <answer correct>When you call `ReactDOM.render`</answer>
    <answer>When you call `React.render`</answer>
    <answer>When you use call your `.js` file with `node`</answer>
    <answer>When React wants to</answer>
    <explanation>You can start the conversion process by using the
    `ReactDOM.render` method which will convert the virtual DOM node into a real
    DOM node and nest it under the given real DOM node.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What happens when you call `ReactDOM.render` again for the same component
    and target?</p>
    <answer correct>React compares the updated version you've made to the most
    recent version that was rendered and determines if the real DOM needs to
    change.</answer>
    <answer>React converts your newest virtual DOM into another real DOM and
    replaces your the older real DOM with the newest version.</answer>
    <answer>React reloads your page to update your content.</answer>
    <answer>React randomly decides to update or reload your component.</answer>
    <explanation>If you're calling `ReactDOM.render` on the same component on
    the same target again, React will do a comparison between your latest update
    to the virtual DOM and the most recent version of the virtual DOM that was
    rendered and decide what, if any, nodes should be updated.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Which of the following are not the same in JSX and HTML?</p>
    <answer correct>`class`</answer>
    <answer correct>`for`</answer>
    <answer correct>`onchange`</answer>
    <answer>`aria-label`</answer>
    <explanation>In JSX, HTML's `class` becomes `className`, `for` becomes
    `htmlFor`, and `onchange` becomes `onChange`.</explanation>
  </question>
</quiz>
