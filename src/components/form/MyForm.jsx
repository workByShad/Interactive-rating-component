import { Form } from 'react-router-dom';
import RadioButtons from './RadioButtons';
import SubmitButton from './SubmitButton';

const MyForm = () => {
  return (
    <Form>
      <RadioButtons />
      <SubmitButton />
    </Form>
  );
};

export default MyForm;
