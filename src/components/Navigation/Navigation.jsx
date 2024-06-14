import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.acitve);
};

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink className={getLinkClass} to="/">
        Home
      </NavLink>

      <NavLink className={getLinkClass} to="/contacts">
        Phonebook
      </NavLink>
    </nav>
  );
}
