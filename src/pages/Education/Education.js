import React from 'react';
import { Container } from 'react-bootstrap';

const Education = () => {
  return (
    <div className="main-content">
      <Container>
        <h2>Education</h2>
        <hr />
        <div>
          <h4>University of Example</h4>
          <p>Master of Science in Computer Science, 2022 - 2024</p>
          <ul>
            <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Databases</li>
            <li>GPA: 3.8/4.0</li>
          </ul>
        </div>
        <div>
          <h4>University of Example</h4>
          <p>Bachelor of Science in Computer Science, 2018 - 2022</p>
          <ul>
            <li>Relevant Coursework: Introduction to Programming, Object-Oriented Design</li>
            <li>GPA: 3.6/4.0</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Education;