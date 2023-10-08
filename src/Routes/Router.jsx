import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceCardDetails from "../Pages/Home/ServiceCard/ServiceCardDetails";
import PrivateRoute from "./PrivateRoute";
import EventCard from "../Pages/Home/EventCard/EventCard";

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
                element: <PrivateRoute><ServiceCardDetails></ServiceCardDetails></PrivateRoute>,
                loader: () => fetch('/socialdata.json'),
            },
            {
                path: "/event/:id",
                element: <EventCard></EventCard>,
                loader: () => fetch('/eventdata.json'),
            }
        ]
    }
])

export default router;