import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WorkRadio from './components/work/WorkRadio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/radio" element={<WorkRadio />} />
      </Routes>
    </Router>
  );
}

export default App;
