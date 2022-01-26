import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props); // must be called if creating a constructor method

    // Initialize the component state object
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 5 });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('hello world!');
    }
  }

  componentWillUnmount() {
    console.log('cleanup');
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <div>{this.state.count}</div>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          Increment
        </button>
        <hr />
      </>
    );
  }
}

export default ClassComponent;
