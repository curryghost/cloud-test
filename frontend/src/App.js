import { useState } from 'react';
import './App.css';
import { Time } from './comps/Time';

function App() {
  const [isDisplay, setIsDisplay] = useState(false);

  const toggleHandler = () => {
    setIsDisplay(!isDisplay);
  }

  return (
    <div className='wrapper'>
      <h1>Hello World</h1>
      {isDisplay && <Time />}
      <button onClick={toggleHandler}>Show Time</button>
    </div>
  );
}

export default App;
