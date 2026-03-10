import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-fluid bg-dark text-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-item">
                <h4 className="text-white fw-bold mb-4">
                  <i className="fa fa-laptop-code me-3"></i>RACE.AI
                </h4>
                <p className="mb-3">
                  Retail Analytics Center Of Excellence - Empowering retail businesses 
                  with advanced analytics and AI-driven insights for better decision-making.
                </p>
                <div className="d-flex">
                  <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light rounded-circle" href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-item">
                <h4 className="text-white fw-bold mb-4">Quick Links</h4>
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/services" className="footer-link">Expertise</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <Link to="/race-gpt" className="footer-link">RACE GPT</Link>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-white fw-bold mb-4">Our Solutions</h4>
                <Link to="/customer/segmentation" className="footer-link">Customer Analytics</Link>
                <Link to="/negotiation/supplier" className="footer-link">Negotiation Analytics</Link>
                <Link to="/category/roles" className="footer-link">Category Optimization</Link>
                <Link to="/promotion" className="footer-link">Promotion Effectiveness</Link>
                <Link to="/sustainability" className="footer-link">Sustainability</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-white fw-bold mb-4">Contact Us</h4>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-map-marker-alt text-primary me-3 mt-1"></i>
                  <p className="mb-0">MAF Carrefour<br/>UAE</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-envelope text-primary me-3"></i>
                  <p className="mb-0">race@mafcarrefour.com</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa fa-phone-alt text-primary me-3"></i>
                  <p className="mb-0">+971 XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright bg-darker py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <span className="text-light">
                © {currentYear} <Link to="/" className="text-primary">RACE.AI</Link>. All Rights Reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span className="text-light">
                Powered by <span className="text-primary">MAF Carrefour</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
