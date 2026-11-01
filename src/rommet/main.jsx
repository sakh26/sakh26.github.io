import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '../lek/lek.css'
import './rommet.css'
import Rommet from './Rommet.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <Rommet />
  </StrictMode>
)

// Bygget side har ferdig HTML i root som React tar over. I dev er root tom.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
