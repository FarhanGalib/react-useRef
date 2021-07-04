import './App.css';
import { useEffect, useRef } from 'react';
import Input from './components/Input';
import Time from './components/Time';

function App() {

  const inputRef = useRef(null);

  useEffect(() => {

    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      {/* <input type="text" ref={inputRef} /> */}
      <Input type="text" ref={inputRef}/>

      <Time></Time>
    </div>
  );
}

export default App;
