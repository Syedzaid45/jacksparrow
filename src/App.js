import Nav from './Nav';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import React  from 'react';
// import Flip from 'react-reveal/Flip';
function App() {
  return (
    <div className='items-center'>
        {/* <Flip left>
          <h1>React Reveal</h1>
        </Flip> */}
      <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
