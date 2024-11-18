import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Assignment from './Assignment';
import Home from './Home';
import Features from './Features';
import Enterprise from './Enterprise';
import Support from './Support';

function App() {
  return (
    <Router>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/features" element={<Features />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
