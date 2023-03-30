import './SubmitButton.css';
import { useContext } from 'react';
import { TextContext } from '../../context/TextContext';

const SubmitButton = () => {
  const submitButtonText =
    useContext(TextContext).ratingStateText.submitButtonText;

  return (
    <button className="submit-button--styles" type="button">
      {submitButtonText}
    </button>
  );
};

export default SubmitButton;
