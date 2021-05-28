import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [latestMovies, setLatestMovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=679c414191058aa97a3f1ce1cd0f7bd9&language=en-US&page=1"
      )
      .then((result) => {
        console.log(result.data.results);
        setLatestMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let latestMoviesDiv = latestMovies ? (
    <>
      <h2>Latest Movies</h2>
      <div id="latest-movies">
        {latestMovies.map((movie) => {
          return (
            <div className="latest-movie">
              <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <h4>{movie.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  ) : null;
  return <div className="App">{latestMoviesDiv}</div>;
};

export default App;
