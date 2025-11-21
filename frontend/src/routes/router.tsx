import {createBrowserRouter} from "react-router-dom";
import Login from "../components/login/login.component";
import {ProtectedRoute} from "../components/protected-route/protected-route.component";
import UserList from "../components/user-list/user-list.component";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/users",
        element: (
            <ProtectedRoute>
                <UserList />
            </ProtectedRoute>
        )
    },
])