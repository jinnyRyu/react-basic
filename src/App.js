import React, { useState } from 'react';
import { useEffect } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm ';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Switch


} from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);


  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id != id;
    }))
  }
  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
    );
  }) : '추가된 영화가 없습니다. ';

  const addMovie = (movie) => {
    setMovies([
      ...movies,//구조분해 할당 
      movie
    ]);

  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/movies'>
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
          </Route>
          <Route path='/users'>
            <h1>users</h1>
          </Route>
          <Route path='/'>
            <h1>home</h1>
          </Route>
        </Switch >
      </div>
    </Router >


  );
}

export default App;
//route 태그 하나당 하나의 페이지를 나타냄