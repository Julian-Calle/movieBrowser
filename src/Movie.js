import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Details from './pages/Details';
import Home from './pages/Home';
import Search from './pages/Search';
import './Movie.css';

export default function Movie() {
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
