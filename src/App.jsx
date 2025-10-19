import BackgroundAnimations from "./components/BackgroundAnimations";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Startup from "./components/Startup";
import Skills from './components/Skills';
import Services from "./components/Services";
// import Achievements from './components/achievements';
// import Projects from './components/Projects';
import Experience from "./components/Experience";
import Contact from './components/Contact';
import Footer from './components/Footer';







function App() {
  return (
     <div className="relative ">
       
     <BackgroundAnimations />
      <Navbar />
      <Home />
      <About />
      <Startup />
      <Skills />
      <Services />
      {/* <Projects /> */}
      <Experience />
      {/* <Achievements />  */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;