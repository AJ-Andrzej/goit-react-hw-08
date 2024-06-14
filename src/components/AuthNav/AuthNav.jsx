import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.acitve);
};

export default function AuthNav() {
  return (
    <nav className={css.navigation}>
      <NavLink className={getLinkClass} to="/register">
        Register
      </NavLink>

      <NavLink className={getLinkClass} to="/login">
        Log In
      </NavLink>
    </nav>
  );
}
