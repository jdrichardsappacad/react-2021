import Home from './components/Home';
import Stocks from './components/Stocks';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';

function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <Home />
      <Stocks />
      <Movies />
      <MovieDetails />
    </div>
  );
}

export default App;
