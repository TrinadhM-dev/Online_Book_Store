import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
        {
            path:"/",
            element:<h>Home</h>
        },
        {
            path:"/orders",
            element:<div>This is nothing bt order page</div>
        },
        {
            path:"/about",
            element:<div>About Page</div>
        }
    ]
  },
]);

export default router;