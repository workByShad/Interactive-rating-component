import { TextContext } from './context/TextContext';

import RatingsView from './components/views/RatingsView';
import ThankYouView from './components/views/ThankYouView';
import text from './data/text';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { useContext } from 'react';
import { FormSubmissionContext } from './context/FormSubmissionContext';

function App() {
  const { isFormSubmitted } = useContext(FormSubmissionContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RatingsView />} />
        <Route
          path="/thank-you"
          element={isFormSubmitted ? <ThankYouView /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    )
  );

  return (
    <div className="div__container">
      <TextContext.Provider value={text}>
        <RouterProvider router={router} />
      </TextContext.Provider>
    </div>
  );
}

export default App;
