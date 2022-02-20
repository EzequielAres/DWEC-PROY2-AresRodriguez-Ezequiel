import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Inicio } from './Components/Inicio';
import { Academics } from './Components/Academics';
import { Comments } from './Components/Comments';
import { Portfolio } from './Components/Portfolio';
import { Footer } from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Inicio />
    <Academics />
    <Portfolio />
    <Comments />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
