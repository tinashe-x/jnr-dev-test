import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, vote_average}) => (
    <div data-testid="movie-1" className = "movie">
        <img src={IMG_API + poster_path} alt = {title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
    </div>
);

export default Movie;