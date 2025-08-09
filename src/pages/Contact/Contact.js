import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div className="main-content">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">Contact Me</h2>
            <p className="text-center mb-5">
              Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
            </p>
            <Form>
              <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formGroupMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;