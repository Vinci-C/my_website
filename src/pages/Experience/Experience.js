
import React from 'react';
import { Container } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className="mt-5">
      <h2>Work Experience</h2>
      <hr />
      <div>
        <h4>Software Engineer at Example Corp</h4>
        <p>June 2024 - Present</p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Collaborated with cross-functional teams to deliver high-quality software products.</li>
          <li>Participated in code reviews and provided constructive feedback to peers.</li>
        </ul>
      </div>
      <div>
        <h4>Intern at Another Company</h4>
        <p>May 2023 - August 2023</p>
        <ul>
          <li>Assisted in the development of a new feature for the company's flagship product.</li>
          <li>Learned about software development best practices and agile methodologies.</li>
        </ul>
      </div>
    </Container>
  );
};

export default Experience;
