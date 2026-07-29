import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { I18nProvider } from './context/I18nContext.jsx'
import { UIProvider } from './context/UIContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
)
