import {useRoutes} from "react-router-dom";
import { ROUTES } from "../constants/routes";
import UserHomePage from "../pages/home/UserHomePage";
import Dashboard from "../pages/home/AdminDashboard";

export default function ProtectedRoutes() {
    return useRoutes([
        {path: ROUTES.USER_HOME_PAGE, element: <UserHomePage/>},
        {path: ROUTES.ADMIN_DASHBOARD, element: <Dashboard/>}
    ])
}
