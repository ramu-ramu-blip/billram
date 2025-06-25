import { createBrowserRouter } from "react-router";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";
import Addbills from "../components/user/main/addBills/Addbills";
import About from "../components/user/main/about/About";
import FilterBills from "../components/user/main/filterBills/FilterBills";
import AddItems from "../components/user/main/addBills/AddItems";

let routes=createBrowserRouter ([


    {
        path:"/additem",
        element:<AddItems></AddItems>
    },
    {
        path:"/register",
        element:<Register></Register>

    },
    {
        path:"/",
        element:<Login></Login>
    },
    {
        path:"/home",
        element:<Main></Main>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"addBills",
                element:<Addbills></Addbills>,
                // children:[
                //     {
                //        index:true,
                //        path:"additem",
                //         element:<AddItems></AddItems>
                //     }
                // ]
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"filterBills",
                element:<FilterBills></FilterBills>
            }
        ]

    }
])
export default routes