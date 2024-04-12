import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice'
import { selectNameFilter } from '../../selectors/selectors'


const SearchBox = () => { 
const dispatch = useDispatch()
const filter = useSelector(selectNameFilter)


    return (
   <div className={css.searchBox}>
    <label className={css.inputField}>
    <p className={css.boxHeader}>Find contacts</p>
    </label>
      <input className={css.boxInput} type="text" value={filter} onChange={(e) => dispatch(changeFilter(e.target.value))} placeholder=' Who are you looking for?'/>
  </div>
  );
};

export default SearchBox;