import "./css/App.css";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
