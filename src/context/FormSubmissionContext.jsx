import { createContext, useState } from 'react';

export const FormSubmissionContext = createContext();

export const FormSubmissionProvider = ({ children }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const formSubmissionHandler = () => {
    setIsFormSubmitted(true);
  };

  const contextValue = {
    isFormSubmitted,
    formSubmissionHandler,
  };

  return (
    <FormSubmissionContext.Provider value={contextValue}>
      {children}
    </FormSubmissionContext.Provider>
  );
};
