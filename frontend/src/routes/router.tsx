import {createBrowserRouter} from "react-router-dom";
import Login from "../components/login/login.component";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    }
])