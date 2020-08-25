import React from "react";
import Home from "./pages/Home";
import Blank from './pages/Blank'
import Repairs from './pages/Repairs'
import CreateNew from './pages/CreateNew'
import UpdateRepair from './pages/UpdateRepair'
import Create from './pages/board/Create'
import Show from './pages/board/Show'
import Edit from './pages/board/Edit'
import Board from './pages/board/List'

import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <div className="wrapper">
            <Route exact path='/' component={Home} />
            <Route path='/blank' component={Blank} />
            <Route path='/repairs' component={Repairs} />
            <Route path='/create' component={CreateNew} />
            <Route path='/update' component={UpdateRepair}/>
            <Route path='/boards/create' component={Create} />
            <Route path='/boards/show/:id' component={Show} />
            <Route path='/boards/edit/:id' component={Edit} />
            <Route path='/boards/list' component={Board}/>
          </div>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
