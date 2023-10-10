import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import DogWalk from './components/DogWalk';
import './index.css';
// import { Experience } from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <div className="App bg-cover font-sans">      
        <NavBar />
        <Intro />
        <TechStack />
        <Experience />
        <Projects />
        <DogWalk/>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
