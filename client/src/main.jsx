import { createRoot } from 'react-dom/client'
import router from './routers/router'
import {RouterProvider} from "react-router-dom";
import { store } from '././redux/store.js';
import { Provider } from 'react-redux'
import 'sweetalert2/dist/sweetalert2.js'
import './index.css'
import 'sweetalert2/src/sweetalert2.scss'
createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router}></RouterProvider>
  </Provider>

)

