import './home.css';
import me from '../assets/yo.png';

function Home() {
  return (
    <div className="homeContainer">
      <h1>Bienvenido al buscador de pelis "Juugle "</h1>
      <div className="description">
        <div>
          <img src={me} alt="Julián Calle" />
        </div>

        <p>
          Es muy simple va a la sección "Search" y podras buscar películas por su título. Vamos que la mecánica es
          fácil. Este esta es una prueba del primer uso de ReactJS. En este ejemplo se han implemententado los hooks
          básicos (useState y useEffect). Como fuente información se uso la API de películas y series{' '}
          <a href="http://www.omdbapi.com/">omdbapi</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
