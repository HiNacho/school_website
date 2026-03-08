import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Academics } from './pages/Academics';
import { StudentLife } from './pages/StudentLife';
import { News } from './pages/News';
import { Portal } from './pages/Portal';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portal" element={<Portal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
