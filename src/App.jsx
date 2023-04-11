import { TextContext } from './context/TextContext';
import RatingsView from './components/views/RatingsView';
import ThankYouView from './components/views/ThankYouView';
import text from './data/text';
import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RatingsView />} />
      <Route path="/thank-you" element={<ThankYouView />} />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  )
);

function App() {
  return (
    <div className="div__container">
      <TextContext.Provider value={text}>
        <RouterProvider router={router} />
      </TextContext.Provider>
    </div>
  );
}

export default App;
