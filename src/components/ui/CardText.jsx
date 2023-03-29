import { useContext } from 'react';
import { TextContext } from '../../context/context';
import './CardText.css';

const CardText = (props) => {
  const title = useContext(TextContext).ratingStateText.title;

  const paragraph = useContext(TextContext).ratingStateText.paragraph;

  return (
    <div>
      <h1>{title}</h1>
      <p className="paragraph__ratings paragraph__ratings--padding">
        {paragraph}
      </p>
    </div>
  );
};

export default CardText;
