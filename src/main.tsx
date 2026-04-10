import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './App.tsx'
import ThemeSwitcher from './theme-switcher.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeSwitcher />
    <App />
  </StrictMode>,
)
