import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Inicio } from './Components/Inicio';
import { Academics } from './Components/Academics';
import { Comments } from './Components/Comments';
import { Portfolio } from './Components/Portfolio';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Inicio />
    <Academics />
    <Portfolio />
    <Comments />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
