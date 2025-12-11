import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../Utils/Requests";
import axios from "../../Utils/Axios";

function Banner() {
  const [movie, setMovie] = useState(null); // start with null

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);

        console.log("API response:", request.data); // log full API response

        const movies = request.data.results;
        if (movies.length > 0) {
          const randomMovie = movies[Math.floor(Math.random() * movies.length)];
          setMovie(randomMovie);
          console.log("Selected movie:", randomMovie); // log the selected movie
        }
      } catch (error) {
        console.log("API error:", error);
      }
    })();
  }, []);

  // safer truncate function
  function truncate(str, n) {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  if (!movie) return null; // show nothing while loading

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie.backdrop_path
          ? `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
          : "url('/fallback-image.jpg')", // optional fallback
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name || "No Title"}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;
