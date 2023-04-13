import { Form } from 'react-router-dom';
import RadioButtons from './RadioButtons';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormSubmissionContext } from '../../context/FormSubmissionContext';

const MyForm = () => {
  const navigate = useNavigate();
  const { formSubmissionHandler } = useContext(FormSubmissionContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmissionHandler();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    navigate('/thank-you', { state: data });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <RadioButtons />
      <SubmitButton />
    </Form>
  );
};

export default MyForm;
