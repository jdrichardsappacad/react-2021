//!!START SILENT 
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import MovieDetails from '../MovieDetails';

function Movies(props) {
  const { path, url } = useRouteMatch();

  return (
    <div className='comp orange'>
      <h1>Movies Component</h1> 
      <nav>
        {props.movies.map((movie) => (
          <span key={movie.id}>
            <NavLink to={`${url}/${movie.id}`}>{movie.title}</NavLink> |
          </span>
        ))}
      </nav>
      <Switch>
        <Route path={`${path}/:movieId`}>
          <MovieDetails movies={props.movies} />
        </Route>
      </Switch>
    </div>
  );
}
//!!END 
//!!ADD
//function Movies() {
  //return (
    //<div className="comp orange">
     //<h1>Movies Component</h1>
    //</div>
  //);
//}
//!!END_ADD

export default Movies;
