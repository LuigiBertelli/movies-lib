import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

import './MoviesGrid.css'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    fetch(`${searchUrl}?${apiKey}&query=${query}`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
        .catch(err => console.log(err.message));
  }, [query])

  return (
    <div className="container">
      <h2 className="title">Results for <span className="query-text">"{query}"</span></h2>
      <div className="movies-container">
          {
            movies.length <= 0 ?
              <p>Loading...</p> :
              movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
          }
      </div>
    </div>
  )
}

export default Search