import Card from './components/Card';

function App() {
  const text = (
    <>
      <p>
        -- Rating state start --{' '}
        <>
          How did we do? Please let us know how we did with your support
          request. All feedback is appreciated to help us improve our offering!
          1 2 3 4 5 Submit
        </>
        -- Rating state end --
      </p>
      <p>
        --Thank you state start --
        <>
          You selected -- Add rating here -- out of 5 Thank you! We appreciate
          you taking the time to give a rating. If you ever need more support,
          don't hesitate to get in touch!
        </>
        -- Thank you state end --
      </p>
    </>
  );

  return (
    <div className="div__container div__container--border">
      <Card />
    </div>
  );
}

export default App;
