/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";
import { useParams } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);

  const params = useParams();
  console.log(params);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
  const API_URL = "https://api.themoviedb.org/3";

  const fetchMovies = async (movie) => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: "775bb765d8690e3527a89a6aee9f30e0",
        query: movie,
      },
    });

    setMovies(results);
    fetchSingleMovie(results[1].id);
  };

  useEffect(() => {
    fetchMovies(params.movie);
  }, [params.movie]);

  const fetchSingleMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: "775bb765d8690e3527a89a6aee9f30e0",
        append_to_response: "videos",
      },
    });

    setSelectedMovie(data);
  };

  const handleClickOnMovieCard = (movie) => {
    if (movie) {
      setPlayTrailer(false);
      fetchSingleMovie(movie.id);
    }
  };

  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <MovieCard
          handleClickOnMovieCard={handleClickOnMovieCard}
          key={movie.id}
          movie={movie}
        />
      );
    });
  };

  const handlePlayTrailer = () => {
    setPlayTrailer(true);
  };

  return (
    <div className="App">
      <Hero
        IMAGE_PATH={IMAGE_PATH}
        selectedMovie={selectedMovie}
        playTrailer={playTrailer}
        setPlayTrailer={setPlayTrailer}
        handlePlayTrailer={handlePlayTrailer}
      />

      <div className="container max-center">{renderMovies()}</div>
    </div>
  );
}

export default Home;
