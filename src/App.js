import React, {useRef} from 'react';
import './App.css';

function App() {

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const submitForm = (e) => {
     e.preventDefault();
     console.log('input 1:', inputRef.current.value)
     console.log('input 2:', inputRef2.current.value)
     let input3 = document.getElementById('input3').value
     console.log('input 3:', input3)
  }
  return (
    <div className="App">
        <h1> Uncontrolled Component </h1>
        <form onSubmit={submitForm}>
          <input type='text'ref={inputRef}/> <br />
          <input type='text'ref={inputRef2} /> <br />
          <input type='text' id='input3' /> <br />
          <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
