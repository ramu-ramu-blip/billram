import { createBrowserRouter } from "react-router";
import Register from "../components/user/Register";

let routes=createBrowserRouter([
    {
        path:"/",
        element:<Register></Register>

    }
])
export default routes