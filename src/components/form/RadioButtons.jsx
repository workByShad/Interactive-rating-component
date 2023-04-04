import './RadioButtons.css';
import { useContext } from 'react';
import { TextContext } from '../../context/TextContext';

const RadioButtons = () => {
  const numOfRadioButtons =
    useContext(TextContext).ratingStateText.numOfRadioButtons;

  return (
    <div className="radio__container">
      {numOfRadioButtons.map((radioButtonNumber) => (
        <div key={radioButtonNumber}>
          <input type="radio" name="rating" id={radioButtonNumber} />
          <label htmlFor={radioButtonNumber}>{radioButtonNumber}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
