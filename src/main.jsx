import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import StoreProvider, { Storecontext } from './context/Storecontext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StoreProvider>
      <App />

    </StoreProvider>



  </BrowserRouter>
)
