import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.acitve);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <NavLink className={getLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getLinkClass} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
