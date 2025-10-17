import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JokePage from "./components/JokePage";
import { LanguageProvider } from "./context/LanguageContext";
import "./styles/index.css";

function Layout() {
  const location = useLocation();
  const isJokePage = location.pathname === "/joke";

  return (
    <div className="app-wrapper">
      {!isJokePage && <Navbar />}

      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/joke" element={<JokePage />} />
        </Routes>
      </main>

      {!isJokePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout />
      </Router>
    </LanguageProvider>
  );
}

export default App;
