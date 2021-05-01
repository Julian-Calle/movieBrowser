import { BrowserRouter as Link, useParams } from 'react-router-dom';
import { detailsMovie } from '../http/queryApi';
import { useState, useEffect } from 'react';
import './details.css';
function Details() {
  const [infoMovie, setInfoMovie] = useState({});
  // const match = useRouteMatch();

  let { imdbID } = useParams();
  console.log(infoMovie);
  useEffect(() => {
    const getInfoMovie = async () => {
      const resultInfoMovie = await detailsMovie(imdbID);
      console.log(resultInfoMovie);
      setInfoMovie(resultInfoMovie);
    };
    getInfoMovie();
  }, []);
  // Genre

  return (
    <div className="detailsContainer">
      <Link className="detailsLink" to="/search">
        Volver a busqueda
      </Link>
      <div className="detailsView">
        <div className="posterDetails">
          <h1>Detalles de: {infoMovie.Title}</h1>
          <div className="asideMovie">
            <div className="imgPoster">
              <img src={infoMovie.Poster} alt={infoMovie.Title} />
            </div>

            <div className="infofoMovie">
              <h2>Año de proyección: {infoMovie.Year}</h2>
              <h2>Argumento</h2>
              <p>{infoMovie.Plot}</p>
              <h2>Escritor</h2>
              <p>{infoMovie.Writer}</p>
              <h2>Ratings</h2>
              <ul className="ratings">
                {infoMovie.Ratings?.map((rating, index) => {
                  return (
                    <h4>
                      <li>
                        {rating.Source}: {rating.Value}
                      </li>
                    </h4>
                  );
                })}
              </ul>
              {/* {console.log(infoMovie.Ratings[0].Source)} */}
            </div>
          </div>
        </div>
      </div>
      <Link className="detailsLink" to="/search">
        Volver a busqueda
      </Link>
    </div>
  );
}

export default Details;
