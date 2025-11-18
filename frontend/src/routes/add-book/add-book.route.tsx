import {RouteObject} from "react-router-dom";
import {ROUTES} from "../../constants/routes.constant";
import AddBookContainer from "../../components/add-book/add-book.container";

export const addBookRoute: RouteObject = {
    path: ROUTES.addBook,
    element: <AddBookContainer />
}