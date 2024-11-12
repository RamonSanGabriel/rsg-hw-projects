import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeworkLists from './HomeworkLists/HomeworkLists';
import css from './Projects.module.css';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <div className={css.projectsContainer}>
      <HomeworkLists />
      <Outlet />
      <div className={css.projects}>
        {projects.map(({ id, src, title, href }) => (
          <li key={id}>
            <img src={src} alt={title} width={260} height={240} />
            <a href={href} target="_blank" rel="noreferrer">
              {title}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Projects;
