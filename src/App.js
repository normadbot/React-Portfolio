
import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import GoogleMaps from './components/GoogleMaps';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Projects/>
        <GoogleMaps/>
        <AboutMe/>
        <Footer/>
    </div>
  );
}

export default App;
