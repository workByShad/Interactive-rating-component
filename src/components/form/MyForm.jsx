import { Form } from 'react-router-dom';
import RadioButtons from './RadioButtons';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';

const MyForm = ({ setIsFormSubmitted }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
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
