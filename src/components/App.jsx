import { Routes, Route } from 'react-router-dom';
// import Button from './Button/Button';
// import NavLinks from './NavLinks/NavLinks';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import MovieSearch from '../pages/ProjectPage/Javascript/MovieSearch';
import WebStudio from '../pages/ProjectPage/Html/WebStudio/WebStudio';

import Phonebook from '../pages/ProjectPage/React/Phonebook';
import ProjectPage from '../pages/ProjectPage/ProjectPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectPage />}>
          <Route path="webstudio" element={<WebStudio />} />
          <Route path="moviesearch" element={<MovieSearch />} />
          <Route path="phonebook" element={<Phonebook />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
