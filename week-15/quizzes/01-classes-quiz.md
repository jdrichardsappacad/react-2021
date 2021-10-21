# Class Component Quiz

This quiz tests your understanding of Class Components in React.

## The questions

<quiz>
  <question>
    <p>Is a constructor function with a super method required when building a
     class component in React?</p>
    <answer correct>No</answer>
    <answer>Yes</answer>
    <explanation>The only required method in a class component is the render
    lifecycle method.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Given this state:
    ```
    this.state = { count: 0, message: ""}
    ```
    How would you update the state and increment the count by one?
    </p>
    <answer correct> this.setState((prevState) => ({count: prevState.count +
    1}))</answer>
    <answer>this.state.count = this.state.count + 1</answer>
    <answer>count = count + 1</answer>
    <answer>this.setState(this.state.count = this.state.count + 1)</answer>
    <explanation>When updating state that relies on previous state, you should
    use the second form of setState that accepts a function instead of an
    object. This is because setState calls are batched and are not synchronous,
    so a callback is necessary in order to correctly access the previous state.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>When and how may times does the componentDidMount lifecycle method run?</p>
    <answer correct>It runs once after the initial render of the
    component.</answer>
    <answer>It runs after each render.</answer>
    <answer>It doesn't run after the first render however it does run after each
    subsequent render.</answer>
    <answer>It runs once the component unmounts.</answer>
    <explanation>The componentDidMount method runs once after the component
    mounts and renders for the first time. It's comparable to a useEffect with
    an empty dependency array.</explanation>
  </question>
</quiz>

<quiz>
  <question>
  <p> True or False: You must pass props as an argument in class components
    in order to use them.</p>
    <answer correct>False</answer>
    <answer>True</answer>
    <explanation>Props are accessible without having to pass props as an argument.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>How do you create a class component and initialize state?</p>
    <answer correct>Import `Component` from the `react` package and
    create a subclass extending this class</answer>
    <answer correct>Call the render method</answer>
    <answer correct>Use the constructor and super methods if we want
    to have state in this component</answer>
    <answer>Use `this.setState` to initialize state in the constructor</answer>
    <explanation>In order to create a class component with state, you need to
    import `Component` from `react` and create a subclass extending the
    Component Class. You must,also, call the render method with a return that
    returns JSX. If you want to create state you must use the constructor and
    super methods and then use the `this.state={}` method to initialize your
    state object</explanation>
  </question>
</quiz>
