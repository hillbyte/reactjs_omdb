import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  var imdb = `https://www.imdb.com/title/${movie.imdbID}`;
  return (
    <div className="movie">
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <h3>{movie.Title}</h3>
      <p>({movie.Year})</p>
      <h5>
        <a href={imdb} target="_blank">
          More Details
        </a>
      </h5>
    </div>
  );
};

export default Movie;
