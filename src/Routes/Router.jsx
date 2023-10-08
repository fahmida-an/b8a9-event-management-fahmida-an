import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceCardDetails from "../Pages/Home/ServiceCard/ServiceCardDetails";

const router = new createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch('/socialdata.json'),
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/service/:id",
                element: <ServiceCardDetails></ServiceCardDetails>,
                loader: () => fetch('/socialdata.json'),
            }
        ]
    }
])

export default router;