import css from './SearchBox.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {selectFilter, setFilter} from '../../redux/filtersSlice'


export default function SearchBox() {
    
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    return (
        <div className={css.box}>
            <label className={css.wrapper}>
                <span className={css.lable}>Find contacts by name</span>
                <input
                className={css.field}
                type="text"
                value={filter}
                onChange={(event) => dispatch(setFilter(event.target.value))} />
            </label>
            
        </div>
        
    )

}

