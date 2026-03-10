import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid topbar bg-light py-2 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Breadcrumb or additional info can go here */}
            </div>
            <div className="col-lg-6 text-end">
              <div className="d-inline-flex align-items-center">
                <i className="far fa-envelope text-primary me-2"></i>
                <span className="text-secondary">race@mafcarrefour.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Header */}
      <div className="container-fluid brand-header py-4 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center text-lg-start">
              <Link to="/" className="d-flex align-items-center justify-content-center justify-content-lg-start text-decoration-none">
                <img 
                  src="/img/logo_carr2.png" 
                  alt="RACE.AI Logo" 
                  className="brand-logo"
                  style={{ width: '50px', height: '50px', marginRight: '12px' }}
                />
                <h1 className="fw-bold text-primary m-0 brand-title">
                  RACE.AI <span className="d-none d-lg-inline">- Retail Analytics Center Of Excellence</span>
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-dark sticky-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-brand d-lg-none">MENU</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Expertise</NavLink>
              </li>
              
              {/* Quick Links Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Quick Links
                </a>
                <ul className="dropdown-menu">
                  {/* Business Insights */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Business Insights <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/insights/analysis" className="dropdown-item">Insight Analysis</Link></li>
                      <li><Link to="/insights/boycott" className="dropdown-item">Boycott Analysis</Link></li>
                    </ul>
                  </li>

                  {/* Customer Value Management */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Customer Value Management <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/customer/segmentation" className="dropdown-item">Customer Segmentation</Link></li>
                      <li><Link to="/customer/360" className="dropdown-item">Dashboard Customer 360</Link></li>
                      <li><Link to="/customer/campaign" className="dropdown-item">Campaign Dashboard</Link></li>
                    </ul>
                  </li>

                  {/* HR & Sustainability */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Human Resource & Sustainability <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/hr/analytics" className="dropdown-item">Human Capital Analytics</Link></li>
                      <li><Link to="/hr/experience" className="dropdown-item">Customer Experience</Link></li>
                    </ul>
                  </li>

                  {/* Negotiation Analytics */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Negotiation Analytics <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/negotiation/supplier" className="dropdown-item">Supplier Negotiation</Link></li>
                      <li><Link to="/negotiation/gap" className="dropdown-item">Negotiation Gap Analysis</Link></li>
                      <li><Link to="/negotiation/commodity" className="dropdown-item">Commodity Analysis</Link></li>
                    </ul>
                  </li>

                  {/* Category Optimization */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Category Optimization <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/category/roles" className="dropdown-item">Category Roles</Link></li>
                      <li><Link to="/category/localization" className="dropdown-item">Localization</Link></li>
                      <li><Link to="/category/rationalization" className="dropdown-item">Rationalization</Link></li>
                      <li><Link to="/category/decision-tree" className="dropdown-item">Customer Decision Tree (CDT)</Link></li>
                    </ul>
                  </li>

                  {/* Pricing & Promotion */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Pricing & Promotion <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/promotion" className="dropdown-item">Pricing & Promotion Effectiveness</Link></li>
                    </ul>
                  </li>

                  {/* Sustainability */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Sustainability <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/sustainability" className="dropdown-item">Sustainability</Link></li>
                    </ul>
                  </li>

                  {/* RACE GPT */}
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      RACE GPT <i className="bi bi-chevron-right ms-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/race-gpt" className="dropdown-item">RACE GPT</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
