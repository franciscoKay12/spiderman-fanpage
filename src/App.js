import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import InitialPage from "./components/pageinital.component";
import Villans from "./components/villans.component";

function App() {
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to={"/pageinitial"} className="navbar-brand">
              news
            </Link>

            <div className="navbar-nav">
              <li className="nav-item">
                <Link to={"/villans"} className="nav-link">
                  Enemy
                </Link>
              </li>

            </div>
          </div>
        </nav>
        
        <Switch>
          <Route exact path={["/","/pageinitial"]} component={InitialPage} />
          <Route exact path="/villans" component={Villans} />
        </Switch>
      </div>
    );
}

export default App;
