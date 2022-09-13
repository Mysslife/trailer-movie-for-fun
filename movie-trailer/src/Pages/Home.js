import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
  const API_URL = "https://api.themoviedb.org/3";

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: "775bb765d8690e3527a89a6aee9f30e0",
      },
    });

    setMovies(results);
    setPlayTrailer(false);
    fetchSingleMovie(results[1].id);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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
