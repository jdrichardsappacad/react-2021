import { useState, useEffect } from 'react';

import kuiperSleep from '../../assets/kuiper_sleep.jpg';
import kuiperHappy from '../../assets/kuiper_happy.jpg';

const FunctionKuiper = () => {
  const [guess, setGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [kuiper, setKuiper] = useState(kuiperSleep);

  useEffect(() => {
    if (guessCount > 4) {
      myStateSetters(0, kuiperSleep);
      alert(`Sorry you have used your 5 guesses! You lose! Start again!`);
    }
  }, [guessCount]);

  const myStateSetters = (count, kuiper) => {
    setGuess('');
    setGuessCount(count);
    setKuiper(kuiper);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guess === 'sleeping') {
      myStateSetters(0, kuiperHappy);

      alert(
        `Congratulations! ${guess.toUpperCase()}! You got it in ${
          guessCount + 1
        } guess(es)`
      );
    } else if (guess === '') {
      alert("You didn't make a guess!");
    } else {
      myStateSetters(guessCount + 1, kuiperSleep);

      alert(
        `Nice try but wrong! You have made ${
          guessCount + 1
        } guess(es) thus far!`
      );
    }
  };

  return (
    <>
      <div className='kuiper-container'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={kuiper === kuiperHappy ? 'kuiper-check' : ''}>
            <h1>Enter Kuiper's favorite activity</h1>
            <input
              type='text'
              value={guess}
              placeholder='Enter here'
              onChange={(event) => setGuess(event.target.value)}
            />
          </label>
          <div>
            <button className='k-button' type='submit'>
              Guess
            </button>
            <button
              onClick={() => setKuiper(kuiperSleep)}
              className='k-button'
              type='reset'
            >
              Reset
            </button>
          </div>
        </form>

        <img
          className={
            kuiper === kuiperHappy ? 'kuiper-image rotate' : 'kuiper-image'
          }
          alt='kuiper'
          width='450'
          height='450'
          src={kuiper}
        />
      </div>
    </>
  );
};

export default FunctionKuiper;
