import React from "react";
import "react-slideshow-image/dist/styles.css";
import logo from './logo.svg';
import './App.css';
import Znajdz from './components/main/Znajdz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Link.css';
import './About.css';
import Obiekty from './components/main/Obiekty.js';
import data from './components/main/data.js';
import User from './User.js';
import home2 from './images/homepage/home2.jpg';
import home3 from './images/homepage/home3.jpg';


function Home() {
  return (
    <>
    <div>
      <div className="App"> 
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

        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           <p>
             Miejsce na Twoje wesele
           </p>
           <Znajdz/>
           <footer>Copyright © Wesele Last Minute</footer>
         </header>

        </div>
      </div>
    </>
  )
}

function About() {
  return (
    <>
    <div>
      <div className="App"> 
        
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
        
        <header className="App-header">
        <div className="about">
          <div className="about-box">
            <img src={home3} alt="Karo"/>
            <p className="about-text">
              Karolina Romańska, założycielka portalu, pomysłodawczyni, przodowniczka pomocy parom narzeczeńskim! </p>
          </div>
          <div className="about-box">
            <img src={home2} alt="Maciek"/>
            <p className="about-text">
              Maciej Kuć, prawnik, biznesmen, człowiek-mózg, doradca biznesowy oraz współ-pomysłodawca portalu.
              </p>
          </div>
        </div>
        <footer>Copyright © Wesele Last Minute</footer>
         </header>

        </div>
      </div>
      </>
  )
}

function Venues() {
  return (
    <div>
      <div className="App"> 
        
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
        
        <header className="App-header venues-container" style={{zIndex:'-1'}}>
        <div>
          <Obiekty data={data}/>
        </div>
        <footer>Copyright © Wesele Last Minute</footer>
         </header>

        </div>
      </div>
  )
}

function Users() {
  return (
    <>
    <div>
      <div className="App"> 

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

        <header className="App-header">
        <User/>   
        <footer>Copyright © Wesele Last Minute</footer>
         </header>

        </div>
      </div>
    </>
    )
}

function FilteredBox() {
  return (
    <>
    <div>
      <div className="App"> 

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

        <header className="App-header">
        <FilteredBox/>   
        <footer>Copyright © Wesele Last Minute</footer>
         </header>

        </div>
      </div>
    </>
    )
}

const App =() => {
  return (
    <>
    <Router>
      
        <Switch>
        <Route path="/filtered-box">
            <FilteredBox />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/venues">
            <Venues />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
    </>
  );
}

export default App;
