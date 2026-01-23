import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState('Loading...')

  // 3. Fetch data on component mount
  useEffect(() => {
    // 1. Define the fetch function so we can call it immediately AND repeatedly
  const fetchData = () => {
  fetch('/api/hello')
    .then(response => {
      // Check if the status is in the 200-299 range
      if (!response.ok) {
        console.error("not ok")
        throw new Error(`Server responded with status: ${response.status}`);
      }
      return response.text();
    })
    .then(msg => setMessage(msg))
    .catch((error) => {
      console.error('Error fetching data:', error);
      // Now this will run if the server is off OR if it returns an error code
      setMessage('Failed to load message');
    });
};

  // 2. Call it immediately on mount
  fetchData();

  // 3. Set up the interval (e.g., 500ms = 0.5 seconds)
  const intervalId = setInterval(fetchData, 500);

  // 4. CLEANUP: This is crucial! 
  // It stops the timer if the component is destroyed/unmounted.
  return () => clearInterval(intervalId);
  }, []); // Empty array means this runs once when the app starts


  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="Api-data">{message}</p>
    </>
  )
}

export default App
