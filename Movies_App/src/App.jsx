import "./App.css";
import MovieCard from "./components/moviecard";

function App() {
  let movienumber = 2;
  return (
    <>
      {movienumber == 1 ? (
        <MovieCard movie={{ title: "Batman", release_date: "12-12-2025" }} />
      ) : (
        <MovieCard movie={{ title: "kingdom", release_date: "31-07-25" }} />
      )}
    </>
  );
}

export default App;
