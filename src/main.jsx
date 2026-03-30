import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  console.log('Mounting React Application...');
  const root = document.getElementById('root');
  if (!root) throw new Error('Root element not found in index.html');
  
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (error) {
  console.error('FATAL MOUNT ERROR:', error);
  document.body.innerHTML = `<div style="padding: 2rem; color: red;"><h1>App Failed to Start</h1><p>${error.message}</p></div>`;
}
