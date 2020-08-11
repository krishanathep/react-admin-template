import React from "react";
import Home from "./pages/Home";
import Blank from './pages/Blank'
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <div className="wrapper">
            <Route exact path='/' component={Home} />
            <Route path='/blank' component={Blank} />
          </div>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
