import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

import { toast } from 'react-hot-toast';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut())
      .then(() => {
        toast.success('Success logOut!!!');
      })
      .catch(() => {
        toast.success('try again!!!!');
      });
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.buttonLogout} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
