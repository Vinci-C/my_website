import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <div className="main-content">
      <Container>
        <h2>Projects</h2>
        <hr />
        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://warwickyouthcouncil.org.uk/wp-content/uploads/2024/08/Warwick-Youth-Council-Logo-Final.jpg" />
              <Card.Body>
                <Card.Title>Warwick Youth Council Website</Card.Title>
                <Card.Text>
                  Developed and launched the official website for Warwick Youth Council, enhancing their online presence and community engagement.
                  <br />
                  <strong>Technologies:</strong> HTML, CSS, JavaScript, Webflow
                </Card.Text>
                <Button variant="primary" href="https://warwickyouthcouncil.org.uk/" target="_blank" rel="noopener noreferrer">View Live</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Charity Website (WinTech)</Card.Title>
                <Card.Text>
                  Developed a responsive and user-friendly website for a charity in Hong Kong, focusing on information dissemination and donation facilitation.
                  <br />
                  <strong>Technologies:</strong> HTML, CSS, JavaScript, React
                </Card.Text>
                <Button variant="primary" href="https://github.com/GeekJC/WinTech" target="_blank" rel="noopener noreferrer">View on GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;