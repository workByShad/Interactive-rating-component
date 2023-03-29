import { TextContext } from './context/context';
import RatingsView from './components/views/RatingsView';
import ThankYouView from './components/views/ThankYouView';
import text from './data/text';

function App() {
  return (
    <div className="div__container">
      <TextContext.Provider value={text}>
        <RatingsView />
        {/* <ThankYouView /> */}
      </TextContext.Provider>
    </div>
  );
}

export default App;
