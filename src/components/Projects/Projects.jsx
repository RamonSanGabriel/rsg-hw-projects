import { Outlet } from 'react-router-dom';
import HomeworkLists from './HomeworkLists/HomeworkLists';
import css from './Projects.module.css';
import { projects } from '../../data/projects';
import ProjectImages from './ProjectImages/ProjectImages';

const Projects = () => {
  return (
    <div className={css.projectsContainer}>
      <HomeworkLists />
      <Outlet />
      <div className={css.projects}>
        {projects.map(({ id, title, src, href }) => (
          <ProjectImages key={id} title={title} src={src} href={href} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
