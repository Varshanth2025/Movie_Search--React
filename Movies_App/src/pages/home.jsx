import MovieCard from "../components/moviecard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "interstellar", release_date: "2013" },
    { id: 2, title: "good fellas ", release_date: "1993" },
    { id: 3, title: "The fight clud ", release_date: "1999" },
    { id: 4, title: "Terminator", release_date: "1991" },
    { id: 5, title: "ghosted", release_date: "2023" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="enter the movie name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
