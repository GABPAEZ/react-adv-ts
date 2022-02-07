import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

// REACT ROUTER DOM VERSION 6

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo" />
            <ul>
              {/* route se desectructura en patch y name */}
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Switch>
            {/* route se desectructura en path y Component */}
            {routes.map(({ path, Component }) => (
              <Route
                path={path}
                key="{path}"
                render={() => <Component />}
              ></Route>
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
