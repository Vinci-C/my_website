import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h5>My Portfolio</h5>
            <p>© 2025 Your Name. All Rights Reserved.</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Connect With Me</h5>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={30} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub size={30} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter size={30} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;