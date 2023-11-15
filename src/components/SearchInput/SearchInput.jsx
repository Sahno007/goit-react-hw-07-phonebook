import { changeFilterValue, getFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const SearchInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <input
      onChange={({ target: { value } }) => dispatch(changeFilterValue(value))}
      value={filter}
    />
  );
};

export default SearchInput;