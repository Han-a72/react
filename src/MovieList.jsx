import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    console.log("Searching for:", searchQuery);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=67ee1a10024ec3ef0d79f99f1ea636da&query=${searchQuery}`
      )

      .then((response) => {
        console.log("API Response:", response.data);
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>Movie Search</h1>

      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} style={{ marginBottom: "20px" }}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>

              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "200px", height: "300px" }}
                />
              )}
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
