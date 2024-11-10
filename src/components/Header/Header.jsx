import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Homepage
        </NavLink>
        <NavLink
          to="about"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          About Me
        </NavLink>
        <NavLink
          to="homeworks"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Homeworks
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
