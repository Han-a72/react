import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setData(response.data.results);
      } catch (err) {
        setError(
          err.response?.status === 404
            ? "Data not found. Please check the API endpoint."
            : "Failed to fetch data. Please try again later."
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App container">
      <h1 className="text-center my-4">React API Project</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control mx-auto"
          style={{ maxWidth: "400px" }}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row">
        {!loading &&
          filteredData.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || "No Title"}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title || "No Title"}</h5>
                  <p className="card-text">
                    {item.overview || "No Description Available"}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {!loading && filteredData.length === 0 && !error && (
        <p className="text-center">No results found.</p>
      )}
    </div>
  );
};

export default App;
