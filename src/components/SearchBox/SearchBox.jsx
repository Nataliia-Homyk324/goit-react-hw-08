import { changeFilter } from '../../redux/contacts/filtersSlice';
import { selectNameFilter } from '../../redux/contacts/selectors';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.inputText}>Find contacts by name</p>
      <input
        className={css.formInput}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
