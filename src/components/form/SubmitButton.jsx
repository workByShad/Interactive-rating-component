import './SubmitButton.css';
import { useContext } from 'react';
import { TextContext } from '../../context/TextContext';
import { Link } from 'react-router-dom';

const SubmitButton = () => {
  const submitButtonText =
    useContext(TextContext).ratingStateText.submitButtonText;

  return (
    // <Link to={'thank-you'} className="link">
    <button className="submit-button--styles" type="submit">
      {submitButtonText}
    </button>
    // </Link>
  );
};

export default SubmitButton;
