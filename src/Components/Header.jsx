import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Academics } from "./Academics";
import Crud from "./Crud";
import { Inicio } from "./Inicio";
import { Portfolio } from "./Portfolio";
import React from 'react'
import { Fragment } from "react/cjs/react.production.min";

export const Header = () => {
  return (
    <Fragment>
    <div className="contenedor">
      <div className="btn.group">
        <a href="" className="btn btn-sm header-elemento">Inicio</a>
        <a href="#Experiencia" className="btn btn-sm ml-2 header-elemento">Formación</a>
        <a href="#Portfolio" className="btn btn-sm ml-2 header-elemento">Portfolio</a>
        <a href="#Comentarios" className="btn btn-sm ml-2 header-elemento">Comentarios</a>
      </div>
    </div>

    <hr />
    </Fragment>
  )
}
