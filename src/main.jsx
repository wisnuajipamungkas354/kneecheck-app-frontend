import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'

const routes = createBrowserRouter(router);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
