import { Routes, Route } from 'react-router-dom';
import Button from './Button/Button';
// import NavLinks from './NavLinks/NavLinks';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import MovieSearch from '../pages/Homeworks/Javascript/MovieSearch';
import WebStudio from '../pages/Homeworks/Html/WebStudio/WebStudio';
import Homeworks from '../pages/Homeworks/Homeworks';
import Phonebook from '../pages/Homeworks/React/Phonebook';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="homeworks" element={<Homeworks />}>
          <Route path="webstudio" element={<WebStudio />} />
          <Route path="moviesearch" element={<MovieSearch />} />
          <Route path="phonebook" element={<Phonebook />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
