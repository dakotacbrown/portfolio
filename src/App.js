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
            <Route path="/" element={<Home />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/fun/volunteering" element={<Volunteering />}></Route>
            <Route path="/fun/music" element={<Music />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}