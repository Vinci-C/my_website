import React from 'react';
import { Container, Badge } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className="main-content">
      <Container>
        <h2>Skills</h2>
        <hr />
        <div>
          <h4>Programming Languages</h4>
          <p>
            <Badge variant="primary" className="mr-2">JavaScript</Badge>
            <Badge variant="primary" className="mr-2">Python</Badge>
            <Badge variant="primary" className="mr-2">Java</Badge>
            <Badge variant="primary" className="mr-2">C++</Badge>
          </p>
        </div>
        <div>
          <h4>Frameworks & Libraries</h4>
          <p>
            <Badge variant="secondary" className="mr-2">React</Badge>
            <Badge variant="secondary" className="mr-2">Node.js</Badge>
            <Badge variant="secondary" className="mr-2">Express</Badge>
            <Badge variant="secondary" className="mr-2">Bootstrap</Badge>
          </p>
        </div>
        <div>
          <h4>Databases</h4>
          <p>
            <Badge variant="success" className="mr-2">MongoDB</Badge>
            <Badge variant="success" className="mr-2">MySQL</Badge>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Skills;