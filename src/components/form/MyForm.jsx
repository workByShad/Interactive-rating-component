import { Form } from 'react-router-dom';
import RadioButtons from './RadioButtons';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(formData);
    // console.log(data);
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
