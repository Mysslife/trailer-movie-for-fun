import YouTube from "react-youtube";

function Hero({
  IMAGE_PATH,
  selectedMovie,
  playTrailer,
  setPlayTrailer,
  handlePlayTrailer,
}) {
  const renderTrailer = () => {
    const trailer = selectedMovie.videos.results.find((vid) => {
      console.log(vid);

      return (
        vid.name === "Official Trailer 3" ||
        "Official Trailer 2" ||
        "Official Trailer 1" ||
        "Official Trailer " ||
        "Trailer" ||
        "Teaser Trailer"
      );
    });

    return (
      <>
        {trailer ? (
          <YouTube
            videoId={trailer.key}
            className="youtube-container"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        ) : (
          <h1>No Trailer Available</h1>
        )}
      </>
    );
  };

  return (
    <div
      className="hero max-center"
      style={{
        backgroundImage: `url(${IMAGE_PATH}/${selectedMovie.backdrop_path})`,
      }}
    >
      <div className="hero-content max-center">
        {playTrailer ? (
          <button
            className="hero-button btn-close"
            onClick={() => {
              setPlayTrailer(false);
            }}
          >
            Close
          </button>
        ) : null}
        {selectedMovie.videos && playTrailer ? renderTrailer() : null}

        {/* Selected Movie Hero display */}
        <button onClick={handlePlayTrailer} className="hero-button">
          Play Trailer
        </button>
        <h1 className="hero-title">{selectedMovie.title}</h1>
        {selectedMovie.overview ? (
          <p className="hero-overview">{selectedMovie.overview}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Hero;
