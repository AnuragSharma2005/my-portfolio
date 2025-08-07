import BackgroundAnimations from "./components/BackgroundAnimations";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from "./components/Services";
// import Achievements from './components/achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';







function App() {
  return (
     <div className="relative ">
       
     <BackgroundAnimations />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      {/* <Achievements />  */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;