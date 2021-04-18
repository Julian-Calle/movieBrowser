export default async function Test() {
  const apiKey = 'a9585c1d';
  const idDeIMDB = 'tt0848228';
  const resultQuery = await (await fetch(`http://www.omdbapi.com/?i=${idDeIMDB}&apikey=${apiKey}`)).json();
  console.log(resultQuery);

  return <h1>tets</h1>;
}
