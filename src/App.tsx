// App.tsx
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import DogWalk from './components/DogWalk';
import WakeUp from './components/wakeUp';
import './index.css';
// import { Experience } from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <WakeUp />
    <Router>
      <div className="App bg-slate-300 text-gray-800 font-sans">      
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
