import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {  Link  } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
// import Carousel from "./components/main/Carousel.js";

// const divStyle = {
//   position: "absolute"
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <nav className="top-nav-bar">
          <ul className="link-list">
            <li>
              <Link className="Link" to="/">Strona główna</Link>
            </li>
            <li>
              <Link className="Link" to="/about">O nas</Link>
            </li>
            <li>
              <Link className="Link" to="/venues">Obiekty</Link>
            </li>
            <li>
              <Link className="Link" to="/users">Strefa użytkownika</Link>
            </li>
          </ul>
        </nav>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
