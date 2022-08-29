import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Volunteering from './components/Volunteering';
import Music from './components/Music';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/Scrolltop';

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
            <Route path="/portfolio" element={<Home />}></Route>
            <Route path="/portfolio/work" element={<Work />}></Route>
            <Route path="/portfolio/fun/volunteering" element={<Volunteering />}></Route>
            <Route path="/portfolio/fun/music" element={<Music />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}