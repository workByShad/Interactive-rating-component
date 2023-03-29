import Card from '../ui/Card';
import CardText from '../ui/CardText';
import RadioButtons from '../form/RadioButtons';
import SubmitButton from '../form/SubmitButton';
import SvgImage from '../ui/SvgImage';
import Form from '../form/Form';
import Circle from '../ui/Circle';

const RatingsView = () => {
  return (
    <>
      <Card styleView={'ratings'}>
        <Circle>
          <SvgImage />
        </Circle>
        <CardText />
        <Form />
      </Card>
    </>
  );
};

export default RatingsView;
