import React from 'react';
import { Container, Button, Image, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center">
              <Image src="https://picsum.photos/200/200" roundedCircle className="profile-pic" />
            </Col>
            <Col md={8}>
              <h1>Vinci Chan</h1>
              <p className="lead">A-Level Student | Aspiring University Student</p>
              <p>
                I'm currently studying A-Levels and preparing for university. This website showcases my academic journey, skills, and projects.
              </p>
              <p>
                <Button variant="outline-light" as={Link} to="/projects">View My Work</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="alternating-sections">
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <Image src="https://picsum.photos/600/400?random=1" rounded fluid />
              </Col>
              <Col md={6}>
                <h2>Education</h2>
                <p>
                  My academic journey includes A-Levels at Warwick School (Biology, Maths, Physics) and secondary education at Po Leung Kuk Tang Yuk Tien College in Hong Kong.
                </p>
                <Button variant="primary" as={Link} to="/about#education">Learn More</Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="order-md-2">
                <Image src="https://warwickyouthcouncil.org.uk/wp-content/uploads/2024/08/Warwick-Youth-Council-Logo-Final.jpg" rounded fluid />
              </Col>
              <Col md={6} className="order-md-1">
                <h2>Projects</h2>
                <p>
                  I've developed a website for Warwick Youth Council and a charity website (WinTech), showcasing my web development skills.
                </p>
                <Button variant="primary" as={Link} to="/projects">Learn More</Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <Carousel controls={false} indicators={false} interval={3000} className="logo-carousel">
                  <Carousel.Item>
                    <img
                      className="d-block w-100 carousel-logo-img"
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0c/UKRI-Logo_Horiz-RGB.png"
                      alt="UKRI Logo"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 carousel-logo-img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1200px-Docker_%28container_engine%29_logo.svg.png"
                      alt="Docker Logo"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 carousel-logo-img"
                      src="https://logo.svgcdn.com/l/raspberry-pi.png"
                      alt="Raspberry Pi Logo"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={6}>
                <h2>Experience</h2>
                <p>
                  My experience includes an internship at UKRI's Rutherford Appleton Laboratory in their Cloud Computing Department.
                </p>
                <Button variant="primary" as={Link} to="/about#experience">Learn More</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Home;