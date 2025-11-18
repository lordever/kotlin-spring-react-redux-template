import {createBrowserRouter} from "react-router-dom";
import {mainRoute} from "./main/main.route";
import {addBookRoute} from "./add-book/add-book.route";

export const AppRouter = createBrowserRouter([mainRoute, addBookRoute])