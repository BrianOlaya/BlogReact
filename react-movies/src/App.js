import React from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";


import PlayingMovies from "./pages/PlayingMovies";
import PopularsMovies from "./pages/PopularsMovies";
import RatedsMovies from "./pages/RatedMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/now-playing" component={PlayingMovies} />
          <Route exact path="/popular" component={PopularsMovies} />
          <Route exact path="/top-rated" component={RatedsMovies} />
          <Route exact path="/upcoming" component={UpcomingMovies} />
          <Route path="*" to="/home" />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
