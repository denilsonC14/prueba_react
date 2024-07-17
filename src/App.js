import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Analytics />
          <Newsletter />
          <Cards />
          <Footer />
        </>} />
        <Route path="/gallery" element={<>
          <Gallery />
          <Footer />
        </>} />
        <Route path="/contact" element={<>
          <Contact />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
