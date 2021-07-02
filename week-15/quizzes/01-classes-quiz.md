# Class Component Quiz

This quiz tests you on your understanding of Class Components in React.

## The questions

<quiz>
  <question>
    <p>Is a constructor function and super method required when building a class
    component in React?</p>
    <answer correct>No</answer>
    <answer>Yes</answer>
    <explanation>If you are not creating state or binding a method, the
    constructor function and super method are not required.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>If you have state that looks like this
    ```
    this.state = {count:0, message: ""}
    ```
    and you want to increment the count state by one, how would you do that?
    </p>
    <answer correct> this.setState((prevState) => ({count: prevState.count +
    1}))</answer>
    <answer>this.state.count = this.state.count + 1</answer>
    <answer>count = count + 1</answer>
    <answer>this.setState(this.state.count = this.state.count + 1)</answer>
    <explanation>When updating state that relies on previous state, you should
    use the second form of setState that accepts a function instead of an
    object.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>When does the componentDidMount lifecycle method run and how many times
    does it run?</p>
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
    <p>You must bring in props as an argument in class components in order to
    use them.</p>
    <answer correct>False</answer>
    <answer>True</answer>
    <explanation>Props are accessible without having to bring them into a
    class component like we do with function components.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>What do we need in order to create a class component with state in
    React?</p>
    <answer correct>We need to import Component from the react package and
    create a subclass extending this class</answer>
    <answer correct>We need to call the render method</answer>
    <answer correct>We need to use the constructor and super methods if we want
    to have state in this component</answer>
    <answer>We need to bring in props</answer>
    <explanation>In order to create a class component with state, you need to
    import Component from react and create a subclass extending the Component
    Class. You also must call the render method with a return that is using JSX.
    If you want to create state you must use the constructor and super methods
    in order to gain the functionality of the Component class. Props are already
    inherited, that is built in.</explanation>
  </question>
</quiz>
