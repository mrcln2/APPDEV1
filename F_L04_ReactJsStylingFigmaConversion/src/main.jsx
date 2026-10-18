import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './root.css'  <-- Comment this out if root.css doesn't exist yet
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)