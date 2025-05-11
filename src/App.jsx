import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements /> {/* yeh yaha add kar! */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;