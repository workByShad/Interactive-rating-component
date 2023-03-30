import Card from '../ui/Card';
import CardText from '../ui/CardText';
import SvgImage from '../ui/SvgImage';

import thankYouIcon from '../../assets/images/illustration-thank-you.svg';
import { TextContext } from '../../context/TextContext';
import { useContext } from 'react';
import YouSelected from '../YouSelected';

const ThankYouView = () => {
  const title = useContext(TextContext).thankYouStateText.title;
  const paragraph = useContext(TextContext).thankYouStateText.paragraph;

  return (
    <>
      <Card styleView={'thank-you'}>
        <SvgImage icon={thankYouIcon} />
        <YouSelected />
        <CardText
          title={title}
          paragraph={paragraph}
          classes={'paragraph__thank-you'}
        />
      </Card>
    </>
  );
};

export default ThankYouView;
