import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import "./App.css"

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
            <div>Home</div>
            <div>Catalogue</div>
            <div>Catalogue</div>
            <div>My Library</div>
          </div>
          <div className="searchButton"></div>
          <div className="userIcon">icon</div>
        </div>
      </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      <footer>
      <div className="footer">
        <small>&copy; 2026 EigaDex</small>
      </div>
      </footer>
    </>
  )
}

export default App