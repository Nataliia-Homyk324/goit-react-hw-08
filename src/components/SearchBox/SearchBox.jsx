import { changeFilter } from '../../redux/filters/filtersSlice';
import { selectNameFilter } from '../../redux/filters/selectFilters';
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
