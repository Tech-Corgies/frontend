import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const useAction = actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useAction;
