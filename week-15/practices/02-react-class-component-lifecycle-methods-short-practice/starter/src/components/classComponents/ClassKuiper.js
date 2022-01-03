import { Component } from 'react';

import kuiperSleep from '../../assets/kuiper_sleep.jpg';
import kuiperHappy from '../../assets/kuiper_happy.jpg';

class Kuiper extends Component {
  constructor() {
    super();
    this.state = {
      guessCount: 0,
      guess: '',
      kuiper: kuiperSleep
    };
  }

  myStateSetters = (count, kuiper) => {
    this.setState({
      kuiper: kuiper,
      guess: '',
      guessCount: count
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.guess === 'sleeping') {
      this.myStateSetters(0, kuiperHappy);
      alert(
        `Congratulations! ${this.state.guess.toUpperCase()}! You got it in ${
          this.state.guessCount + 1
        } guess(es) !`
      );
    } else if (this.state.guess === '') {
      alert("You didn't choose anything!");
    } else {
      this.myStateSetters(this.state.guessCount + 1, kuiperSleep);
      alert(
        `Nice try but wrong! You have made ${
          this.state.guessCount + 1
        } guess(es) thus far!`
      );
    }
  };

  render() {
    return (
      <div className='kuiper-container'>
        <form onSubmit={this.onSubmit}>
          <label
            className={this.state.kuiper === kuiperHappy ? 'kuiper-check' : ''}
          >
            <h1>Enter Kuiper's favorite activity</h1>
            <input
              type='text'
              value={this.state.guess}
              placeholder='Enter here'
              onChange={(event) => this.setState({ guess: event.target.value })}
            />
          </label>
          <div>
            <button className='k-button' type='submit'>
              Guess
            </button>
            <button
              onClick={() => this.setState({ kuiper: kuiperSleep })}
              className='k-button'
              type='reset'
            >
              Reset
            </button>
          </div>
        </form>

        <img
          className={
            this.state.kuiper === kuiperHappy
              ? 'kuiper-image rotate'
              : 'kuiper-image '
          }
          alt='kuiper'
          width='350px'
          height='350px'
          src={this.state.kuiper}
        />
      </div>
    );
  }
}

export default Kuiper;
