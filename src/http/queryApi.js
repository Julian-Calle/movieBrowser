const { REACT_APP_APIKEY } = process.env;

export async function searchMovie(title, page) {
  const resultQuery = await (
    await fetch(`http://www.omdbapi.com/?s=${title}&apikey=${REACT_APP_APIKEY}&page=${page}`)
  ).json();
  return resultQuery.Search;
}

export async function detailsMovie(idDeIMDB) {
  const resultQuery = await (await fetch(`http://www.omdbapi.com/?i=${idDeIMDB}&apikey=${REACT_APP_APIKEY}`)).json();

  return resultQuery;
}
