import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Brukes bare ved bygging: gjør om siden til ferdig HTML, så teksten står i
// sidekilden for søkemotorer og rekrutteringssystemer som ikke kjører JavaScript.
export function render() {
  return renderToString(<App />)
}
