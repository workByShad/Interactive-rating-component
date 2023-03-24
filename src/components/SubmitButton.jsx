import { useContext } from 'react';
import { TextContext } from '../context/context';

const SubmitButton = () => {
  const submitButtonText =
    useContext(TextContext).ratingStateText.submitButtonText;

  return <button className="submit-button--styles">{submitButtonText}</button>;
};

export default SubmitButton;
