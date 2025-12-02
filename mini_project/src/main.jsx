import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StudentsProvider } from './context/StudentsContext'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StudentsProvider>
  </StrictMode>
)
