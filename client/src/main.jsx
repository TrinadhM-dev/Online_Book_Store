import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routers/router'
import {RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

