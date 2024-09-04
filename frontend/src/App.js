import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Model1 from './components/Model1';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-center space-x-4">
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model1" element={<Model1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
