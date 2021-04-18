import { useState } from 'react';
import './searchForm.css';
export default function SearchForm(props) {
  const [text, setText] = useState('');

  const sendText = props.startSearching;
  const goNextPage = props.seeNextPage;
  const goBeforePage = props.seeBeforePage;

  function updateInput(event) {
    setText(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    setText(event.target.value);
    console.log('Buscando:', text);
    setText('');
    sendText(text);
  }

  return (
    <div className="searchForm">
      <button onClick={goBeforePage}>Previous page</button>
      <button onClick={goNextPage}>Next page</button>
      <form onSubmit={submitForm}>
        <input onChange={updateInput} value={text} name="search"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
