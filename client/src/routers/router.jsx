import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/orders",
            element:<div >This is nothing bt order page</div>
        },
        {
            path:"/about",
            element:<div>About Page</div>
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/register",
          element:<Register />
        }
    ]
  },
]);

export default router;