import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import PageButton from "./components/buttons/PageButton";
import Catalogue from "./pages/Catalogue";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";

function App() {
  return (
    <>
      <header>
        <div className="headerBar">
          <div className="logo">
            <img src="/favicon.svg" width="2rem" alt="" />
            <h1>EigaDex</h1>
          </div>
          <div className="pageNavigator">
            <PageButton title="Home" to="/" />
            <PageButton title="Catalogue" to="/catalogue" />
            <PageButton title="Dashboard" to="/dashboard" />
            <PageButton title="My Library" to="/my-library" />
          </div>
          <div className="searchButton"></div>
          <div className="userIcon">icon</div>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-library" element={<Library />} />
        </Routes>
      </main>
      <footer>
        <div className="footer">
          <small>&copy; 2026 EigaDex</small>
        </div>
      </footer>
    </>
  );
}

export default App;
