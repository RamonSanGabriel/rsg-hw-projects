import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useToggle } from '../../hooks/useToggle';
import { MdOutlineMenu } from 'react-icons/md';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);
  return (
    <header>
      <nav className={css.headerNav}>
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
          About
        </NavLink>

        <NavLink
          to="homeworks"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Homeworks
        </NavLink>

        <MdOutlineMenu
          className={`${css.hamburgerIcon} ${
            isSidebarOpen && css.visuallyHidden
          }`}
          onClick={toggleSidebar}
        />
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </nav>
    </header>
  );
};

export default Header;
