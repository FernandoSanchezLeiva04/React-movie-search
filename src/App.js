import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchBox from "./SearchBox";

import "./App.css";

const apiKey = "b2ac5c53";
const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTitle);
  }, [searchTitle]);

  return (
    <div className="app">
      <h1>Movie Searcher App</h1>

      <SearchBox
        searchTitle={searchTitle}
        searchMovies={searchMovies}
        setSearchTitle={setSearchTitle}
      />

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          {searchTitle.length > 0 ? (
            <h2>No movies found!</h2>
          ) : (
            <h2>Please start by typing a movie you like!</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
