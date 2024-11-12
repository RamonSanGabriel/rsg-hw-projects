import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeworkLists from './HomeworkLists/HomeworkLists';
import css from './Projects.module.css';

const Projects = () => {
  return (
    <div className={css.projectsContainer}>
      <HomeworkLists />
      <Outlet />
    </div>
  );
};

export default Projects;
