import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import Projects from '../../components/Projects/Projects';

const ProjectPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Projects</title>
        </Helmet>
        <PageTitle title="" subtitle="Languages & Tools" />
      </HelmetProvider>
      <Projects />
    </div>
  );
};

export default ProjectPage;
