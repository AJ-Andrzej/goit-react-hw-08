import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/authOps';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
