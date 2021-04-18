import { useRouteMatch, useParams } from 'react-router-dom';
// import searchMovie from '../http/queryApi';
import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import { searchMovie } from '../http/queryApi';

// `http://www.omdbapi.com/?s=${stringDelInput}&apikey=${apiKey}`
// `http://www.omdbapi.com/?i=${idDeIMDB}&apikey=${apiKey}`

export default function Search() {
  const [text, setText] = useState('');
  const [listOfMovies, setListOfMovies] = useState([]);
  const [page, setPage] = useState(1);

  console.log(useParams());

  const match = useRouteMatch();
  console.log(match);
  function startSearching(textfromForm) {
    setText(textfromForm);
  }

  function seeNextPage() {
    setPage(page + 1);
  }

  function seeBeforePage() {
    setPage(page - 1);
  }
  useEffect(() => {
    const searchMovieResult = async () => {
      if (text !== '') {
        const queryResult = await searchMovie(text, page);
        setListOfMovies(queryResult);
      }
    };
    searchMovieResult();
  }, [page, text]);
  console.log(text);
  console.log(listOfMovies);
  return (
    <div className="searchContainer">
      <h1>SearchMovie</h1>

      <SearchForm startSearching={startSearching} seeNextPage={seeNextPage} seeBeforePage={seeBeforePage} />
      <MovieList movies={listOfMovies} />
    </div>
  );
}
