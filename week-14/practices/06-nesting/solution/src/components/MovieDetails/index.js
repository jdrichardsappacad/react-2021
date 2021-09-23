//!!START SILENT
import { useParams } from 'react-router-dom';

function MovieDetails(props) {
  const { movieId } = useParams();

  const movieChoice = props.movies.find((movie) => movie.id === +movieId);

  return (
    <div className='comp purple'>
      <h1>MovieDetails Component</h1>
      {/*!!START SILENT */}
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
      {/*!!END */}
    </div>
  );
}
//!!END 

function MovieDetails() {
  return (
    <div className="comp purple">
      <h1>MovieDetails Component</h1>
    </div>
  );
}

export default MovieDetails;



export default MovieDetails;
