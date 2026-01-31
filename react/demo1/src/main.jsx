import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JsxDemo from './JsxDemo.jsx'
import ComponentsDemo from './ComponentsDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <JsxDemo />
    <ComponentsDemo />
  </StrictMode>,
)
// createRoot(document.getElementById('root')).render(
//   <h1>Hello React!</h1>
// )  