import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';

import './MoviesGrid.css';

const apiUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}top_rated?${apiKey}`)
            .then(res => res.json())
            .then(data => setTopRatedMovies(data.results))
            .catch(err => console.log(err.message));
    }, [])

    return (
        <div className="container">
            <h2 className="title">Top Rated</h2>
            <div className="movies-container">
                {   topRatedMovies.length <= 0 ?
                        <p>Loading...</p> : 
                        topRatedMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    )
}

export default Home