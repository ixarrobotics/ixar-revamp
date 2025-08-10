import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import TeamPage from '../pages/TeamPage'
import ContactPage from '../pages/ContactPage'
import PartnerPage from '../pages/PartnerPage'
import styles from './NavbarWrapper.module.css'

// Product pages (simplified for now)
const ProductPage = () => (
  <div className={styles.pageContainer}>
    <div className={styles.pageContentWrapper}>
      <h1 className={styles.pageTitle}>ROV 1.0</h1>
      <div className={styles.pageCard}>
        <p className={styles.pageCardText}>
          Entry-level robotic solution for basic operations.
        </p>
      </div>
    </div>
  </div>
)

const ROVProPage = () => (
  <div className={styles.pageContainer}>
    <div className={styles.pageContentWrapper}>
      <h1 className={styles.pageTitle}>ROV Pro</h1>
      <div className={styles.pageCard}>
        <p className={styles.pageCardText}>
          Professional-grade ROV for advanced operations.
        </p>
      </div>
    </div>
  </div>
)

const ROV2Page = () => (
  <div className={styles.pageContainer}>
    <div className={styles.pageContentWrapper}>
      <h1 className={styles.pageTitle}>ROV2</h1>
      <div className={styles.pageCard}>
        <p className={styles.pageCardText}>
          Advanced autonomous robotic system.
        </p>
      </div>
    </div>
  </div>
)

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
  )
}

export default NavbarWrapper
