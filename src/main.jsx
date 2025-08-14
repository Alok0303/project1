import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Navigation from './components/navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation/>
    <App/>

  </StrictMode>,
)
