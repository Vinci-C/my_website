import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaUserGraduate, FaTrophy, FaTools, FaBriefcase } from 'react-icons/fa';
import Education from '../Education/Education';
import Achievements from '../Achievements/Achievements';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import './AboutMe.css'; // Import the new CSS file

const AboutMe = () => {
  return (
    <div className="main-content">
      <Container>
        <h1 className="text-center mb-5">About Me</h1>

        <Card className="mb-5">
          <Card.Body>
            <section id="education">
              <div className="text-center mb-4">
                <FaUserGraduate size={50} className="text-primary" />
              </div>
              <Education />
            </section>
          </Card.Body>
        </Card>

        <Card className="mb-5">
          <Card.Body>
            <section id="achievements">
              <div className="text-center mb-4">
                <FaTrophy size={50} className="text-primary" />
              </div>
              <Achievements />
            </section>
          </Card.Body>
        </Card>

        <Card className="mb-5">
          <Card.Body>
            <section id="skills">
              <div className="text-center mb-4">
                <FaTools size={50} className="text-primary" />
              </div>
              <Skills />
            </section>
          </Card.Body>
        </Card>

        <Card className="mb-5">
          <Card.Body>
            <section id="experience">
              <div className="text-center mb-4">
                <FaBriefcase size={50} className="text-primary" />
              </div>
              <Experience />
            </section>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AboutMe;
