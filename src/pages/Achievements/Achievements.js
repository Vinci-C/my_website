import React from 'react';
import { Container } from 'react-bootstrap';

const Achievements = () => {
  return (
    <div className="main-content">
      <Container>
        <h2>Achievements</h2>
        <hr />
        <ul>
          <li>
            <h5>First Place at Example Hackathon</h5>
            <p>Developed a mobile app that solves a real-world problem in 24 hours.</p>
          </li>
          <li>
            <h5>Published a Research Paper</h5>
            <p>Co-authored a paper on the topic of machine learning, published in an esteemed journal.</p>
          </li>
          <li>
            <h5>Dean's List</h5>
            <p>Awarded for outstanding academic performance for three consecutive semesters.</p>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Achievements;