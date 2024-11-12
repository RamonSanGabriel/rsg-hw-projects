import React from 'react';
import { aboutMe } from '../../data/about';
import aboutImage from '../../images/about-2.png';
import css from './About.module.css';

const About = () => {
  const { position, description } = aboutMe;
  return (
    <div className={css.aboutContainer}>
      <img className={css.aboutImage} src={aboutImage} />
      <h2 className={css.position}>{position}</h2>
      <p>{description}</p>
    </div>
  );
};

export default About;
