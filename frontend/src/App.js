
import React from "react";
import { BrowserRouter , Switch, Route} from "react-router-dom";
import './style/style.css';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from "./pages/NotFound";
import Login from './pages/Login';

import admin from './pages/admin'

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Register" exact component={Register}/>
      <Route path="/Login" exact component={Login}/>
      <Route path="/admin" exact component={admin}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>

  );
}

export default App;
