import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/project/Project';
import Recomendation from './components/skills/Recomendation';
import Skills from './components/skills/Skills';
import WorkRadio from './components/work/WorkRadio';
import AboutPage from './pages/AboutPage';
import Award from './pages/Award';
import Contact from './pages/Cotact';
import Gallery from './pages/Garelly';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/radio" element={<WorkRadio />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/recomendation" element={<Recomendation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/award" element={<Award />} />






      </Routes>
    </Router>
  );
}

export default App;
