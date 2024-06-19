import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { AuthContestProvider } from './context/AuthContest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthContestProvider>

    <App />
    
  </AuthContestProvider>

  </BrowserRouter>
  </React.StrictMode>,
)
