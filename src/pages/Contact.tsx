import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ContactFormData } from '@/types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - RACE.AI</title>
        <meta name="description" content="Get in touch with RACE.AI for your retail analytics needs" />
      </Helmet>

      {/* Page Header */}
      <section className="hero py-5">
        <div className="container">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
            <p className="lead">We'd love to hear from you</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <motion.div 
              className="col-lg-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="mb-4">Get In Touch</h3>
              
              <div className="contact-info-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="icon-box me-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h5>Office Location</h5>
                    <p className="text-secondary">
                      MAF Carrefour<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-info-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="icon-box me-3">
                    <i className="fas fa-envelope fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h5>Email Us</h5>
                    <p className="text-secondary">
                      <a href="mailto:race@mafcarrefour.com" className="text-decoration-none text-secondary">
                        race@mafcarrefour.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-info-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="icon-box me-3">
                    <i className="fas fa-phone fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h5>Call Us</h5>
                    <p className="text-secondary">+971 XXX XXXX</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <h5 className="mb-3">Follow Us</h5>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-outline-primary btn-square" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-square" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-square" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-square" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="col-lg-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="card shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4">Send Us A Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Message"
                            style={{ height: '150px' }}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary px-5 py-3">
                          Send Message <i className="fas fa-paper-plane ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
