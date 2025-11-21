import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/store.hook";
import {FC, PropsWithChildren} from "react";

export const ProtectedRoute: FC<PropsWithChildren> = ({children}) => {
    const users = useAppSelector(state => state.users.users);

    const isAllowed = users.length > 0;

    if (!isAllowed) {
        return <Navigate to="/" replace/>;
    }

    return <>{children}</>;
};