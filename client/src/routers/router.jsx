import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

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
        }
    ]
  },
]);

export default router;