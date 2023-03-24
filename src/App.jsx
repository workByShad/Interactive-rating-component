import { useContext } from 'react';
import { TextContext } from './context/context';
import Card from './components/Card';
import CardText from './components/CardText';
import RadioButtons from './components/RadioButtons';
import SubmitButton from './components/SubmitButton';
import SvgImage from './components/SvgImage';
import Form from './components/Form';

function App() {
  const text = {
    ratingStateText: {
      title: 'How did we do?',
      paragraph:
        'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!',
      numOfRadioButtons: [1, 2, 3, 4, 5],
      submitButtonText: 'SUBMIT',
    },
    thankYouStateText: {
      title: 'Thank you!',
      paragraph: `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`,
      youSelectedText: 'You selected -- Add rating here -- out of 5',
    },
  };

  return (
    <div className="div__container div__container--styles">
      <TextContext.Provider value={text}>
        <Card>
          <SvgImage />
          <CardText />
          <RadioButtons />
          <SubmitButton />
        </Card>
        {/* <Card>
          <Form />
        </Card> */}
      </TextContext.Provider>
    </div>
  );
}

export default App;
