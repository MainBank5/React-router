import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
//import{StaticRouter} from 'react-router-dom/server' its sepcifaclly for working on the server when you want 
//render a strictly a specific change. so you must include location on your staticRouter wrapper
//import {MemoryRouter} from 'react-router-dom' is used ideallly when testing. 
//the pages aree rendered from memory(not browser) and thus the url doesnt change

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
