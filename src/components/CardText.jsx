import { useContext } from 'react';
import { TextContext } from '../context/context';

const CardText = (props) => {
  const title = useContext(TextContext).ratingStateText.title;

  const paragraph = useContext(TextContext).ratingStateText.paragraph;

  return (
    <>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </>
  );
};

export default CardText;
