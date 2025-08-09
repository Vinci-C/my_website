import React from 'react';
import { Badge } from 'react-bootstrap';

const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
      <hr />
      <div>
        <h4>Programming Languages</h4>
        <p>
          <Badge variant="primary" className="mr-2">Python</Badge>
          <Badge variant="primary" className="mr-2">C++</Badge>
          <Badge variant="primary" className="mr-2">JavaScript</Badge>
        </p>
        <p className="text-muted mt-2">Completed Harvard's CS50 Introduction to Python online course.</p>
      </div>
      <div className="mt-4">
        <h4>Frameworks & Libraries</h4>
        <p>
          <Badge variant="secondary" className="mr-2">React</Badge>
          <Badge variant="secondary" className="mr-2">Bootstrap</Badge>
        </p>
      </div>
      <div className="mt-4">
        <h4>Other Skills</h4>
        <p>
          <Badge variant="success" className="mr-2">Problem Solving</Badge>
          <Badge variant="success" className="mr-2">Teamwork</Badge>
          <Badge variant="success" className="mr-2">Communication</Badge>
        </p>
      </div>
    </>
  );
};

export default Skills;