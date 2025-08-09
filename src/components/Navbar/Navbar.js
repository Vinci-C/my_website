import React from 'react';
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import './Navbar.css';

const AppNavbar = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAboutMeClick = (e) => {
    e.preventDefault(); // Prevent default dropdown toggle behavior
    navigate('/about'); // Navigate to /about
  };

  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown
            title="About Me"
            id="basic-nav-dropdown"
            onClick={handleAboutMeClick}
          >
            <NavDropdown.Item as={Link} to="/about#education">Education</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/about#achievements">Achievements</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/about#skills">Skills</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/about#experience">Experience</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        </Nav>
        <Form className="d-flex align-items-center ms-auto pe-3"> {/* Added pe-3 for padding */} 
          <Form.Check 
            type="switch"
            id="custom-switch"
            checked={theme === 'dark'}
            onChange={handleThemeToggle}
          />
          {/* Conditional rendering for icons */}
          {theme === 'light' ? (
            <FaSun size={20} className="text-primary ms-2" />
          ) : (
            <FaMoon size={20} className="text-primary ms-2" />
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
