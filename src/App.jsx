import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ViraFlowPage from './pages/ViraFlowPage';
import ViraSocialPage from './pages/ViraSocialPage';
import ViraTimePage from './pages/ViraTimePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1E1B18] text-[#FAEDCD]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viraflow" element={<ViraFlowPage />} />
          <Route path="/virasocial" element={<ViraSocialPage />} />
          <Route path="/viratime" element={<ViraTimePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
