import React from 'react';
import { aboutMe } from '../../data/about';
import aboutImage from '../../images/about-2.png';

const About = () => {
  const { position, description } = aboutMe;
  return (
    <div>
      <img src={aboutImage} />
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  );
};

export default About;
