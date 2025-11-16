import {RouteObject} from "react-router-dom";
import {ROUTES} from "../../constants/routes.constant";
import Main from "../../components/main/main.component";

export const mainRoute: RouteObject = {
    path: ROUTES.main,
    element: <Main />
}