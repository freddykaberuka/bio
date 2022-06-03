import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/project/Project';
import WorkRadio from './components/work/WorkRadio';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Cotact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/radio" element={<WorkRadio />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />

      </Routes>
    </Router>
  );
}

export default App;
