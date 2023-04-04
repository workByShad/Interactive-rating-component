import { TextContext } from './context/TextContext';
import RatingsView from './components/views/RatingsView';
import ThankYouView from './components/views/ThankYouView';
import text from './data/text';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from './components/views/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RatingsView />} />
      <Route path="/thank-you" element={<ThankYouView />} />
      <Route path="*" element={<ErrorPage />} />
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
