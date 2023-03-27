import { useContext } from 'react';
import { TextContext } from '../context/context';

const CardText = (props) => {
  const title = useContext(TextContext).ratingStateText.title;

  const paragraph = useContext(TextContext).ratingStateText.paragraph;

  return (
    <div className="card-text--styles">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default CardText;
