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
import { useState } from 'react';

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<RatingsView setIsFormSubmitted={setIsFormSubmitted} />}
        />
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
