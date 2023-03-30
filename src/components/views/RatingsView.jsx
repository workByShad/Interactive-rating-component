import Card from '../ui/Card';
import CardText from '../ui/CardText';
import SvgImage from '../ui/SvgImage';
import Form from '../form/Form';
import Circle from '../ui/Circle';
import starIcon from '../../assets/images/icon-star.svg';
import { useContext } from 'react';
import { TextContext } from '../../context/TextContext';

const RatingsView = () => {
  const title = useContext(TextContext).ratingStateText.title;
  const paragraph = useContext(TextContext).ratingStateText.paragraph;

  return (
    <Card styleView={'ratings'}>
      <Circle>
        <SvgImage icon={starIcon} />
      </Circle>
      <CardText
        title={title}
        paragraph={paragraph}
        classes={'paragraph__ratings'}
      />
      <Form />
    </Card>
  );
};

export default RatingsView;
