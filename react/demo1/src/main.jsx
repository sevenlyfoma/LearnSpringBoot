import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JsxDemo from './JsxDemo.jsx'
import ComponentsDemo from './ComponentsDemo.jsx'
import PropsDemo from './PropsDemo.jsx'
import EventsConditionalsDemo from './EventsConditionalsDemo.jsx'
import HooksDemo from './HooksDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>App: </h1>
    <App />
    <h1>JsxDemo: </h1>
    <JsxDemo />
    <h1>Components Demo: </h1>
    <ComponentsDemo />
    <h1>Props Demo: </h1>
    <PropsDemo />
    <h1>Events and Conditionals Demo: </h1>
    <EventsConditionalsDemo />
    <h1>Hooks Demo:</h1>
    <HooksDemo />
  </StrictMode>,
)
// createRoot(document.getElementById('root')).render(
//   <h1>Hello React!</h1>
// )  