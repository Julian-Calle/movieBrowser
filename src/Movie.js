import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Details from './pages/Details';
import Home from './pages/Home';
import Search from './pages/Search';
import './Movie.css';
// `http://www.omdbapi.com/?s=${stringDelInput}&apikey=${apiKey}`
// `http://www.omdbapi.com/?i=${idDeIMDB}&apikey=${apiKey}`

export default function Movie() {
  // const [scrollpos, setScrollpos] = useState(0);

  // useEffect(() => {
  //   const screenScroll = window.pageYOffset;
  //   const navBar = document.querySelector('.navigationBar');
  //   const nabBarTopOffset = navBar.offsetTop;
  //   console.log(screenScroll);
  //   console.log(nabBarTopOffset);
  //   if (screenScroll > nabBarTopOffset) {
  //     navBar.classList.add('stickyHeader');
  //   } else {
  //     navBar.classList.remove('stickyHeader');
  //   }
  // }, [scrollpos]);

  // function wheel(e) {
  //   const scrollpos = e.pageY;

  //   setScrollpos(scrollpos);
  // }
  // onWheel={wheel}

  return (
    <main>
      <Router>
        <ul className="navigationBar test">
          <li>
            <NavLink to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" activeClassName="selected">
              Search
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/details/:imdbID">
            <Details />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
