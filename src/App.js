import React, { useEffect, useState} from "react";
import Movie from "./Components/Movie"; 


const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {

  const [movies, setMovies ] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  useEffect(() => {
    fetch(FEATURED_API)
     .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

const handleOnSubmit = (e) => {
  e.preventDefault();

  fetch(SEARCH_API  + searchTerm)
     .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
};

const handleOnChange = (e) => {
  setsearchTerm(e.target.value);
}

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
        <input className="Search" type="text" placeholder="search..." value={searchTerm} onChange={handleOnChange}></input>
        </form>
      </header>
      <div className="movie-container">
          {movies.length > 0 && movies.map((movie) => <Movie key ={movie.id} {...movie} />)}
      </div>
    </>
  );
  
  
}

export default App;