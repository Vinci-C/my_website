
import React from 'react';
import { Container, Button, Image, Row, Col, Card } from 'react-bootstrap';
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

      <div className="summary-section">
        <Container>
          <h2 className="text-center mb-5">A Glimpse Into My Journey</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Education</Card.Title>
                  <Card.Text>
                    A brief overview of my academic background and qualifications.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/education">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                  <Card.Text>
                    A collection of my most significant projects, showcasing my skills.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/projects">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Experience</Card.Title>
                  <Card.Text>
                    A summary of my professional experience and key responsibilities.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/experience">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
