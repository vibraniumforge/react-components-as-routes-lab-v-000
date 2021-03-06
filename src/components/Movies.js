import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, i)=>(
          <div key = {i}>
            {movie.title}
            {movie.time}
            {movie.genres.map((genre, index)=>(
              <ul>
                <li key={index}>
                  {genre}
                </li>
              </ul>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Movies;
