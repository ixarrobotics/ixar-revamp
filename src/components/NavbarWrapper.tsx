import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductPage from './ProductPage'
import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import TeamPage from '../pages/TeamPage'
import ContactPage from '../pages/ContactPage'
import PartnerPage from '../pages/PartnerPage'
import OurSolutions from '../pages/OurSolutions'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Product page variants
const ROV1Page: React.FC = () => (
  <ProductPage
    title="ROV 1.0"
    description="Entry-level robotic solution for basic operations."
  />
);

const ROVProPage: React.FC = () => (
  <ProductPage
    title="ROV Pro"
    description="Professional-grade ROV for advanced operations."
  />
);

const ROV2Page: React.FC = () => (
  <ProductPage
    title="ROV2"
    description="Advanced autonomous robotic system."
  />
);

const NavbarWrapper: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/product" element={<ROV1Page />} />
        <Route path="/rovpro" element={<ROVProPage />} />
        <Route path="/rov2" element={<ROV2Page />} />
        <Route path="/solutions" element={<OurSolutions />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partner" element={<PartnerPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default NavbarWrapper
