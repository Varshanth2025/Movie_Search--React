function MovieCard({ movie }) {
  function Favorite() {
    alert("clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.image} alt={movie.title} />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={Favorite}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
export default MovieCard;
