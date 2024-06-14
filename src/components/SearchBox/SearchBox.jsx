import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { selectFilter } from '../../redux/filters/filtresSelectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <label className={css.wrapper}>
        <span className={css.lable}>Find contacts by name</span>
        <input
          className={css.field}
          type="text"
          value={filter}
          onChange={event => dispatch(setFilter(event.target.value))}
        />
      </label>
    </div>
  );
}
