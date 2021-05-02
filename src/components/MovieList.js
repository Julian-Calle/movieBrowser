import { useHistory } from 'react-router-dom';
import './movieList.css';
function MovieList(props) {
  const { movies } = props;

  const history = useHistory();
  function movieDetails(imdbID) {
    console.log('Detalles');
    history.push(`/details/${imdbID}`);
  }

  return (
    <div className="listMovies">
      {movies &&
        movies.map((movie, index) => {
          return (
            <div
              key={movie.imdbID}
              className="movie"
              onClick={() => {
                movieDetails(movie.imdbID);
              }}
            >
              <div className="poster">
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              <h2>{movie.Type.toUpperCase()}</h2>
              <h2>{`ID: ${movie.imdbID}`}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default MovieList;
