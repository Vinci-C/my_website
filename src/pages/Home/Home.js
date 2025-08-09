import React from 'react';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
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
              <h1>John Doe</h1>
              <p className="lead">Software Engineer | Web Developer | Tech Enthusiast</p>
              <p>
                I'm passionate about building innovative and user-friendly web applications.
                Explore my work and get to know more about my skills and experience.
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
                  My educational background has provided me with a strong foundation in computer science and software development.
                </p>
                <Button variant="primary" as={Link} to="/education">Learn More</Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="order-md-2">
                <Image src="https://picsum.photos/600/400?random=2" rounded fluid />
              </Col>
              <Col md={6} className="order-md-1">
                <h2>Projects</h2>
                <p>
                  I've worked on a variety of projects, from personal hobby projects to large-scale enterprise applications.
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
                <Image src="https://picsum.photos/600/400?random=3" rounded fluid />
              </Col>
              <Col md={6}>
                <h2>Experience</h2>
                <p>
                  I have a proven track record of success in the software development industry.
                </p>
                <Button variant="primary" as={Link} to="/experience">Learn More</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Home;