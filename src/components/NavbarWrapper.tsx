import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import TeamPage from '../pages/TeamPage';
import ContactPage from '../pages/ContactPage';
import PartnerPage from '../pages/PartnerPage';

// Product pages (simplified for now)
const ProductPage = () => (
  <div className="min-h-screen bg-gray-50 pt-8">
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">ROV 1.0</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-gray-600">Entry-level robotic solution for basic operations.</p>
      </div>
    </div>
  </div>
);

const ROVProPage = () => (
  <div className="min-h-screen bg-gray-50 pt-8">
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">ROV Pro</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-gray-600">Professional-grade ROV for advanced operations.</p>
      </div>
    </div>
  </div>
);

const ROV2Page = () => (
  <div className="min-h-screen bg-gray-50 pt-8">
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">ROV2</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-gray-600">Advanced autonomous robotic system.</p>
      </div>
    </div>
  </div>
);

const NavbarWrapper: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/rovpro" element={<ROVProPage />} />
        <Route path="/rov2" element={<ROV2Page />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partner" element={<PartnerPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default NavbarWrapper;