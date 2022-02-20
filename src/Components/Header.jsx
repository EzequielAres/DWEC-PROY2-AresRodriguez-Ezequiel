import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Academics } from "./Academics";
import Crud from "./Crud";
import { Inicio } from "./Inicio";
import { Portfolio } from "./Portfolio";
import React from 'react'

export const Header = () => {
  return (
    <Router>
    <div className="container mt-3 ml-5">
      <div className="btn.group">
        <img src="" alt="logo" className=""/>
        <Link className="btn btn-sm" to="/">Inicio</Link>
        <Link className="btn btn-sm ml-2" to="/crud">Crud</Link>
        <Link className="btn btn-sm ml-2" to="/academics">Datos académicos</Link>
        <Link className="btn btn-sm ml-2" to="/portfolio">Portfolio</Link>
      </div>
    </div>

    <hr />

    <Switch>
      <Route path="/portfolio"><Portfolio /></Route>
      <Route path="/academics"><Academics /></Route>
      <Route path="/crud"><Crud /></Route>
      <Route path="/"><Inicio /></Route>
    </Switch>
  </Router>
  )
}
