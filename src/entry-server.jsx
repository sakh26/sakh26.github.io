import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import Forside from './forside/Forside.jsx'
import Rommet from './rommet/Rommet.jsx'

// Brukes bare ved bygging: gjør om sidene til ferdig HTML, så teksten står i
// sidekilden for søkemotorer og rekrutteringssystemer som ikke kjører JavaScript.
export const sider = {
  'index.html': () => renderToString(<Forside />),
  'portefolje/index.html': () => renderToString(<App />),
  'rommet/index.html': () => renderToString(<Rommet />),
}
