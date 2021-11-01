# Class Component Quiz

This quiz tests your understanding of Class Components in React.

## The questions

<quiz>
  <question>
  <p>Are a constructor function and a super method required when building a
  class component in React?</p>
    <answer correct>No</answer>
    <answer>Yes</answer>
    <explanation>If you are not creating state or binding a method, the
    constructor function and super method are not required.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Given state that looks like this:
    ```
    this.state = { count: 0, message: ""}
    ```
    How would you increment the count by 1?
    </p>
    <answer correct> this.setState((prevState) => ({count: prevState.count +
    1}))</answer>
    <answer>this.state.count = this.state.count + 1</answer>
    <answer>count = count + 1</answer>
    <answer>this.setState(this.state.count = this.state.count + 1)</answer>
    <explanation>When updating state that relies on previous state, you should
    use the second form of setState that accepts a function instead of an
    object. This is because setState calls are batched and are not synchronous.
    A callback is necessary in order to correctly access the previous state.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>When and how many times does the componentDidMount lifecycle method run?</p>
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
  <p> True or False: When implementing class components, you must bring in props as an argument in order to use them.</p>
    <answer correct>False</answer>
    <answer>True</answer>
    <explanation>Props are accessible without having to add them to the constructor function of a class component. Functional components require props as an argument.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>What is needed to create a class component with state> Choose all that apply:</p>
    <answer correct>You need to import Component from the react package and
    create a subclass extending the Component class</answer>
    <answer correct>>You need to call the render method</answer>
  <answer correct>>You need to use the constructor and super methods in order to
  have an initial state in the component.</answer>
    <answer>You need to add props to the constructor function.</answer>
    <explanation>In order to create a class component with state, you need to
    import Component from React and create a subclass extending the Component
    Class. You also must call the render method with a return that uses JSX.
    If you want to create state you must use the constructor and super methods
    in order to gain the functionality of the Component class. Props are already
    inherited, that is built in.</explanation>
  </question>
</quiz>
