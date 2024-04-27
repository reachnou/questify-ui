import {useRoutes} from "react-router-dom";
import Welcome from "../pages/home/Welcome";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { ROUTES } from "../constants/routes";
import UserHomePage from "../pages/home/UserHomePage";
import AdminDashboard from "../pages/home/AdminDashboard";
import TodoListPage from "../pages/user/TodoListPage";
import ChallengePage from "../pages/user/ChallengePage";
import ChallengePageInAdmin from "../pages/admin/ChallengePage";
import TopicPage from "../pages/admin/TopicPage";
import UserPage from "../pages/admin/UserPage";
import TopicDetailsPage from "../pages/admin/TopicDetailsPage";
import StartedChallengePage from "../pages/user/StartedChallengePage";

export default function MyRoutes() {
    return useRoutes([
        {path: "*", element: <Welcome/>},
        {path: ROUTES.WELCOME, element: <Welcome/>},
        {path: ROUTES.SIGN_IN, element: <Signin/>},
        {path: ROUTES.SIGN_UP, element: <Signup/>},
        {path: ROUTES.USER_HOME_PAGE, element: <UserHomePage/>},
        {path: ROUTES.ADMIN_DASHBOARD, element: <AdminDashboard/>},
        {path: ROUTES.TODO_LIST, element: <TodoListPage/>},
        {path: ROUTES.CHALLENGE, element: <ChallengePage/>},
        {path: ROUTES.TOPIC, element: <TopicPage/>},
        {path: ROUTES.CHALLENGE_IN_ADMIN, element: <ChallengePageInAdmin/>},
        {path: ROUTES.USER, element: <UserPage/>},
        {path: ROUTES.TOPIC_DETAILS, element: <TopicDetailsPage/>},
        {path: ROUTES.CHALLENGING, element: <StartedChallengePage/>}
    ])
}