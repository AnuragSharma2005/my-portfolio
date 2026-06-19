import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BackgroundAnimations from "./components/BackgroundAnimations";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ExperienceDetail from './components/ExperienceDetail';

// Main portfolio single page
const MainPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return (
    <div className="relative">
      <BackgroundAnimations />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/experience/:id" element={<ExperienceDetail />} />
    </Routes>
  );
}

export default App;