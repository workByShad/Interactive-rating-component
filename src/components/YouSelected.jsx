import { useLocation } from 'react-router-dom';
import './YouSelected.css';

const YouSelected = () => {
  const { state } = useLocation();

  return (
    <div className="you-selected">You Selected {state.rating} out of 5</div>
  );
};

export default YouSelected;
