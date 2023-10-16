import React, { useState, useEffect } from "react";
import axios from "axios";
import "./entertainment.css";
import { useNavigate } from "react-router-dom";

const API_KEY = "cd6fd98c24f066867008616e8cafaeb4"; // Replace with your TMDb API key
const API_URL = "https://api.themoviedb.org/3";

const Entertainment = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const categoryData = JSON.parse(localStorage.getItem("selectedCategories"));
  const categories = [
    "action",
    "drama",
    "romance",
    "thriller",
    "western",
    "horror",
    "fantasy",
    "music",
    "fiction",
  ];
  const selectedCategoryNames = categoryData.map((index) => categories[index]);

  useEffect(() => {
    const fetchMoviesByGenres = async () => {
      try {
        const movies = [];

        for (const genreName of selectedCategoryNames) {
          // Fetch movies by genre from TMDb (you need a TMDb API key for this)
          const response = await axios.get(`${API_URL}/discover/movie`, {
            params: {
              api_key: API_KEY,
              with_genres: genreName,
              language: "en-US",
              page: 2,
            },
          });

          if (response.data.results) {
            movies.push(...response.data.results);
          }
        }

        setMovies(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMoviesByGenres();
  }, [selectedCategoryNames]);

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="entertainment">
      <div className="enterNav">
        <h3 className="enterTitle">Super App</h3>
        <img
          onClick={goBack}
          className="enterLogo"
          src="./userLogo.png"
          alt="userLogo"
        />
      </div>
      <h4 className="enterhead">Entertainment according to your choice</h4>
      {selectedCategoryNames.map((genreName) => (
        <div key={genreName} className="enterMain">
          <h3 className="genre">{genreName}</h3>
          <div className="enterImagesDiv">
            {movies
              .filter((movie) =>
                movie.genre_ids.includes(genreIdForGenreName(genreName))
              )
              .map((movie) => (
                <div key={movie.id} className="enterImagesdiv">
                  <img
                    className="enterImages"
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const genreIdForGenreName = (genreName) => {
  // Map genre names to genre IDs based on your TMDb genre list
  const genreMap = {
    action: 28,
    drama: 18,
    romance: 10749,
    thriller: 53,
    western: 37,
    horror: 27,
    fantasy: 14,
    music: 10402,
    fiction: 878,
  };

  return genreMap[genreName];
};

export default Entertainment;
