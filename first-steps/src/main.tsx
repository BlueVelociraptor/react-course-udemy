import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyAwesomeApp from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyAwesomeApp />
  </StrictMode>,
)
