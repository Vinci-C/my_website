import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <div className="main-content">
      <Container>
        <h2>Projects</h2>
        <hr />
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A brief description of the first project. What it does, the technologies used, and your role.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Project Two</Card.Title>
                <Card.Text>
                  A brief description of the second project. What it does, the technologies used, and your role.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Project Three</Card.Title>
                <Card.Text>
                  A brief description of the third project. What it does, the technologies used, and your role.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;