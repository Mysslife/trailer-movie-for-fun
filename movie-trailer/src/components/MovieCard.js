function MovieCard({ movie, handleClickOnMovieCard }) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  return (
    <div onClick={(e) => handleClickOnMovieCard(movie)} className="movie-card">
      {movie.poster_path ? (
        <img
          className="movie-cover"
          src={`${IMAGE_PATH}/${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="movie-placeholder">No Image found</div>
      )}
      <h4 className="movie-title">{movie.title}</h4>
    </div>
  );
}

export default MovieCard;
